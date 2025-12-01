// composables/getPost.js
import { ref, onMounted } from 'vue';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      // Make sure the slash before ${id} exists
      const res = await fetch(`http://localhost:3000/posts/` + id);
      if (!res.ok) throw new Error('Post not found');
      post.value = await res.json();
    } catch (err) {
      error.value = err.message;
      console.error(error.value);
    }
  };

  onMounted(load); // Automatically fetch when the component mounts

  return { post, error };
};

export default getPost;
