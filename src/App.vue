<template>
  <div id="app">
    <PostForm/>
    <h1>Posts count: {{ postsCount }}</h1>
    <div class="post" v-for="post in validPost" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <hr />
    <p>
      Fetch & Post data to Backend API: <a href="https://json-server-posts.herokuapp.com/posts" target="_blank" rel="noreferrer nofollow noopener">JSON Server, Posts</a>
    </p>

  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import PostForm from "./components/PostForm";

// Set posts limit manually (by default: 3 posts)
let postLimit = 30;

export default {
  name: 'VuexStart',
  computed: mapGetters(['validPost', 'postsCount']),
  methods: mapActions(['fetchPosts']),
  components: {
    PostForm
  },
  async mounted() {
    await this.fetchPosts(postLimit)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post {
  border: 1px solid cornflowerblue;
  margin: 5px auto;
  padding: 15px;
  color: beige;
  background-color: dodgerblue;
}
</style>
