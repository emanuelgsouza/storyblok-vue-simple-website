<template>
  <div v-editable="blok" class="feature" data-testid="feature">
    {{ blok.name }}
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>