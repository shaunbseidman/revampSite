import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import about from '@/components/about'
import projects from '@/components/projects'
import contact from '@/components/contact'
import splash from '@/components/splash'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(Router)
Vue.component('splash', splash)
Vue.component('about', about)
Vue.component('projects', projects)
Vue.component('contact', contact)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    
  ]
})
