import Vue from 'vue'
import App from './App.vue'

//create global filter
Vue.filter('snippet',val =>{
  if(!val|| typeof (val) != 'string') return ''
  val = val.slice(0,50) 
  return val
})
new Vue({
  render: h => h(App),
}).$mount('#app')
