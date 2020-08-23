<template>
  <v-app>
    <v-main>
      <div>
        <NavBar>
          <v-btn icon class="pink--text">
            <v-icon>mdi-phone</v-icon>
          </v-btn>

          <v-btn icon class="pink--text">
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
                                <v-img src="https://api.tissini.app/img/categories/ropa-interior-prominent.jpg" max-height="200"></v-img>
                            </v-carousel-item>
                            <v-carousel-item class="swiper-button-next swiper-button-pink">
                                <v-img src="https://api.tissini.app/img/categories/seamless-prominent.jpg" max-height="200"></v-img>
                            </v-carousel-item>
                            <v-carousel-item class="swiper-button-next swiper-button-pink">
                                <v-img src="https://api.tissini.app/img/categories/tapabocas-prominent.jpg" max-height="200"></v-img>
                            </v-carousel-item>
                        </v-carousel>
                    </v-col>
                </v-row>
            </v-container>
            
            <v-container v-for="section in sections" :key="section.id" fluid>
                <v-row v-for="sec in section" :key="sec.id">
                    <v-col cols="12">
                        <v-img :src="'https://api.tissini.app/'+sec.image" max-width="500" class="mx-auto"></v-img>
                    </v-col>
                    <v-row justify="center" dense>
                        <v-col cols="6" class="justify-center" v-for="product in sec.products" :key="product.id">
                            <v-card max-width="170" class="mx-auto">
                                <v-img :src="'https://api.tissini.app/'+product.image.url" class="mb-2"></v-img>
                                <v-card-actions class="d-flex flex-column">
                                    <strong>{{product.name}}</strong>
                                    <p class="grey--text text-sm-body-2 text-uppercase truncate">{{product.categories.category}}</p>
                                    <p class="pink--text font-weight-black">${{product.price}}</p>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-row>
            </v-container>
            <v-container v-for="category in categories" :key="category.id" fluid>
                <v-row v-for="cat in category" :key="cat.id" justify="center" class="mb-2">
                    <v-col class="mx-auto justify-center align-center layout">
                        <v-card max-width="400" flat>
                            <v-img :src="'https://api.tissini.app/'+cat.image" class="pa-2 text-right">
                            </v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        <!-- end content -->
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
                <v-btn icon class="pink--text">
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
      </div>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar"

export default {
  name: "Categories",
  components: {
    NavBar,
  },
  mounted() {
    this.getCategories();
    this.getSections();
  },
  data() {
    return {
      categories: [],
      sections: []
    };
  },
  methods: {
    getCategories() {
      this.$store
        .dispatch("getCategories")
        .then((res) => {
          this.categories.push(res.data)
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error)
        });
    },
    getSections() {
        this.$store
            .dispatch("getSections")
            .then((res) => {
                this.sections.push(res.data)
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
  },
};
</script>

<style>
</style>