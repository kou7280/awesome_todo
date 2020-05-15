<template>
  <q-card>
  <q-card-section class="row justify-between" >
    <div class="text-h6">タスク追加</div>
    <q-btn 
      v-close-popup
      dense 
      flat 
      round
      icon="close" />
  </q-card-section>
  <q-form
    @submit="onSubmit"
    class="q-gutter-md"
  >
    <q-card-section class="q-pt-none">
      <div class="row q-mb-sm">
        <q-input 
          outlined 
          v-model="taskToSubmit.name"
          :rules="[val => !!val || 'タスクは必須です']"
          autofocus
          ref="name"
          label="タスク" 
          class="col"
          clearable
          clear-icon="close"
           />
      </div>

      <div class="row q-mb-sm">
        <q-input
          outlined
          v-model="taskToSubmit.dueDate"
          label="日程"
          clearable
          clear-icon="close" >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="taskToSubmit.dueDate" @input="() => $refs.qDateProxy.hide()" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <div class="row q-mb-sm">
        <q-input
          v-if="taskToSubmit.dueDate"
          outlined
          v-model="taskToSubmit.dueTime"
          label="時間"
          class="col"
          clearable
          clear-icon="close" >
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy ref="qTimeProxy" transition-show="scale" transition-hide="scale">
                <q-time v-model="taskToSubmit.dueTime" @input="() => $refs.qTimeProxy.hide()"/>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </q-card-section>
    
    <q-card-actions align="right">
      <q-btn
      label="保存" 
      color="primary" 
      type="submit" />
    </q-card-actions>
  </q-form>

</q-card>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
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
      onSubmit() {
        this.$refs.name.validate()
        if (!this.$refs.name.hasError) {
          this.submitTask()
        }
      },
      submitTask() {
        this.addTask(this.taskToSubmit)
        this.$emit('close')
      },
    },        
  }
</script>