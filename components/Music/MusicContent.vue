<template>
   <div class="music-content">
      <Videos class="videos"/>
      <Socials class="socials"/>
   </div>
</template>

<script>
   import Socials from './Socials'
   import Videos from './Videos'
   export default {
      name: "MusicContent",
      components: {Socials, Videos},

   }
</script>

<style scoped lang="scss">


</style>
