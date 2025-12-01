<template>
  <div v-if="error">{{ error }}</div>
  <div v-else-if="post">
    <h1>{{ post.title }}</h1>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import { useRoute } from 'vue-router';
import getPost from '../composables/getPost';

export default {
  setup() {
    const route = useRoute();
    const { post, error } = getPost(route.params.id); // Fetch post by ID

    return { post, error };
  },
};
</script>
