<script setup>
import { useStoryblok } from '@storyblok/vue';
const apiOptions = {
  version: 'draft',
  resolve_relations: ['blog-posts.posts'],
}

const bridgeOptions = {
  // you need to configure a custom parent to connect with the app
  // and this config should be the URL of the app that you are using
  customParent: 'https://app.storyblok.com/',
  resolveRelations: ['blog-posts.posts']
}

const story = await useStoryblok('home', apiOptions, bridgeOptions);
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>