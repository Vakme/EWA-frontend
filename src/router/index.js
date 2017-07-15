import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Info from '@/components/Info'
import Sidebar from '@/components/Sidebar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        main: Hello
      }
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        main: Login
      }
    },
    {
      path: '/info',
      name: 'Info',
      components: {
        main: Info
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      components: {
        main: Info,
        sidebar: Sidebar
      }
    }
  ]
})
