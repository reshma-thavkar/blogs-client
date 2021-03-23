<template>
    <div>
        <div v-for="user in users" :key="user._id" class=" " >
           <div class="w-2/5 flex flex-col user-div">
               <span>Name :  {{ user.name }}</span>
           <span>Email : {{ user.email }}</span>
            <button @click="getBlogs(user._id)" class="w-1/4 view-btn">view blogs</button>
            <div v-for="blog in blogs" :key="blog._id">
        <div class="w-1/2 inner-blog">
             <h1>TITLE :  {{ blog.title}}</h1>
             <p><strong>DESCRIPTION:</strong> {{blog.description }}</p>
        </div>
            </div>
           </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
   data(){
       return{
           users : [],
           blogs : []
       }
   },
   mounted(){
       let token = localStorage.getItem("token");
       axios.get(`http://localhost:5000/api/users`, {
           headers : {
               authorization : `Bearer ${token}`
           }
       })
       .then(response => {
           console.log(JSON.stringify(response.data))
           this.users = response.data
       }).catch(error => {
           console.log(error)
       })
   },
   methods: {
       getBlogs(userId){
           let token = localStorage.getItem("token")
           axios.get(`http://localhost:5000/api/blogs/${userId}`,{
               headers : {
                   authorization : `Bearer ${token}`
               }
           }).then(response => {
               console.log(JSON.stringify(response.data))
               this.blogs = response.data.blogs
           }).catch(error => {
               console.log(error)
           })
       }
   }
}
</script>
<style scoped>
.inner-blog{
    background-color: rgb(162, 236, 152);
}
.view-btn{
    padding: 5px 10px;
}
</style>