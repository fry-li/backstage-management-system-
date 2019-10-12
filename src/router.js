import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import Home from './views/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      redirect:{name:"login"}
    },
    {
      name:'login',
      path:"/login",
      component:Login
    },
    {
      name:'home',
      path:'/home',
      component:Home
    }
  ]
})
