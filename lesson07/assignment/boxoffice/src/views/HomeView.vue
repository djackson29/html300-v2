<template>
  <div>
    <h2>About Box Office Bits</h2>
    <p>Welcome to Box Office Bits! The ultimate movie lover's online guide.</p>
    <p>Whether you are looking for a new title to fall in love with, or curious how others feel about the newest releases, you have come to the right place!</p>
    <h2>What to Watch</h2>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h3>{{ movie.name }}</h3>
      <p>{{ movie.about }}</p>
      <p>{{ movie.hook }}</p>
      <!-- <p><button type="button" name="button" v-on:click="show = !show">Did you Know?</button></p>
      <p v-if="show">{{ movie.fact }}</p> -->
    </div>


  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script scoped>
export default {
  name: 'boxOfficeBits',
  data () {
    return {
      show: false,
      movies: [
        {name: 'Gladiator (2000)', about: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', hook: 'This one is a classic! Epic action scenes in the colosseum, romance, betrayal, need I say more?', fact: 'Joaquin Phoenix ad-libbed his scream of Am I not merciful? Connie Nielsen wasnt expecting it, and her frightened reaction was genuine.'},
        {name: 'Without a Paddle (2004)', about: 'After their friend dies, three men decide to fulfill their childhood dream by going on a camping expedition for the lost D. B. Cooper bounty, with calamitous results.', hook: 'Proceed with caution: After watching, you will want to abandon all repsonsibilities and go treasure hunting with friends!', fact: 'Most of the outdoor camping scenes were shot inside a very large warehouse.'}
      ]
    }
  }
}



</script>






<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script> -->
