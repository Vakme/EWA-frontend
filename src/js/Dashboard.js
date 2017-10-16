import { store } from './store';
import xhr from 'xhr'

let apiIP = 'localhost';

export default {
  name: 'dashboard',
  /*watch: {
    store: function (val) {
      this.fetchData(this);
    }
  },*/
  data () {
    return {
      sensors : []
    }
  },
  created () {
    this.fetchData(this);
  },

  methods: {
    fetchData: function (obj) {
      xhr({
        body: {login: true},
        method: "GET",
        uri: "http://"+ apiIP +":3000/sensors",
        headers: {
          "Content-Type": "application/json"
        }
      }, function (err, resp, body) {
        console.log(resp);
        if(err)
          console.log(err);
        else {
          obj.sensors = JSON.parse(body);
        }
      });
    },
    classChanger: function(value, crit){
      console.log(value);
      console.log(crit);
      if(value > crit){
        return 'dashboard--error';
      }
      return '';
    }
  }
}
