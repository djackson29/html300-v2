<template>
<div class="actionImages">
  <div v-for="action in actionPosters" v-bind:key="action.id">
    <img v-bind:src="action.src" v-bind:alt="action.alt" v-bind:title="action.title">
  </div>
  <!-- <div v-for="musical in musicalPosters" v-bind:key="musical.id">
    <img v-bind:src="musical.src" v-bind:alt="musical.alt">
  </div>
  <div v-for="thriller in thrillerPosters" v-bind:key="thriller.id">
    <img v-bind:src="thriller.src" v-bind:alt="thriller.alt">
  </div> -->
</div>
</template>


<script scoped>

export default {
  name: 'action-images',
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
      actionPosters: [{
          title: 'Black Panther',
          src: [require('../assets/black-panther.jpg')],
          alt: 'Black Panther movie cover'
        },
        {
          title: 'The Hunger Games',
          src: [require('../assets/hunger-games.jpg')],
          alt: 'The Hunger Games movie cover'
        },
        {
          title: 'Zombieland',
          src: [require('../assets/zombieland.jpg')],
          alt: 'Zombieland movie cover'
        }
      ],
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
      ],
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
