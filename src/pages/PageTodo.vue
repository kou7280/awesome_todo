<template>
  <q-page class="q-pa-md">
    <no-tasks
      v-if="!Object.keys(tasksTodo).length"></no-tasks>
    <tasks-todo
      :tasksTodo="tasksTodo"
      v-else></tasks-todo>

    <tasks-completed
      :tasksCompleted="tasksCompleted"
      v-if="Object.keys(tasksCompleted).length"></tasks-completed>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>
    <q-dialog v-model="showAddTask">
      <add-task
        @close="showAddTask = false"></add-task>
    </q-dialog>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AddTask from 'components/Modals/AddTask'
  import TasksTodo from 'components/Tasks/TasksTodo'
  import TasksCompleted from 'components/Tasks/TasksCompleted'
  import NoTasks from 'components/Tasks/NoTasks'
  export default {
    data() {
      return {
        showAddTask: false,
      }
    },
    computed: {
      ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
    },
    mounted() {
      this.$root.$on('showAddTask', () => {
        this.showAddTask = true;
      });
    },
    components: {
      AddTask,
      TasksTodo,
      TasksCompleted,
      NoTasks
    }
  }
</script>

<style>
  .text-strikethrought {
    text-decoration: line-through;
  }
</style>
