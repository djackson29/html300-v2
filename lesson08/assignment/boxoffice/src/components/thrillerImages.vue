<template>
<div class="thrillerImages">
  <div v-for="thriller in thrillerPosters" v-bind:key="thriller.id">
    <img v-bind:src="thriller.src" v-bind:alt="thriller.alt" v-bind:title="thriller.title">
  </div>
</div>
</template>


<script scoped>

export default {
  name: 'thriller-images',
  props: {
    title: {
      type: String
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
      thrillerPosters: [{
          title: 'Jaws',
          src: [require('../assets/jaws.jpg')],
          alt: 'Jaws movie cover'
        },
        {
          title: 'Joker',
          src: [require('../assets/joker.jpeg')],
          alt: 'Joker movie cover'
        },
        {
          title: 'The Silence of the Lambs',
          src: [require('../assets/lambs.jpg')],
          alt: 'The Silence of the Lambs movie cover'
        }
      ]
    }
  }
}
</script>
