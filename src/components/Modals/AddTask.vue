<template>
<q-card>
  <modal-header>タスク追加</modal-header>
  <q-form
    @submit="onSubmit"
    class="q-gutter-md"
  >
    <q-card-section class="q-pt-none">
      <modal-task-name
        :name.sync="taskToSubmit.name"
        ref="modalTaskName"></modal-task-name>
      
      <modal-due-date :dueDate.sync="taskToSubmit.dueDate"></modal-due-date>
      <modal-due-time
        v-if="taskToSubmit.dueDate"
        :dueTime.sync="taskToSubmit.dueTime"></modal-due-time>
    </q-card-section>
    <modal-buttons></modal-buttons>

  </q-form>

</q-card>
</template>

<script>
  import { mapActions } from 'vuex'
  import mixinAddEditTask from 'src/mixins/mixin-add-edit-task'
  export default {
    mixins: [mixinAddEditTask],
    data() {
      return {
        taskToSubmit: {
          name: '',
          dueDate: '',
          dueTime: '',
          completed: false,
        }
      }
    },
    methods: {
      ...mapActions('tasks', ['addTask']),
      submitTask() {
        this.addTask(this.taskToSubmit)
        this.$emit('close')
      },
    },
  }
</script>