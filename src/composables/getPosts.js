// src/composables/getPosts.js
import { ref } from 'vue';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const loading = ref(true);

  const load = async () => {
    try {
      const res = await fetch('http://localhost:3000/posts/');
      if (!res.ok) throw new Error('Failed to fetch posts');
      posts.value = await res.json();
    } catch (err) {
      error.value = err.message;
      console.error(error.value);
    } finally {
      loading.value = false;
    }
  };

  return { posts, error, loading, load };
};

export default getPosts;
