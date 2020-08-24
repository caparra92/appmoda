<template>
  <v-app-bar class="white" fixed bottom>
    <v-spacer></v-spacer>
    <v-btn-toggle group class="d-flex justify-space-between">
      <div class="d-flex flex-column v-btn">
        <v-btn icon class="pink--text no-text-transform" href="/categories">
          <v-icon>mdi-home-outline</v-icon>
        </v-btn>
        <span class="text-sm-body-2">Categorías</span>
      </div>
      <div class="d-flex flex-column v-btn">
        <v-btn icon class="pink--text" href="/catalogo/1">
          <v-icon>mdi-badge-account-outline</v-icon>
        </v-btn>
        <span class="text-sm-body-2">Catalogo</span>
      </div>
      <div class="d-flex flex-column v-btn">
        <v-btn icon class="pink--text">
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
        <span class="text-sm-body-2">Carrito</span>
      </div>
    </v-btn-toggle>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
    name: 'BottomNav'
};
</script>

<style>
</style>