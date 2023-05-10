<template>
  <div v-editable="blok" class="innerPost">
    <h2> {{ blok.title }} </h2>

    <div v-html="content" />
  </div>
</template>

<script setup>
import { computed } from "vue"
import { renderRichText } from "@storyblok/vue"

const props = defineProps(['blok'])

const content = computed(() => renderRichText(props.blok.richtext))
</script>