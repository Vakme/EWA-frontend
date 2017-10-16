import xhr from 'xhr'
import CommitChart from './CommitChart'
import colors from 'nice-color-palettes'

let apiIP = 'localhost';

export default {
  name: 'sensor',
  data () {
    return {
      auth: true,
      sensorMock: "",
      chartData: {
        labels: [],
        datasets: []
      },
      chartOptions: {
        animation : false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false,
            }
          }]
        }
      }
    }
  },
  created () {
    this.fetchData(this);
  },
  components: {
    'commit-chart': CommitChart
  },
  methods: {
    timestampToDate: function (timestamp) {
      let tmp = new Date(timestamp * 1000);
      return tmp.getHours() + ':' + tmp.getMinutes() + ':' + tmp.getSeconds();
    },

    fetchData: function (obj) {
      console.log(this.$route.params.id);
      xhr({
        body: {login: true},
        method: "GET",
        uri: "http://" + apiIP + ":3000/sensors/" + this.$route.params.id,
        headers: {
          "Content-Type": "application/json"
        }
      }, function (err, resp, body) {
        console.log(resp);
        if(err)
          console.log(err);
        else {
          obj.sensorMock = JSON.parse(body);
          let labels = [];
          for(let i = 0; i < 20; i++) {
            labels.push('8:' + i);
          }
          obj.chartData.labels = labels;

          console.log(obj.sensorMock[0].config.measure_no);
          for(let i = 0; i < obj.sensorMock[0].config.measure_no; i++) {
            let arrdata = [];
            obj.sensorMock[0].data.forEach(function (measure) {
              let temp = measure.measures.filter(x =>
              x.measure_id === obj.sensorMock[0].config.measure_config[i].measure_id)[0];
              if(typeof temp != 'undefined')
                arrdata.push(temp.value)
            });
            obj.chartData.datasets.push({
              label: obj.sensorMock[0].config.measure_config[i].name,
              borderColor: colors[i+1][i+2],
              backgroundColor: colors[i+1][i+1],
              data: typeof arrdata != 'undefined' ? arrdata.slice(-20) : [0] //obj.sensorMock[0].data[0].measures[i].value
            });
          }
          console.log(obj.chartData.datasets);
         //TODO: apply data
      }
      });
      /*xhr(apiURL, function (err, resp, body) {
        if (resp.statusCode == 200) {
          obj.sensorMock = JSON.parse(body);
        }
      });*/

    }

  }
}
