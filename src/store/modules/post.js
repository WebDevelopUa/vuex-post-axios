import axios from "axios";

const baseUrl = `https://json-server-posts.herokuapp.com/posts`;

export default {
  actions: {
    async fetchPosts({ commit }, limit = 3) {
      const res = await axios.get(`${baseUrl}?_limit=${limit}`);
      commit("fetchPosts", res.data);
      console.log(`All Posts are Fetched!`);
    },
    async addPost({ commit }, { title, body }) {
      const response = await axios.post(baseUrl, { title, body });
      commit("createPost", response.data);
      console.log(
        `New Post with title: "${title}" | body: "${body}" is Created!`
      );
    },
  },
  mutations: {
    fetchPosts(state, posts) {
      state.posts = posts;
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost);
    },
  },
  state: {
    posts: [],
  },
  getters: {
    validPost(state) {
      return state.posts.filter((post) => post.title && post.body);
    },
    postsCount(state, getters) {
      console.log(`Valid posts count: ${getters.validPost.length}`);
      return getters.validPost.length;
    },
  },
};
