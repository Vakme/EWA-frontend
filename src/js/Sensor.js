import xhr from 'xhr'
import { store } from './store';

let apiURL = '/static/temp_and_hum.json';

export default {
  name: 'sensor',
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
        }
      });
    }

  }
}
