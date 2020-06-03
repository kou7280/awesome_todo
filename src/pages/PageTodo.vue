<template>
  <q-page>
    <div class="q-pa-md full-width full-height absolute column">
      <div class="q-mb-lg row q-col-gutter-sm">
        <search />
        <sort />
      </div>
      <q-banner 
        v-if="!Object.keys(tasksFiltered).length && search"
        inline-actions
        class="text-white bg-red">
        <template v-slot:avatar>
          <q-icon name="report_problem" color="white" />
        </template>
        検索結果が見つかりませんでした
      </q-banner>
      <q-scroll-area class="q-scroll-area-tasks">
        <no-tasks
          v-if="!Object.keys(tasksTodo).length && !search"></no-tasks>
        <tasks-todo
          v-if="Object.keys(tasksTodo).length"
          :tasksTodo="tasksTodo"></tasks-todo>

        <tasks-completed
          :tasksCompleted="tasksCompleted"
          v-if="Object.keys(tasksCompleted).length"
          class="q-mb-lg"></tasks-completed>
      </q-scroll-area>
      <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
        <q-btn
          @click="showAddTask = true"
          round
          class="all-pointer-events"
          color="primary"
          size="24px"
          icon="add"
        />
      </div>
    </div>
    <q-dialog v-model="showAddTask">
      <add-task
        @close="showAddTask = false"></add-task>
    </q-dialog>
  </q-page>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  import AddTask from 'components/Modals/AddTask'
  import TasksTodo from 'components/Tasks/TasksTodo'
  import TasksCompleted from 'components/Tasks/TasksCompleted'
  import NoTasks from 'components/Tasks/NoTasks'
  import Search from 'components/Tasks/Tools/Search'
  import Sort from 'components/Tasks/Tools/Sort'
  export default {
    data() {
      return {
        showAddTask: false,
      }
    },
    computed: {
      ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted', 'tasksFiltered']),
      ...mapState('tasks', ['search']),
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
      NoTasks,
      Search,
      Sort,
    }
  }
</script>

<style>
  .text-strikethrought {
    text-decoration: line-through;
  }

  .q-scroll-area-tasks {
    display: flex;
    flex: 1;
  }
</style>
