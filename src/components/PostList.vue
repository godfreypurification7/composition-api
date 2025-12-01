<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'

export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },

  components: { SinglePost },

  setup() {
    onMounted(() => console.log('component mounted'))
    onUpdated(() => console.log('component updated'))
    onUnmounted(() => console.log('component unmounted'))

    return {}
  }
}
</script>
