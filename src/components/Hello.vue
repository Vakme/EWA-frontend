<template>
  <div class="hello">
    <div class="tiles">
      <div class="tiles__element"  v-on:click="clickedSensors = !clickedSensors">
        <div class="tiles__container">
          <span class="tiles__icon flaticon-stats"></span>
          <div class="tiles__header">Sensory</div>
          <div class="tiles__loader" v-bind:class="{ 'tiles__loader--clicked': clickedSensors }">
            <span class="flaticon-loading tiles__loader__icon" v-bind:class="{ 'tiles__loader__icon--clicked': clickedSensors }"></span>
          </div>
        </div>
      </div>
      <div class="tiles__element"  v-on:click="clickedLogin = !clickedLogin">
        <div class="tiles__container">
          <span class="tiles__icon flaticon-security"></span>
          <div class="tiles__header">Logowanie</div>
          <div class="tiles__loader" v-bind:class="{ 'tiles__loader--clicked': clickedLogin }">
            <span class="flaticon-loading tiles__loader__icon" v-bind:class="{ 'tiles__loader__icon--clicked': clickedLogin }"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./../js/Hello.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./../css/Hello.css">
</style>
