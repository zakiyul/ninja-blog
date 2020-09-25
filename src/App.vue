<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from "./components/addBlog";
import ShowBlogs from "./components/showBlog";
import Navbar from "./components/navbar";

export default {
  components: {
    "add-blog": AddBlog,
    "show-blogs": ShowBlogs,
    "app-header": Navbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
body {
  font-family: "Nunito", sans-serif;
}
</style>
