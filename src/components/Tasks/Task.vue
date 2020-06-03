<template>
  <q-item 
    @click="updateTask({ id: id, updates: { completed: !task.completed }})"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    v-touch-hold:1000.mouse="showEditTaskModal"
    clickable
    v-ripple>
    <q-item-section top avatar>
      <q-checkbox 
        :value="task.completed"
        class="no-pointer-events" />
    </q-item-section>
    <q-item-section>
      <q-item-label
        :class="{ 'text-strikethrought' : task.completed }"
        v-html="$options.filters.searchHighlight(task.name, search)">
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
            {{ task.dueDate | niceDate }}
          </q-item-label>
          <q-item-label caption>
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn 
          color="primary" 
          icon="edit" 
          flat 
          round
          dense
          @click.stop="showEditTaskModal" />
        <q-btn
          flat
          round 
          dense 
          color="red" 
          icon="delete"
          @click.stop="promptToDelete(id)" />
      </div>
    </q-item-section>
    <q-dialog v-model="showEditTask">
      <edit-task 
        @close="showEditTask = false"
        :task="task"
        :id="id"></edit-task>
    </q-dialog>
  </q-item>
</template>

<script>
import { date } from "quasar";
import { mapActions, mapState } from 'vuex'
import EditTask from '../Modals/EditTask'
export default {
  props: ['task', 'id'],
  data() {
    return {
      showEditTask: false,
    }
  },
  computed: {
    ...mapState('tasks', ['search']),
  },
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
    },
    showEditTaskModal() {
      this.showEditTask = true
    },
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, 'M月D日')
    },
    searchHighlight(value, search) {
      if (search) {
        let regExp = new RegExp(search, 'ig')
        return value.replace(regExp, match => {
          return '<span class="bg-yellow-6">' + match + '</span>'
        })
      }
      return value
    }
  },
  components: {
    EditTask,
  },
}
</script>

<style>

</style>