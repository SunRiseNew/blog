<template>
  <section class="archive">
    <h3 class="text-center">{{$currentArchives.key}}</h3>
    <page-overview v-for="(page, index) in pages" :key="index" :page="page"></page-overview>
    <div class="d-flex justify-center">
      <pagination></pagination>
    </div>
  </section>
</template>

<script>
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
import PageOverview from '@theme/components/PageOverview'

export default {
  name: 'Archive',
  components: {
    Pagination,
    PageOverview
  },
  computed: {
    pages() {
      return this.$pagination.pages || []
    }
  }
}
</script>

<style lang="stylus" scoped></style>
