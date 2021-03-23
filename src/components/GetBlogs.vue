<template>
    <div class="">
    <div v-for="blog in blogs" :key="blog._id" class="w-2/5 text-left flex justify-between blogs-div">
    
        <div>
             <h1>TITLE :  {{ blog.title}}</h1>
             <p><strong>DESCRIPTION:</strong> {{blog.description }}</p>
        </div>
        <div class="flex justify-between">
           <div class="mr-4">
                <button class="icon-btn">  
            <img src="../assets/images/edit-solid.svg" class="svg-icons" alt="">
            </button>
           </div>

           <div>
                <button class="icon-btn" @click="deleteBlog(blog._id)">
                <img src="../assets/images/trash-alt-solid.svg" class="svg-icons" alt="">
            </button>
           </div>
    </div>
    </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
   props  : {
       title : String,
      description : String
   },
   data(){
       return{
           blogs : []
       }
   },
   mounted() {
       let token = localStorage.getItem("token");

           axios.get("http://localhost:5000/api/blogs", {
               headers : {
                   authorization : `Bearer ${token}`
               }
           })
           .then(response => {
               console.log(response)
               this.blogs = response.data.blogs;
           })
           .catch(error => {
               console.log(error);
           })
   },
   methods: {
       deleteBlog(userId){
           let token = localStorage.getItem("token")
           axios.delete(`http://localhost:5000/api/blogs/${userId}`, {
               headers : {
                   authorization : `Bearer ${token}`
               }
           }).then(response => {
               console.log(JSON.stringify(response.data))
               this.getBlogs();
            
           }).catch(error => {
                console.log(error)
           })

       },
      getBlogs(){
               let token = localStorage.getItem("token");
               axios.get("http://localhost:5000/api/blogs", {
               headers : {
                   authorization : `Bearer ${token}`
               }
           })
           .then(response => {
               console.log(response)
               this.blogs = response.data.blogs;
           })
           .catch(error => {
               console.log(error);
           })
               }
       }
}

</script>
<style scoped>
.svg-icons{
    width: 20px;
    height: 20px;
}
.icon-btn{
    background-color: transparent;
    border: none;
    padding: 0;
}
</style>