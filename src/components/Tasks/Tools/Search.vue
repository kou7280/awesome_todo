<template>
  <q-input 
    v-model="searchField"
    @keydown.esc="searchField = ''"
    label="Search" 
    outlined
    class="col-10"
    v-select-all>
    <template v-slot:append>
      <q-icon v-if="searchField !== ''" name="close" @click="searchField = ''" ></q-icon>
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { selectAll } from "src/directives/directive-select-all";
export default {
  computed:  {
    ...mapState('tasks', ['search']),
    searchField: {
      get() {
        return this.search
      },
      set(value) {
        this.setSearch(value)
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['setSearch']),
  },
  directives: {
    selectAll
  }
}
</script>