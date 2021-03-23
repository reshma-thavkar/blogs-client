<template>
    <div>
        <add-blog @add-blog=addBlog></add-blog>
        <h1>Title</h1>
        <h2>{{ blogs.title}}</h2>
        <h1>Description</h1>
        <p>{{ blogs.description}}</p>
    </div>
</template>
<script>
import AddBlog from "./AddBlog"
export default {
 components: {
     AddBlog
 },
  data(){
      return{
          blogs : [
             {
                 title : "",
                 description : ""
             }

          ]
      }
  },
  methods : {
      addBlog(title, description){
          const newBlog = {
              title : title,
              description : description
          }
          console.log("-----------------",newBlog)
          this.blogs.push(newBlog);
      }
  }
}
</script>
<style scoped>

</style>