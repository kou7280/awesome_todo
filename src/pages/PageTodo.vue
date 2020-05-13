<template>
  <q-page class="q-pa-md">
    <q-list 
      separator
      bordered>
      <Task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key">
      </Task>
    </q-list>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Task from 'components/Tasks/Task.vue'
  export default {
    computed: {
      ...mapGetters('tasks', ['tasks'])
    },
    components: {
      Task,
    }

  }
</script>

<style>
  .text-strikethrought {
    text-decoration: line-through;
  }
</style>
