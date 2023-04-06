<template>
  <div v-editable="blok" class="blogPosts" data-testid="blogPosts">
    <h2> Blog posts </h2>

    <ul>
      <template v-for="(relation, index) in blok.posts">

        <li v-if="relation.name" class="blog-post-item">
          {{ relation.name }} - {{ getAuthorsName(relation) }}
        </li>

        <li v-else class="blog-post-item"> {{ index + 1 }} - {{ relation }} </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })

const getAuthorsName = (relation) => {
  const data = relation.content.body.find(comp => {
    return comp.component === 'blog-author'
  }) || {}
  const authors = data.authors || []
  const authorNames = authors.map((author) => author.name).join(', ')

  return authorNames
}
</script>