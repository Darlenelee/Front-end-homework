// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import navbar from './components/navbar'
import welcome from './components/welcome'
import discover from './components/discover'
import user_page from './components/user_page'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

new Vue({
	el:'#navbar',
	template: '<navbar/>',
	components:{navbar}
})

new Vue({
	el:'#welcome',
	template:'<welcome/>',
	components:{welcome}
})

new Vue({
	el:'#discover',
	template:'<discover/>',
	components:{discover}
})

new Vue({
	el:'#user_page',
	template:'<user_page/>',
	components:{user_page}
})

new Vue({
  el: '#form',
  template: '<form/>',
  components:{form}
})
