<template>
  <div class="login">
      <div class="tiles__element">
        <div class="tiles__container">
          <div  v-if="login" class="tiles__content">
            <div class="login__header">Logowanie</div>
            <form class="login__form" id="LoginForm"> <!--TODO action-->  <!--v-on:submit.prevent="greet" action="#" method="post" -->
              <div class="login__group">
                <label for="Username" class="login__label"><span class="login__icon flaticon-user-1" aria-label="Username"></span></label>
                <input id="Username" type="text" class="login__input" placeholder="Nazwa użytkownika">
              </div>
              <div class="login__group">
                <label for="Password" class="login__label"><span class="login__icon flaticon-security" aria-label="Password"></span></label>
                <input id="Password" type="password" class="login__input" placeholder="Hasło">
              </div>
            <router-link :to="'dashboard'"><button class="login__button" >Zaloguj się</button></router-link>
              <span class="login__forgotten">Zapomniałeś hasła?</span>
            </form>
            <button class="login__button" v-on:click="login=false">Zarejestruj się</button>



            <div class="tiles__loader" v-bind:class="{ 'tiles__loader--clicked': clickedLoginButton || clickedRegisterButton }">
              <span class="flaticon-loading tiles__loader__icon" v-bind:class="{ 'tiles__loader__icon--clicked': clickedLoginButton || clickedRegisterButton }"></span>
            </div>

          </div>
          <div  v-else class="tiles__content">
            <div class="login__header">Rejestracja</div>
            <form action="" method="post" class="login__form" id="RegisterForm"> <!--TODO action-->
              <div class="login__group">
                <label for="Username" class="login__label"><span class="login__icon flaticon-user-1" aria-label="Username"></span></label>
                <input id="UsernameRegister" type="text" class="login__input" placeholder="Nazwa użytkownika">
              </div>
              <div class="login__group">
                <label for="Email" class="login__label"><span class="login__icon flaticon-envelope" aria-label="Username"></span></label>
                <input id="Email" type="email" class="login__input" placeholder="Adres email">
              </div>
              <div class="login__group">
                <label for="PasswordRegister" class="login__label"><span class="login__icon flaticon-security" aria-label="Password"></span></label>
                <input id="PasswordRegister" type="password" class="login__input" placeholder="Hasło">
              </div>
              <div class="login__group">
                <label for="PasswordRepeat" class="login__label"><span class="login__icon flaticon-security" aria-label="Password"></span></label>
                <input id="PasswordRepeat" type="password" class="login__input" placeholder="Powtórz hasło">
              </div>
              <button class="login__button" v-on:click="clickedLoginButton = !clickedLoginButton">Zarejestruj się</button>
            </form><button class="login__button" v-on:click="login=true">Przejdź do logowania</button>



            <div class="tiles__loader" v-bind:class="{ 'tiles__loader--clicked': clickedLoginButton || clickedRegisterButton }">
              <span class="flaticon-loading tiles__loader__icon" v-bind:class="{ 'tiles__loader__icon--clicked': clickedLoginButton || clickedRegisterButton }"></span>
            </div>
          </div> <!-- TODO: ajax loading login+register -->
        </div>
      </div>
  </div>
</template>

<script src="./../js/Login.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./../css/Login.css">
</style>
