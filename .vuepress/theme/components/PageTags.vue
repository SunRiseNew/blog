<template>
  <section class="page-tags d-inline-flex align-center flex-wrap ma-4">
    <span v-if="pageTags.length !== 0" class="mr-2">标签:</span>
    <v-btn v-for="(tag, index) in pageTags" :key="index" :to="tag.path" text small rounded>{{tag.name}}</v-btn>
  </section>
</template>

<script>
import { buildAllClassificationsName } from '@theme/util'

export default {
  name: 'PageTags',
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  computed: {
    pageTags() {
      return this.page[buildAllClassificationsName('tags')] || []
    }
  }
}
</script>
<style lang="stylus" scoped></style>
