<template>
  <div id="app" >
    <main class="Hi">
      {{Title}}
      <h1>Hi babes</h1>
      <p>We learning of the created function in <i>VueJS</i>.<br></p>
       <p v-for="(name,index) in names" :key="index">I am learning coding  and I'm a :{{name.gender}}</p>
    </main>
    <div v-for="(post,index) in posts" :key="index">
      <h3>{{post.title}}</h3>
      <p>{{post.body | snippet}}</p>
    </div>
  
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'App',
  data (){
    return{
       Title : "Hi programmer",
      names:[
       {gender: 'girl', single : true},
       {gender : 'female', single : true},
       {gender : 'boy', single : false},
       {gender : 'male', single : true}
      ],
      posts : []    
    }
  },
  mounted: async function(){
   
  },
  methods:{
    
  },
  created (){
    axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then(response=>{
      console.log(response)
      this.posts = response.data
    }).catch (err =>{
      console.log(err)
    })
  }
} 
</script>

<style>
.Hi{
  text-align: center;
}
</style>
