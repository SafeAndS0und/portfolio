<template>
   <div class="container">
      <Navbar/>
      <Left class="left"
            :style="{position: isActiveLeft ? 'absolute': 'fixed'}"
            @activeStatusChanged="isActiveLeft = !isActiveLeft" />
      <Right class="right"
             :style="{position: isActiveRight ? 'absolute': 'fixed'}"
             @activeStatusChanged="isActiveRight = !isActiveRight"
      />

   </div>
</template>

<script>
   import Navbar from '../components/Navbar.vue'
   import Right from '../components/Right.vue'
   import Left from '../components/Left.vue'

   export default {
      components: {Navbar, Right, Left},
      data(){
         return {
            isActiveLeft: false,
            isActiveRight: false
         }
      }
   }

</script>

<style scoped lang="scss">
   .container{
      position: relative;

      .right{
         position: absolute;
         top: 0;
         left: 50%;
         width: 50%;
         height: 100vh;
         z-index: -1;
      }

      .left{

         position: absolute;
         top: 0;
         right: 50%;
         width: 50%;
         height: 100vh;
         z-index: -1;
      }
   }

</style>
