<template>
<div class="discoverTitles">
  <h2>Discover New Titles</h2>

  <headingsComponent heading="Action" />
  <actionImages src="" alt="" title="" />

  <headingsComponent heading="Musicals" />
  <musicImages />

  <headingsComponent heading="Thrillers" />
  <thrillerImages />

</div>
</template>


<!-- Add "scoped" attribute to limit to this component only -->
<script scoped>
import headingsComponent from '@/components/headingsComponent.vue'
import actionImages from '@/components/actionImages.vue'
import musicImages from '@/components/musicImages.vue'
import thrillerImages from '@/components/thrillerImages.vue'

export default {
  name: 'discoverTitles',
  components: {
    headingsComponent,
    actionImages,
    musicImages,
    thrillerImages
  }
}
</script>


<style>
img {
  margin: 10px 30px 50px 0;
}
</style>
