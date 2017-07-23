import { store } from './store';
import xhr from 'xhr'

let apiURL = '/static/aQ5Qjwdy.json';

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
      xhr(apiURL, function (err, resp, body) {
        if (resp.statusCode == 200) {
          let sensorArr = JSON.parse(body);
          for(let i in sensorArr) {
            obj.sensors.push({
              id: i,
              date: sensorArr[i].time,
              temperature: sensorArr[i].temperature,
              crit_temperature: 30,
              humidity: sensorArr[i].humidity,
              crit_humidity: 50
            });
          }
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
