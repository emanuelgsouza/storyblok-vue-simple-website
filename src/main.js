import { createApp } from 'vue';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import App from './App.vue';

import './assets/base.css'
import './assets/main.css'

import BlogPosts from './components/blog-posts.vue'
import Feature from './components/feature.vue'
import Grid from './components/grid.vue'
import Teaser from './components/teaser.vue'
import Page from './components/page.vue'
import BlogAuthors from './components/blog-authors.vue'
 
const app = createApp(App);

app.component('blog-posts', BlogPosts)
app.component('feature', Feature)
app.component('grid', Grid)
app.component('teaser', Teaser)
app.component('page', Page)
app.component('blog-authors', BlogAuthors)
 
app.use(StoryblokVue, {
  bridge: process.env.NODE_ENV !== 'production',
  use: [apiPlugin],
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  apiOptions: {
    region: 'us'
  }
});
 
app.mount('#app');