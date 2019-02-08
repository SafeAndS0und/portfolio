<template>

   <nav>
      <h1>nikodem lorenz</h1>

      <Burger class="burger" />

   </nav>
</template>

<script>
   import Burger from '../assets/svg/Burger_icon.vue'
   export default {
      name: "navbar",
      components: {
         Burger
      }
   }

</script>

<style scoped lang="scss">

   nav {
      position: relative;
      width: 100%;
      height: 70px;
      background-color: transparent;

      h1 {
         margin: 0;
         padding: 8px 35px;
         line-height: 70px;

         text-transform: uppercase;
         color: #fbfcff;
         font-weight: 600;
         letter-spacing: 3px;
         font-size: 1.8em;
      }

      .burger{
         position: absolute;
         top: 25px;
         right: 50px;
         width: 45px;
         cursor: pointer;

         fill: #cdc1c7;
         transition: 200ms;

         &:hover{
            fill: #ffffff;
         }
      }
   }

</style>
