<template>
  <q-page class="q-pa-md">
    <q-list 
      v-if="Object.keys(tasks).length"
      separator
      bordered
      >
      <Task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key">
      </Task>
    </q-list>
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
  import Task from 'components/Tasks/Task'
  import AddTask from 'components/Modals/AddTask'
  export default {
    data() {
      return {
        showAddTask: false,
      }
    },
    computed: {
      ...mapGetters('tasks', ['tasks'])
    },
    components: {
      Task,
      AddTask,
    }
  }
</script>

<style>
  .text-strikethrought {
    text-decoration: line-through;
  }
</style>
