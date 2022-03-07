<template>
  <div class="discoverTitles">
    <h2>Discover New Titles</h2>
    <h3>Action</h3>
    <div v-for="action in actionPosters" v-bind:key="action.id">
      <img v-bind:src="action" alt="" class="img-thumbnail">
    </div>
    <h3>Musicals</h3>
    <div v-for="musical in musicalPosters" v-bind:key="musical.id">
      <img v-bind:src="musical" alt="" class="img-thumbnail">
    </div>
    <h3>Thrillers</h3>
    <div v-for="thriller in thrillerPosters" v-bind:key="thriller.id">
      <img v-bind:src="thriller" alt="" class="img-thumbnail">
    </div>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<script scoped>

export default {
  name: 'discoverTitles',
  data () {
    return {

      // 3 arrays, for images in each genre
      actionPosters: [require('../assets/black-panther.jpg'), require('../assets/hunger-games.jpg'), require('../assets/zombieland.jpg')],
      musicalPosters: [require('../assets/greatest-showman.jpg'), require('../assets/hamilton.jpeg'), require('../assets/west-side.jpg')],
      thrillerPosters: [require('../assets/jaws.jpg'), require('../assets/joker.jpeg'), require('../assets/lambs.jpg')]
    }
  }
}

</script>

<style>

</style>
