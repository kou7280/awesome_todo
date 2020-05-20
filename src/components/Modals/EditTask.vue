<template>
<q-card>
  <modal-header>タスク編集</modal-header>
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
  import ModalHeader from './Shared/ModalHeader'
  import ModalTaskName from './Shared/ModalTaskName'
  import ModalDueDate from './Shared/ModalDueDate'
  import ModalDueTime from './Shared/ModalDueTime'
  import ModalButtons from './Shared/ModalButtons'
  export default {
    props: ['task', 'id'],
    data() {
      return {
        taskToSubmit: {
          name: this.task.name,
          dueDate: this.task.dueDate,
          dueTime: this.task.dueTime,
          completed: false,
        }
      }
    },
    methods: {
      ...mapActions('tasks', ['updateTask']),
      onSubmit() {
        this.$refs.modalTaskName.$refs.name.validate()
        if (!this.$refs.modalTaskName.$refs.name.hasError) {
          this.submitTask()
        }
      },
      submitTask() {
        this.updateTask({
          id: this.id,
          updates: this.taskToSubmit
        })
        this.$emit('close')
      },
    },
    components: {
      ModalHeader,
      ModalTaskName,
      ModalDueDate,
      ModalDueTime,
      ModalButtons,
    },
  }
</script>