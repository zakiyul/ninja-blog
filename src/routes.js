import ShowBlog from "./components/showBlog.vue";
import AddBlog from "./components/addBlog.vue";
import DetailBlog from "./components/detailBlog.vue";

export default [
  { path: "/", component: ShowBlog },
  { path: "/add", component: AddBlog },
  { path: "/blog/:id", component: DetailBlog }
];
