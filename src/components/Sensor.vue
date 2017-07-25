<template>
  <div class="sensor" v-if="auth">
      <div class="tiles__element">
        <div class="tiles__container">
          <div class="tiles__content">
            {{sensorMock}}
          </div>
        </div>
      </div>
  </div>
</template>

<script src="./../js/Sensor.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./../css/Sensor.css">
</style>
