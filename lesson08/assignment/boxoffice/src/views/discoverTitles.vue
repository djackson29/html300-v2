<template>
  <div class="discoverTitles">
    <h2>Discover New Titles</h2>

    <!-- v-for to iterate through each image array and display movie posters for each genre -->
    <imagesDiscover title="Action"/>
    <!-- <div>
      <img v-for="action in actionPosters" v-bind:key="action.id" v-bind:src="action" alt="" class="img-thumbnail">
    </div> -->
    <imagesDiscover title="Musicals"/>
    <!-- <div>
      <img v-for="musical in musicalPosters" v-bind:key="musical.id" v-bind:src="musical" alt="" class="img-thumbnail">
    </div> -->
    <imagesDiscover title="Thrillers"/>
    <!-- <div>
      <img v-for="thriller in thrillerPosters" v-bind:key="thriller.id" v-bind:src="thriller" alt="" class="img-thumbnail">
    </div> -->
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<script scoped>
import imagesDiscover from '@/components/imagesDiscover.vue'
export default {
  name: 'discoverTitles',
  components: {
    imagesDiscover
  }
  }

</script>


<style>
img {
  margin: 10px 30px 50px 0;
}

</style>
