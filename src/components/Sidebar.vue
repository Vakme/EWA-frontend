<template>
  <div class="main-sidebar" v-if="auth">
      <div class="tiles__element">
        <div class="tiles__container">
          <div class="tiles__content">
            <div class="main-sidebar__userinfo">
              <router-link to="/addSensor">
                <button class="info__button" >Dodaj system A.D.A.M.</button>
              </router-link>
              <router-link to="/">
                <button class="info__button" >Edytuj systemy sensorów</button>
              </router-link>
              <router-link to="/">
                <button class="info__button" >Usuń system</button>
              </router-link>
            </div>
            <div class="main-sidebar__header">
              Komunikaty
            </div>
            <div class="main-sidebar__data">
              <div class="main-sidebar__notif">
                <p class="main-sidebar__notif__elem" v-for="item in sensorMock">
              <!--<b>Time: {{item.data[(item.data).length-1].timestamp.split("T")[1].split(".")[0]}}</b> <br>-->
                  <ul>
                    <li  v-for="(measure, index) in item.data[(item.data).length-1].measures"><b>{{item.config.measure_config[index].name}}:</b> {{measure.value.toFixed(2)}}{{item.config.measure_config[index].unit}}</li>
                  </ul>
                </p>
                <p class="main-sidebar__notif__elem">
                  New sensor was added: <br>
                  ID: 4
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
