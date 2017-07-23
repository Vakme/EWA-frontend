import xhr from 'xhr'
import { store } from './store';

let apiURL = '/static/aQ5Qjwdy.json';

export default {
  name: 'main-sidebar',
  data () {
    return {
      auth: true,
      sensorMock: ""
    }
  },
  created () {
    this.fetchData(this);
  },

  methods: {
    fetchData: function (obj) {
      xhr(apiURL, function (err, resp, body) {
        if (resp.statusCode == 200) {
          obj.sensorMock = JSON.parse(body);
          for(let i in obj.sensorMock) {
            store.commit('add', {
              id: i,
              date: obj.sensorMock[i].time,
              temperature: obj.sensorMock[i].temperature,
              crit_temperature: 30,
              humidity: obj.sensorMock[i].humidity,
              crit_humidity: 50
            });
          }
        }
      });
    }

  }
}
