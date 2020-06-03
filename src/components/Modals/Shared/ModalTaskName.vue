<template>
  <div class="row q-mb-sm">
    <q-input 
      outlined 
      :value="name"
      :rules="[val => !!val || 'タスクは必須です']"
      @input="$emit('update:name', $event)"
      autofocus
      ref="name"
      label="タスク" 
      class="col"
      clearable
      clear-icon="close"
      v-select-all
        />
  </div>
</template>

<script>
import { selectAll } from "src/directives/directive-select-all";
export default {
  props: ['name'],
  directives: {
    selectAll
  }
}
</script>