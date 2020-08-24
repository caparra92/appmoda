<template>
  <v-app>
    <v-main>
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
      <div>
        <NavBar>
          <v-btn icon class="pink--text">
            <v-icon>mdi-phone</v-icon>
          </v-btn>

          <v-btn icon class="pink--text" @click.stop="dialog = true">
            <v-icon>mdi-exit-to-app</v-icon>
          </v-btn>
        </NavBar>

        <!-- content -->
        <v-container class="mt-5 pt-5">
          <v-row justify="center" class="mt-5 mb-2">
            <v-img src="../assets/productos-de-entrega-inmediata.e07d1e57.png" max-width="500"></v-img>
          </v-row>
          <v-row justify="center">
            <v-col class="mx-auto" cols="6">
              <v-carousel height="200" show-arrows>
                <v-carousel-item class="swiper-button-next swiper-button-pink">
                  <v-img
                    src="https://api.tissini.app/img/categories/ropa-interior-prominent.jpg"
                    max-height="200"
                  ></v-img>
                </v-carousel-item>
                <v-carousel-item class="swiper-button-next swiper-button-pink">
                  <v-img
                    src="https://api.tissini.app/img/categories/seamless-prominent.jpg"
                    max-height="200"
                  ></v-img>
                </v-carousel-item>
                <v-carousel-item class="swiper-button-next swiper-button-pink">
                  <v-img
                    src="https://api.tissini.app/img/categories/tapabocas-prominent.jpg"
                    max-height="200"
                  ></v-img>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-container>
        <!-- inicio slider -->
        <v-container v-for="section in sections" :key="section.id" fluid>
          <v-row v-for="sec in section" :key="sec.id">
            <v-col cols="12">
              <v-img :src="'https://api.tissini.app/'+sec.image" max-width="500" class="mx-auto"></v-img>
            </v-col>
            <v-sheet class="mx-auto" max-width="600">
              <v-slide-group class="pa-4" center-active show-arrows>
                <v-slide-item
                  v-for="product in sec.products"
                  :key="product.id"
                  v-slot:default="{ toggle }"
                >
                  <v-card class="ma-4" max-width="150" @click="getCatalog(product.category_id)">
                    <v-img :src="'https://api.tissini.app/'+product.image.url" class="mb-2"></v-img>
                    <v-card-actions class="d-flex flex-column" @click="toggle">
                      <strong>{{product.name}}</strong>
                      <p
                        class="grey--text text-sm-body-2 text-uppercase truncate"
                      >{{product.categories.category}}</p>
                      <p class="pink--text font-weight-black">${{product.price}}</p>
                    </v-card-actions>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-row>
        </v-container>
        <!-- fin slider -->

        <v-container v-for="category in categories" :key="category.id" fluid>
          <v-row v-for="cat in category" :key="cat.id" justify="center" class="mb-2">
            <v-col class="mx-auto justify-center align-center layout">
              <v-card max-width="400" flat @click="getCatalog(cat.id)">
                <v-img :src="'https://api.tissini.app/'+cat.image" class="pa-2 text-right"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <!-- end content -->
        <BottomNav />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import BottomNav from "@/components/BottomNav";

export default {
  name: "Categories",
  components: {
    NavBar,
    BottomNav,
  },
  mounted() {
    this.getCategories();
    this.getSections();
  },
  data() {
    return {
      categories: [],
      sections: [],
      dialog: false,
    };
  },
  methods: {
    getCategories() {
      this.$store
        .dispatch("getCategories")
        .then((res) => {
          this.categories.push(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getSections() {
      this.$store
        .dispatch("getSections")
        .then((res) => {
          this.sections.push(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCatalog(id) {
      this.$router.push({
        name: "VerCatalogo",
        params: {
          id,
        },
      });
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