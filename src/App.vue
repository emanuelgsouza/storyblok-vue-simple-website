<script setup>
import Home from "./components/Home.vue";
</script>
 
<template>
  <Suspense>
    <template #default>
      <Home />
    </template>
 
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>