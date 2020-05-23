import Vue from 'vue';
import { uid } from "quasar";
const state = {
  tasks: {
    ID1: {
      name: 'Go to shop',
      completed: false,
      dueDate: '2019/05/19',
      dueTime: '18:30',
    },
    ID2: {
      name: 'Get bananas',
      completed: false,
      dueDate: '2019/05/20',
      dueTime: '16:00',
    },
    ID3: {
      name: 'Get apples',
      completed: false,
      dueDate: '2019/05/21',
      dueTime: '18:00',
    },
  },
  search: '',
}

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, payload) {
    Vue.delete(state.tasks, payload)
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  },
  setSearch(state, value) {
    state.search = value
  }
}

const actions = {
  updateTask({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask({ commit }, payload) {
    commit('deleteTask', payload)
  },
  addTask({ commit }, task) {
    let taskId = uid();
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  },
  setSearch({ commit }, value) {
    commit('setSearch', value)
  }
}

const getters = {
  tasksFiltered: state => {
    let tasksFiltered = {}

    if(state.search) {
      Object.keys(state.tasks).forEach(key => {
        let task = state.tasks[key]
        let taskNameLowerCase = task.name.toLowerCase()
        let searchLowerCase = state.search.toLowerCase()
  
        if (taskNameLowerCase.includes(searchLowerCase)) {
          tasksFiltered[key] = task
        }
      })

      return tasksFiltered
    }
    
    return state.tasks
  },
  tasksTodo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    
    Object.keys(tasksFiltered).forEach(key => {
      let task = tasksFiltered[key]

      if (!task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  },
  tasksCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    
    Object.keys(tasksFiltered).forEach(key => {
      let task = tasksFiltered[key]

      if (task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}