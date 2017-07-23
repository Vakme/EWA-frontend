<template>
  <div class="main-sidebar" v-if="auth">
      <div class="tiles__element">
        <div class="tiles__container">
          <div class="tiles__content">
            <div class="main-sidebar__userinfo">
              <div class="main-sidebar__header">
                Profil
              </div>
              Lorem ipsum
            </div>
            <div class="main-sidebar__header">
              Komunikaty
            </div>
            <div class="main-sidebar__data">
              <div class="main-sidebar__notif">
                <p class="main-sidebar__notif__elem" v-for="item in sensorMock">
              <b>Pomiar z dnia {{item.time.split("T")[0]}}</b> <br>
                  Czas: {{item.time.split("T")[1].split(".")[0]}} <br>
              Temperatura: {{item.temperature.toFixed(2)}}°C <br>
              Wilgotność: {{item.humidity.toFixed(2)}}%
                </p>
              </div>

              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script src="./../js/Sidebar.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./../css/Sidebar.css">
</style>
