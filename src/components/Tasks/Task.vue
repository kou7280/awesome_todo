<template>
  <q-item 
    @click="updateTask({ id: id, updates: { completed: !task.completed }})"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    clickable
    v-ripple>
    <q-item-section top avatar>
      <q-checkbox 
        :value="task.completed"
        class="no-pointer-events" />
    </q-item-section>
    <q-item-section>
      <q-item-label
        :class="{ 'text-strikethrought' : task.completed }">
        {{ task.name }}
      </q-item-label>
    </q-item-section>
    <q-item-section 
      side
      v-if="task.dueDate || task.dueTime" >
      <div class="row">
        <div class="column justify-center">
          <q-icon 
          name="event" 
          size="18px" 
          class="q-mr-xs"/>
        </div>
        <div class="column items-end">
          <q-item-label caption>
            {{ task.dueDate }}
          </q-item-label>
          <q-item-label caption>
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <q-btn
        flat
        round 
        dense 
        color="red" 
        icon="delete"
        @click.stop="promptToDelete(id)" />
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['task', 'id'],
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete(id) {
      this.$q.dialog({
        title: '確認',
        message: '本当に消去しますか？',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  },
}
</script>

<style>

</style>