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
    ID4: {
      name: 'Go to shop',
      completed: false,
      dueDate: '2019/05/19',
      dueTime: '18:30',
    },
    ID5: {
      name: 'Get bananas',
      completed: false,
      dueDate: '2019/05/20',
      dueTime: '16:00',
    },
    ID6: {
      name: 'Get apples',
      completed: false,
      dueDate: '2019/05/21',
      dueTime: '18:00',
    },
    ID7: {
      name: 'Go to shop',
      completed: false,
      dueDate: '2019/05/19',
      dueTime: '18:30',
    },
    ID8: {
      name: 'Get bananas',
      completed: false,
      dueDate: '2019/05/20',
      dueTime: '16:00',
    },
    ID9: {
      name: 'Get apples',
      completed: false,
      dueDate: '2019/05/21',
      dueTime: '18:00',
    },
    ID10: {
      name: 'Go to shop',
      completed: false,
      dueDate: '2019/05/19',
      dueTime: '18:30',
    },
    I11: {
      name: 'Get bananas',
      completed: false,
      dueDate: '2019/05/20',
      dueTime: '16:00',
    },
    ID12: {
      name: 'Get apples',
      completed: false,
      dueDate: '2019/05/21',
      dueTime: '18:00',
    },
  },
  search: '',
  sort: 'name',
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
  },
  setSort(state, value) {
    state.sort = value
  },
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
  },
  setSort({ commit }, value) {
    commit('setSort', value)
  } 
}

const getters = {
  tasksSorted: state => {
    let tasksSorted = {},
        keysOrderd = Object.keys(state.tasks)

    keysOrderd.sort((a, b) => {
      let propA = state.tasks[a][state.sort].toLowerCase(),
          propB = state.tasks[b][state.sort].toLowerCase()

      if (propA > propB) return 1
      else if (propA < propB) return -1
      else return 0
    });

    keysOrderd.forEach(key => {
      tasksSorted[key] = state.tasks[key]
    });

    return tasksSorted
  },
  tasksFiltered: (state, getters) => {
    let tasksFiltered = {}

    if(state.search) {
      Object.keys(getters.tasksSorted).forEach(key => {
        let task = getters.tasksSorted[key]
        let taskNameLowerCase = task.name.toLowerCase()
        let searchLowerCase = state.search.toLowerCase()
  
        if (taskNameLowerCase.includes(searchLowerCase)) {
          tasksFiltered[key] = task
        }
      })

      return tasksFiltered
    }
    
    return getters.tasksSorted
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