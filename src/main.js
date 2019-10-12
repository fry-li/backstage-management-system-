import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'

//引入自定义样式
import '@/styles/index.less'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//添加导航守卫
router.beforeEach((to,from,next)=>{
  //获取token
  let mytoken = localStorage.getItem('login_token')
  //判断
  if( mytoken || to.path==="login"){
    //下一步
    next()
  }else{
    //重定向
    next({path:'/login'})
  }
})