<template>
<div class="movieWeek">
  <main class="main">

    <!-- grid row with one column for title of page -->
    <div class="row">
      <div class="col">
        <h2>Movie of the Week Archives</h2>
      </div>
    </div>

    <!-- grid row with 3 columns for main content of page -->
    <div class="row">

      <!-- v-for to iterate through the placeholder array and populate each column with placeholder content -->
        <div class="col-lg">
          <div v-for="placeholder in placeholderContent" v-bind:key="placeholder.id">
          <p>{{placeholder}}</p>
        </div>
      </div>
      <div class="col-lg">
        <div v-for="placeholder in placeholderContent" v-bind:key="placeholder.id">
        <p>{{placeholder}}</p>
      </div>
      </div>
      <div class="col-lg">
        <div v-for="placeholder in placeholderContent" v-bind:key="placeholder.id">
        <p>{{placeholder}}</p>
      </div>
      </div>
    </div>
  </main>
</div>
</template>


<script>
export default {
  name: 'movieWeek',
  data() {
    return {

      // array for placeholder content
      placeholderContent: [
          "<placeholder for API data>",
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ]
    }
  }
}
</script>
