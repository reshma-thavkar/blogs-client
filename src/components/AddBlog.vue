<template>
    <div>
        <div class="w-2/5 h-1/4 border mx-auto rounded-lg text-left outer-div ">
        <h1 class="text-center text-xl">Add your blogs here</h1>

            <form class="mt-6" @submit.prevent="addBlog">
              <div class="mb-4 ">
                  <label for="title" class="block mb-2 ">Title</label>
                  <input type="text" placeholder="Enter title here" class="w-full" v-model.lazy="title">
              </div>
              <div class="mb-4 ">
                  <label for="description" class="block mb-2">Description</label>
                  <textarea name="description"  cols="20" rows="6" class="w-full" v-model.lazy="description"></textarea>
              </div>
              <div>
                  <button class="text-sm" >Submit</button>
              </div>
             </form>
    </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
                title: "",
               description : ""
            }
    },
   
    methods  :{
       
      addBlog(){
           let token = localStorage.getItem("token");
           let data={
             title : this.title,
             description : this.description
             }
         axios.post("http://localhost:5000/api/blogs", data,{
             headers : {
                 authorization : `Bearer ${token}`
             },
             
         }) 
         .then(response => {
             console.log(JSON.stringify(response.data));
             this.$router.push("/get-blogs")
         })
         .catch(error => {
             console.log(error);
         })
      },
    //   nextPage(){
    //       this.$router.push("/get-blogs")
    //   }
    }
    
}
</script>
<style scoped>
.outer-div{
background-color: rgb(241, 127, 162);
margin-top: 50px;
padding: 20px 40px;
}

</style>