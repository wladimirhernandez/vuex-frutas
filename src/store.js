import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fruits: [
      {name: 'Orange', inStock: 0},
      {name: 'Apple', inStock: 0},
      {name: 'Grapes', inStock: 0}
    ]
  },
  mutations: {
    increase(state, index){
      state.fruits[index].inStock = state.fruits[index].inStock + 2;
    },
    restart(state){
      state.fruits.forEach( fruitItem => {
        fruitItem.inStock = 0
      } )
    }
  },
  actions: {

  }
})
