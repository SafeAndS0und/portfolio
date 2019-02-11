<template>
   <section class="socials">
      <h2>You can find more of my musical activity on platforms listed below:</h2>
      <v-icon name="brands/youtube" scale="5"
              class="icon youtube"/>
      <v-icon name="brands/soundcloud" scale="5"
              class="icon soundcloud"/>
   </section>
</template>

<script>
   export default {
      name: "Socials"
   }
</script>

<style scoped lang="scss">

   .socials{
      display: grid;
      grid-template-columns: 1fr 1fr;
      border-bottom: 1px solid #35384d;

      h2{
         color: #dcdcdc;
         font-weight: 400;
         grid-column: 1/-1;
         padding-bottom: 15px;
         text-align: center;
      }

      .icon{
         margin: 15px 0;
         width: 100%;
         height: 80px;
         justify-self: center;
         align-self: center;
         color: #b1a7ae;
         transition: 0.35s;
         cursor: pointer;
         opacity: 0.15;
      }

      .icon:hover{
         opacity: 1;
         color: #fff9f2;
         background-color: #35384d;
      }


   }

</style>
