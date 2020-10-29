<template>
  <div id="app">
    <main>
      <div class="search-box">
        <input type="text" class="search-bar" placeholder="Search ..."/>
        
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data (){
    return{
      api_key:'375da8489bb3e336757ea42e5bc9131c'
    }
  }
  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
   font-family:"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
   font-size: larger;
}
#app{
  background-image:url(./assets/cold-bg.jpg) ;
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;

}
main{
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.755));
}

.search-box{
  width: 100%;
  margin-bottom: 30px;
}
  
  .search-box .search-bar{
    display: block;
    width: 100%;
    padding: 15px;

    color:#340345;
     font-size: 20px;

     appearance: none;
     border: none;
     outline: none;
     background: none;

     box-shadow: 0px 0ppx 16px rgba(0, 0, 0, 0.25);
     background-color: rgba(255, 255, 255, .5);
     border-radius: 0px 16px 0px 16px ;
     transition: 0.4s;
  }
  .search-box .search-bar{
    background-color: rgba(225, 225, 225, 0.75);
  }
</style>
