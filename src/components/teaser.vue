<template>
  <div v-editable="blok" class="teaser" data-testid="teaser">
    {{ blok.headline }}
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>