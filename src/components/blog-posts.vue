<template>
  <div v-editable="blok" class="blogPosts" data-testid="blogPosts">
    <h2> Blog posts </h2>

    <ul>
      <template v-for="(relation, index) in blok.posts">

        <li v-if="relation.name" class="blog-post-item">
          {{ index + 1 }} - {{ relation.name }}
        </li>

        <li v-else class="blog-post-item"> {{ index + 1 }} - {{ relation }} </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>