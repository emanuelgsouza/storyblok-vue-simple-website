<template>
  <div v-editable="blok" class="page" data-testid="page">
    <component
      v-for="row in blok.body"
      :is="row.component"
      :blok="row"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>