import Vue from "vue";
import VueRouter from "vue-router";
import AddBlog from "../components/AddBlog"
import GetBlogs from "../components/GetBlogs"
import Login from "../components/Login"
import Register from "../components/Register"
import ShowUsers from "../components/ShowUsers"

Vue.use(VueRouter);

 const routes = [
   
  {
      path : "/",
      component : AddBlog 
  },
  {
    path: "/get-blogs",
    component : GetBlogs
  },
  {
    path: "/login",
    component : Login
  },
  {
    path : "/register",
    component : Register
  },
  {
    path : "/users",
    component : ShowUsers
  }

 ];
 const router = new VueRouter({
    mode: "history",
    routes,
  });
  
  export default router;