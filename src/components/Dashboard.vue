<template>
  <div class="dashboard">
      <div class="tiles__element" v-for="item in sensors">
        <div class="tiles__container">
          <div class="dashboard__sensorName"><router-link :to="'sensor/' + item.id">Sensor {{item.id}}</router-link></div>
          <div class="dashboard__measures">
            <div class="dashboard__measureValues">
              <div v-bind:class = "['dashboard__value', classChanger(item.temperature, item.crit_temperature) ]">{{item.temperature.toFixed(2)}}°C</div>
              <div v-bind:class = "['dashboard__value', classChanger(item.humidity, item.crit_humidity) ]">{{item.humidity.toFixed(2)}}%</div>
            </div>
            <div class="dashboard__measureNames">
              <div class="dashboard__valueName">Temperatura</div>
              <div class="dashboard__valueName">Wilgotność</div>
            </div>
          </div>
          <div class="dashboard__timestamp">
            <div class="dashboard__date">{{item.date.split("T")[0]}}</div>
            <div class="dashboard__time">{{item.date.split("T")[1].split(".")[0]}}</div></div>
        </div>
      </div>
  </div>
</template>

<script src="./../js/Dashboard.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./../css/Dashboard.css">
</style>
