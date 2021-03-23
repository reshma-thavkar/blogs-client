<template>
  <div id="app" class="text-center">
    <router-link to="/login">Login |</router-link>
    <router-link to="/register">Register |</router-link>
      <router-link to="/">Add Blog | </router-link>
       <router-link to="/get-blogs">View Blogs | </router-link>
       <router-link to="/users">User Profile</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  
}
</script>
<style scoped>

</style>
