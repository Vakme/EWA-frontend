

let apiIP = 'localhost';



export default {
  name: 'addSensor',
  data () {
    return {
      auth: true,
      form_body: {
        id: '',
        config: {
          measure_no: 0,
          measure_config:[{
            measure_id: '',
            name: '',
            critical_value: 0,
            unit: ''
          }]

        }

      }
    }
  },
  methods: {
    sendForm(event) {
      let send_body = {
        id: this.form_body.id,
        config: {
          measure_no: this.form_body.config.measure_no,
          measure_config: []
        }
      };
      this.form_body.config.measure_config.forEach(function (measure) {
        send_body.config.measure_config.push({
          measure_id: measure.measure_id,
          name: measure.name,
          critical_value: measure.critical_value,
          unit: measure.unit
        });
      });
      console.log(send_body);
    }
  }
}
