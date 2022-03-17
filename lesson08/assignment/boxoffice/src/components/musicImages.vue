<template>
<div class="musicImages">
  <div v-for="musical in musicalPosters" v-bind:key="musical.id">
    <img v-bind:src="musical.src" v-bind:alt="musical.alt" v-bind:title="musical.title">
  </div>
</div>
</template>


<script scoped>

export default {
  name: 'music-images',
  props: {
    title: {
      type: String,
    },
    src: {
      type: String
    },
    alt: {
      type: String
    }
  },
  data() {
    return {
      musicalPosters: [{
          title: 'The Greatest Showman',
          src: [require('../assets/greatest-showman.jpg')],
          alt: 'Jaws movie cover'
        },
        {
          title: 'Hamilton',
          src: [require('../assets/hamilton.jpeg')],
          alt: 'Joker movie cover'
        },
        {
          title: 'West Side Story',
          src: [require('../assets/west-side.jpg')],
          alt: 'The Silence of the Lambs movie cover'
        }
      ]
    }
  }
}
</script>
