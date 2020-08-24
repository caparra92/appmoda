import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    getCategories() {
      return new Promise((resolve, reject)=> {
        axios.get('https://api.tissini.app/api/v2/categories')
          .then(res => {
            resolve(res)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getSections() {
      return new Promise((resolve, reject) => {
        axios.get('https://api.tissini.app/api/v1/categories/sections')
          .then(res => {
            resolve(res)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getCatalog(_, value) {
      console.log(value.id)
      return new Promise((resolve, reject) => {
        axios.get(`https://api.tissini.app/api/v2/categories/${value.id}/products`)
          .then(res => {
            resolve(res)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  modules: {
  }
})
