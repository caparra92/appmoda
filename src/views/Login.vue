<template>
  <div class="layout background align-center justify-center column fill-height">
    <v-card class="" max-width="344" flat solo>
        <v-card-title class="mt-5 text-center">
           <div class="mt-5 text-xs-center">
                <img :src="require('../assets/logo.c752bf8f.png')" alt="Logo store" width="60%" class="mx-auto mt-5" />
            <h3 style="color: white;">
                Ingresa el numero de telefono
                <br>
                de tu asesora independiente
            </h3>
           </div>
      </v-card-title>
      <v-card-text>
          <v-form>
            <v-text-field
                outlined
                color="white"
                label="Telefono"
                class="input-tel"
                aria-label="Telefono"
            >
                <input type="tel">
            </v-text-field>
          </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
@media (min-width: 475px) {
  * {
      font-family: 'Montserrat',sans-serif !important;
  }
  h3 {
      font-size: 1rem;
  }
  .background {
    background: url("../assets/login-desktop.0a0cacb5.jpg");
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    width: 100% !important;
    height: 100%;
    padding: 0 !important;
    background-repeat: no-repeat;
  }
  .v-card {
    background-color: transparent !important;
  }
  .input-tel {
      border-color: white !important;
  }

 .v-text-field__slot input {
    color: white !important;
  }

  .v-text-field--outlined fieldset {
      border-color: white !important;
  }

  label {
      color: white !important;
  }
}
</style>

