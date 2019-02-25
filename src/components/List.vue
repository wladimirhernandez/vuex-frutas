<template>
<div class="container">
<ul class="list-group">
  <li  v-for="(fruit, index) in orderArray" :key="fruit.id"
    @click="increase(index)"
  class="list-group-item d-flex justify-content-between align-items-center">
    {{fruit.name}}
    <span class="badge badge-primary badge-pill">{{fruit.inStock}}</span>
  </li>
</ul>
    <button class="btn btn-danger btn-block" @click="restart"> reiniciar</button>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'List',
    computed: {
    ...mapState(['fruits']),
    orderArray(){
        return this.fruits.sort( (a,b) => b.inStock - a.inStock )
    }
    },
    methods: {
    ...mapMutations(['increase','restart'])
    }

}
</script>
