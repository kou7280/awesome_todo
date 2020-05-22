<template>
  <div>
    <list-header
      bgColor="bg-orange-4">Todo</list-header>
    <q-list 
      separator
      bordered
      >
      <task
        v-for="(task, key) in tasksTodo"
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
  props: ['tasksTodo'],
  components: {
    Task,
    ListHeader
  }
}
</script>