<template>
  <div class="add-sensor" v-if="auth">
      <div class="tiles__element">
        <div class="tiles__container">
          <div class="tiles__header">Dodaj nowy sensor</div>
          <div class="tiles__content">
            <form class="add-sensor__form" id="LoginForm" v-model="form_body" v-on:submit.prevent="sendForm" action="#" method="post"> <!--TODO action-->  <!-- -->
              <div class="form__content">
                <div class="form__group">
                  <label for="Id" class="form__label">Unikalne ID:</label>
                  <input id="Id" type="text" class="form__input" placeholder="adam-1" v-model="form_body.id">
                </div>
                <div class="form__group">
                  <label for="SensorNo" class="form__label">Ilość czujek</label>
                  <input id="SensorNo" type="number" class="form__input" v-model.number="form_body.config.measure_no">
                </div>
              </div>
              <div class="measure__group">
                <div v-for="n in form_body.config.measure_no">
                  <p class="measure__header">Czujka nr {{n}}</p>
                  <div class="form__content">
                    <div class="form__group">
                      <label :for="'Id' + n" class="form__label">ID czujki:</label>
                      <input :id="'Id' + n" type="text" class="form__input" placeholder="internalTemperature" v-model="form_body.config.measure_config[n-1].measure_id">
                    </div>
                    <div class="form__group">
                      <label :for="'Name' + n" class="form__label">Wyświetlana nazwa:</label>
                      <input :id="'Name' + n" type="text" class="form__input" placeholder="Temp. wewnętrzna" v-model="form_body.config.measure_config[n-1].name">
                    </div>
                    <div class="form__group">
                      <label :for="'Crit' + n" class="form__label">Wartość krytyczna:</label>
                      <input :id="'Crit' + n" type="number" class="form__input" placeholder="34" v-model.number="form_body.config.measure_config[n-1].critical_value">
                    </div>
                    <div class="form__group">
                      <label :for="'Unit' + n" class="form__label">Jednostka:</label>
                      <input :id="'Unit' + n" type="text" class="form__input" placeholder="°C" v-model="form_body.config.measure_config[n-1].unit">
                    </div>
                  </div>
                </div>
              </div>
              <input type="submit" class="form__button" value="Dodaj system sensorów">
            </form>
          </div>
        </div>
        <router-link to="/dashboard">
          <button class="info__button" >Powrót</button>
        </router-link>
      </div>
  </div>
</template>

<script src="./../js/AddSensor.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./../css/AddSensor.css">
</style>
