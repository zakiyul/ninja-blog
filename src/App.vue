<template>
  <router-view></router-view>
</template>

<script>
import AddBlog from "./components/addBlog";
import ShowBlogs from "./components/showBlog";

export default {
  components: {
    "add-blog": AddBlog,
    "show-blogs": ShowBlogs
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
body {
  font-family: "Nunito", sans-serif;
}
</style>
