<template>
  <v-app>
    <NavBar>
      <v-btn icon class="pink--text">
        <v-icon>mdi-phone</v-icon>
      </v-btn>

      <v-btn icon class="pink--text"  @click.stop="dialog = true">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </NavBar>
    <v-main>
        <Loader/>
         <!-- dialog -->
      <v-row justify="center">
        <v-dialog v-model="dialog" max-width="400">
          <v-card color="white">
            <v-card-title class="headline white--text pink mb-5">Quieres salir?</v-card-title>

            <v-card-text>Dándole un toque a este botón sales de la Tienda. Si quieres navegar en la Tienda utiliza las opciones de la parte inferior:</v-card-text>
            <div class="justify-space-between layout">
              <v-card-text>
                <v-icon>mdi-cart</v-icon>Carrito
              </v-card-text>
              <v-card-text>
                <v-icon>mdi-home</v-icon>Categorias
              </v-card-text>
              <v-card-text>
                <v-icon>mdi-badge-account-outline</v-icon>Catalogo
              </v-card-text>
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="pink darken-1" text @click="logout">Salir de la tienda</v-btn>

              <v-btn color="pink darken-1" text @click="dialog = false">Volver</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!-- end dialog -->
      <div
        class="justify-center align-center layout"
        v-for="products in catalog"
        :key="products.id"
      >
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">

        <v-container fluid>
          <v-row justify="center" class="mt-5 mb-5">
            <v-col class="mx-auto mb-5" md="4" lg="4" cols="4">
              <div
                class="v-subheader text-uppercase grey--text px-0"
                style="font-size: 1.5em;"
              >Productos</div>
              <v-carousel
                show-arrows
                v-for="product in products.products"
                :key="product.id"
                class="mb-5 p-2 mt-5"
                hide-delimiters
                max-height="420"
                max-width="320"
              >
                <v-carousel-item
                  class="swiper-button-next swiper-button-pink"
                  v-for="image in product.images"
                  :key="image.id"
                >
                  <v-card class="pb-5">
                    <v-img v-if="product.images.length > 0" :src="'https://api.tissini.app/'+image.url"></v-img>

                    <v-img
                      v-else
                      src="https://api.tissini.app/img/products/not_found.jpg"
                    ></v-img>
                    <v-card-actions>
                      <div class="align-content-space-between layout justify-space-between md-5">
                        <v-btn class="ma-2" rounded color="pink" dark>
                          <v-icon left>mdi-cart-plus</v-icon>Agregar
                        </v-btn>
                        <p class="pink--text align-right ma-2">${{product.price}}</p>
                      </div>
                    </v-card-actions>
                  </v-card>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-container>
        </div>
      </div>
    </v-main>
    <BottomNav />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar"
import BottomNav from "@/components/BottomNav"
import Loader from "@/assets/loader.gif"

export default {
  name: "Catalog",
  components: {
    NavBar,
    BottomNav,
    Loader
  },
  data() {
    return {
      id: "",
      catalog: [],
      busy: false,
      dialog: false
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getCatalog();
  },
  methods: {
    getCatalog() {
      this.$store
        .dispatch("getCatalog", { id: this.id })
        .then((res) => {
          this.catalog.push(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadMore() {
        this.busy = true

    },
    logout() {
        localStorage.removeItem('user')
        this.$router.push('/')
    }
  },
};
</script>

<style>
</style>