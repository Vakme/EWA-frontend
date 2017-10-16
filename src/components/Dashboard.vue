<template>
  <div class="dashboard">
      <div class="tiles__element" v-for="item in sensors">
        <div class="tiles__container">
          <div class="dashboard__sensorName"><router-link :to="'sensor/' + item.id">Sensor {{item.id}}</router-link></div>
          <div class="dashboard__measures">
            <div class="dashboard__measureValues">
              <div class="dashboard__value" v-bind:class = "['dashboard__value', classChanger(measure.value, item.config.measure_config[index].critical_value) ]" v-for="(measure, index) in item.data[(item.data).length-1].measures"> <!--  TODO: crit value -->{{measure.value.toFixed(2)}} {{item.config.measure_config[index].unit}}</div>
            </div>
            <div class="dashboard__measureNames">
              <div class="dashboard__valueName"  v-for="measure in item.config.measure_config">{{measure.name}}</div>
            </div>
          </div>
          <div class="dashboard__timestamp">
            <div class="dashboard__date">{{item.data[(item.data).length-1].timestamp}}</div> <!-- .split("T")[0]}} -->
            <div class="dashboard__time">{{item.data[(item.data).length-1].timestamp}}</div></div> <!-- .split("T")[1].split(".")[0]}} -->
        </div>
      </div>
  </div>

</template>

<script src="./../js/Dashboard.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./../css/Dashboard.css">
</style>
