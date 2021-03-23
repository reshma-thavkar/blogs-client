<template>
    <div class="login-div text-left">
        <h1 class="text-center text-xl mb-4">Sign up</h1>
        <form @submit.prevent="registerUser">
            <div class="mb-4">
            <label for="fname" class="block mb-2">First Name</label>
            <input type="text" placeholder="Enter your name" class="w-full" v-model="formData.name">
        </div>
        <div class="mb-4">
            <label for="email" class="block mb-2">Email</label>
            <input type="email" placeholder="Enter your email" class="w-full" v-model="formData.email">
        </div>
        <div class="mb-4">
            <label for="password" class="block mb-2">Password</label>
            <input type="password" placeholder="Enter password" class="w-full" v-model="formData.password">
        </div>
        <div class="mb-4">
            <button>Sign up
            </button>
        </div>
        <div class="text-center">
            <p class="mr-2 inline">Already have account</p>
            <router-link to="/login">Sign in</router-link>
        </div>
        </form>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            formData :{
            name: "",
            email: "",
            password : ""
            }
            }
        },
    methods : {
        registerUser(){
        console.log("------------------", this.formData)
            axios.post("http://localhost:5000/api/users", {
                name : this.formData.name,
                email : this.formData.email,
                password : this.formData.password
            })
            .then(response => {
                 console.log(JSON.stringify(response.data));
                 const token = response.data.token;
                 localStorage.setItem("token", token)
                 console.log(token);
            })
            .catch(error => {
                console.log(error)
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