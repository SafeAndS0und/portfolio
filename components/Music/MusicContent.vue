<template>
   <div class="music-content">
      <Mario />
      <Videos />
      <Soundcloud />
   </div>
</template>

<script>
   import Videos from './Videos'
   import Soundcloud from './Soundcloud'
   import Mario from './Mario'

   export default {
      name: "MusicContent",
      components: {Videos, Mario, Soundcloud},

   }
</script>

<style scoped lang="scss">


</style>
