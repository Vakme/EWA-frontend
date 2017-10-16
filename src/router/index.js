import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Info from '@/components/Info'
import Dashboard from '@/components/Dashboard'
import Sidebar from '@/components/Sidebar'
import Sensor from '@/components/Sensor'
import AddSensor from '@/components/AddSensor'

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
        main: Dashboard,
        sidebar: Sidebar
      }
    },
    {
      path: '/sensor/:id',
      name: 'Sensor',
      components: {
        main: Sensor,
        sidebar: Sidebar
      }
    },
    {
      path: '/addSensor',
      name: 'AddSensor',
      components: {
        main: AddSensor,
        sidebar: Sidebar
      }
    }
  ]
})
