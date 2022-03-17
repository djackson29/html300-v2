<template>
<div class="imagesDiscover">
  <h3>{{ title }}</h3>

</div>
</template>


<script>
export default {
  name: 'imagesDiscover',
  props: {
    title: String
  },
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
