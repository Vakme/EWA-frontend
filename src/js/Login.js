import xhr from 'xhr'
import router from './../router/index'


let apiIP = '192.168.1.12';

export default {
  name: 'login',
  data () {
    return {
      clickedLoginButton: false,
      clickedRegisterButton: false,
      login: true
    }
  },

  methods: {
    greet: function (event) {
          router.push('Dashboard');
    }
  }
}
