<template>
  <div id="app" :class="{warm: (typeof this.weather.name !== 'undefined' && this.weather.main.temp > 16), cold: this.weather.name !== 'undefined' && this.weather.main.temp < 16}">
    <main>
      <div class="search-box">
        <input type="text" class="search-bar" placeholder="Search ..." v-model="query" @keypress="fetchWeather"/>
      </div>
      <div class="weather-wrap" v-if="typeof this.weather.name !== 'undefined'">
        <div class="location-box">
          <div class="location">{{weather.name}},{{weather.sys.country}}</div>
          <div class="date">{{dateBuilder() }}</div>
        </div>

        <div class="weather-box">
          <div class="temp">{{Math.round(weather.main.temp)}}</div>
          <div class="weather">{{weather.weather[0].main}}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data (){
    return{
      api_key:'375da8489bb3e336757ea42e5bc9131c',
      url_base:'https://api.openweathermap.org/data/2.5',
      query:'',
      weather: {}
    }
  },
  mounted: async function(){
    // this is similar to "DOMContentLoaded" event or the jquery "ready" event and will run once the page has been loaded 
    var response = await fetch(`${this.url_base}/weather?q=Harare&units=metric&appid=${this.api_key}`);
    var data = await response.json();
    this.weather = data;
  },
  methods:{
    async fetchWeather(e){
      if (e.key == "Enter"){
        var response = await fetch(`${this.url_base}/weather?q=${this.query}&units=metric&appid=${this.api_key}`);
        var data = await response.json();
        this.weather = data;
      }
    },
    dateBuilder (){
      let d = new Date ();
      let months = ["January","February","March","April","May",
      "June", "July", "August", "Septmber", "October", "November","December"];
      let days =["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday",
      "Saturday"];

      let day =days[d.getDay()];
      let date = d.getDate();
      let month = months [d.getMonth()];
      let year = d.getFullYear();   
      return `${day} ${date} ${month} ${year}`;
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
  transition: 0.7s;
}

.cold{
  background-image:url(./assets/cold-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}

.warm{
  background-image:url(./assets/warm-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}
main{
  padding: 25px;
  min-height: 100vh;
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

  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, .5);
  border-radius: 0px 16px 0px 16px ;
  transition: 0.4s;
}
.search-box .search-bar{
  box-shadow: 0px 0px 16px rgba (0, 0, 0, 0.25) ;
  background-color: rgba(225, 225, 225, 0.75);
  border-radius: 16px 0px 16px 0px;
}

.location-box .location{
  color:#fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: #340345;
}
.location-box .date{
  color:#fff;
  font-size: 20px;
  font-weight: 300;
  font-style: italic ;
  text-align: center;
}
.weather-box{
  text-align: center;
}
.weather-box .temp{
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 102px;
  font-weight: 900;

  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, .25);
  border-radius: 10px;
  margin: 30px 0px;
  box-shadow:3px 6px  rgba(0, 0, 0, .5);
}

.weather-box .weather{
  color: #fff;
  font-size: 48px;
  font-weight: bold;
  font-style: italic;
  text-shadow: 3px 6px  rgba(0, 0, 0, .5);
}

</style>
