<template>
  <div>
    <h1>Posts -- {{ a.name.length.dk.d }}</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
<script setup>
async function fetchPosts() {
  try {
    const data = await $fetch('https://jsonplaceholder.typicsode.com/posts');
    return data;
  } catch (err) {
    // Automatically trigger Nuxt error page
    // throw createError({
    //   statusCode: 500,
    //   statusMessage: 'Failed to fetch posts!',
    // });
  }
}
const posts = await fetchPosts();
let a = {
  name: 'reda',
};
</script>
