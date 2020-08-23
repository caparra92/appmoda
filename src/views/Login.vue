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
                maxlength = "12"
                pattern="[0-9]{7,15}"
                :rules="inputRules"
                @blur="limpiarNumero"
                @keyup="limpiarNumero"
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
  data () {
      return {
          inputRules: [
              v => v ? v.length >= 12 : 'El numero mínimo de caracteres es 12',
          ],
          validNumbers : [
            7865470213,
            2345678903,
            3457896574
          ]
      }
  },
  methods: {
    limpiarNumero(obj) {
  /* El evento "change" sólo saltará si son diferentes */
      obj.target.value = obj.target.value.replace(/\D/g, '');
    }
  }
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
     font-size: 1.3rem;
  }

  .v-text-field--outlined fieldset {
      border-color: white !important;
  }

  label {
      color: white !important;
  }
}
</style>

