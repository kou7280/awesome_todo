<template>
  <div class="q-mt-lg">
    <list-header
      bgColor="bg-green-4">Completed</list-header>
    <q-list 
      v-if="Object.keys(tasksCompleted).length"
      separator
      bordered
      >
      <task
        v-for="(task, key) in tasksCompleted"
        :key="key"
        :task="task"
        :id="key">
      </task>
    </q-list>
  </div>
</template>

<script>
import Task from 'components/Tasks/Task'
import ListHeader from 'components/Shared/ListHeader'
export default {
  props: ['tasksCompleted'],
  components: {
    Task,
    ListHeader,
  }
}
</script>