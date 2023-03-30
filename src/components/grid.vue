<template>
  <div v-editable="blok" class="grid" data-testid="grid">
    <component
      v-for="column in blok.columns"
      :is="column.component"
      :blok="column"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>