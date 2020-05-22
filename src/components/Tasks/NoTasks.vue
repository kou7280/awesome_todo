<template>
  <q-banner class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon name="check" color="primary" />
    </template>
    本日のタスクは全て完了しました！
    <template v-slot:action>
      <q-btn
        @click="$root.$emit('showAddTask')"
        flat 
        color="primary" 
        label="タスクを追加する" />
    </template>
  </q-banner>
</template>

<script>
export default {
  
}
</script>