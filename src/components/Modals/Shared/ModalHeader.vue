<template>
  <q-card-section class="row justify-between" >
    <div class="text-h6"><slot></slot></div>
    <q-btn 
      v-close-popup
      dense 
      flat 
      round
      icon="close" />
  </q-card-section>
</template>

<script>
export default {
  
}
</script>

