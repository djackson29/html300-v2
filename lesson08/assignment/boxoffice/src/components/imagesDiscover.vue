<template>
<div class="imagesDiscover">
  <h3>{{ title }}</h3>
  <img v-for="action in actionPosters" v-bind:key="action.id" v-bind:src="action" alt="" class="img-thumbnail">

</div>
<!-- <div class="actionPosters">
  <img>

</div> -->

</template>


<script>

// component for image page
import Vue from 'vue'

Vue.component('images-discover', {
  props: {
    title: String,
    blackPanther: {
      src: require('../assets/black-panther.jpg'),
      alt: 'Black Panther movie cover',
      title: 'Black Panther'
    }
  }
})

// Vue.component('action-posters', {
//   props: {
//     blackPanther: {
//       src: require('../assets/black-panther.jpg'),
//       alt: 'Black Panther movie cover',
//       title: 'Black Panther'
//     }
//   }
// })


export default {
  name: 'imagesDiscover',
  data() {
    return {

      // 3 arrays, for images in each genre
      actionPosters: [require('../assets/black-panther.jpg'), require('../assets/hunger-games.jpg'), require('../assets/zombieland.jpg')],
      musicalPosters: [require('../assets/greatest-showman.jpg'), require('../assets/hamilton.jpeg'), require('../assets/west-side.jpg')],
      thrillerPosters: [require('../assets/jaws.jpg'), require('../assets/joker.jpeg'), require('../assets/lambs.jpg')]
    }
  }
}
</script>
