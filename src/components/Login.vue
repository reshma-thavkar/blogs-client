<template>
    <div class="login-div text-left">
       <h1 class="text-center text-xl mb-4">Sign in </h1>
      <form @submit.prevent="loggedIn">
           <div class=" mb-4">
           <label for="email" class="block mb-2">Email</label>
           <input type="email" placeholder="enter your email" class="w-full" v-model="email">
       </div>
       <div class=" mb-4">
           <label for="password" class="block mb-2">Password</label>
           <input type="password" placeholder="enter password" class="w-full" v-model="password">
       </div>
       <div class="mb-4">
           <button class="text-sm">Sign in</button>
       </div>
      </form>
       <div class="text-center">
           <p class="inline mr-2">Not a member</p>
           <router-link to="/register">Sign up</router-link>
       </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data(){
      return{
          email : "",
          password : ""
      }
  },
  methods : {
      loggedIn(){
          axios.post("http://localhost:5000/api/users/login", {
              email : this.email,
              password : this.password
          }).then(response => {
              console.log(JSON.stringify(response.data));
          }).catch(error => {
              console.log(error);
          })
      }
  }  
}
</script>
<style scoped>
a{
    color: blue;
    text-decoration: underline;
}
</style>