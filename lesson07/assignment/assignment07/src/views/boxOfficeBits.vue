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
    </div>


  </div>
</template>

<script>
export default {
  name: 'boxOfficeBits',
  data () {
    return {
      movies: [
        {name: 'Gladiator', about: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', hook: 'This one is a classic! Epic action scenes in the colosseum, romance, betrayal, need I say more?'},
        {name: 'Without a Paddle', about: 'After their friend dies, three men decide to fulfill their childhood dream by going on a camping expedition for the lost D. B. Cooper bounty, with calamitous results.', hook: 'Proceed with caution: After watching, you will want to abandon all repsonsibilities and go treasure hunting with friends!'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
