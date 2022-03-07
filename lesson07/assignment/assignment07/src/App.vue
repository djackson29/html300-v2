<template>
<div id="app">
  <div class="nav">
    <router-link to="/boxOfficeBits">Home</router-link>
    <router-link to="/discoverTitles">Discover New Titles</router-link>
    <router-link to="/comingSoon">Coming Soon to Theaters</router-link>
    <router-link to="/movieWeek">Movie of the Week Archives</router-link>
  </div>
  <router-view/>
  <h1>Box Office Bits</h1>
</div>
</template>

<script>

// import boxOfficeBits from './components/boxOfficeBits.vue'
// import discoverTitles from './components/discoverTitles.vue'
// import comingSoon from './components/comingSoon.vue'
// import movieWeek from './components/movieWeek.vue'
//
//
// export default {
//   name: 'App',
//   components: {
//     boxOfficeBits,
//     discoverTitles,
//     comingSoon,
//     movieWeek
//   }
// }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
