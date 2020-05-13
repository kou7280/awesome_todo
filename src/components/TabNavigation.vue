<template>
  <q-route-tab 
  :key="title"
  :to="link"
  :icon="icon" 
  :label="title"
  exact />
</template>

<script>
export default {
  name: 'TabNavigation',
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
