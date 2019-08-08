<template>
   <div class="container">
      <Navbar class="nav" @resetSections="resetSections" />

      <main>
         <p>nikodem.lorenz@gmail.com</p>
         <a target="_blank" href="https://www.facebook.com/nikodem.lorenz">Facebook</a>
         <a target="_blank" href="https://www.youtube.com/user/NikiL2134/videos">Youtube</a>
         <a target="_blank" href="https://github.com/SafeAndS0und">Github</a>
         <a target="_blank" href="https://soundcloud.com/safeandsound2134">Soundcloud</a>
      </main>
   </div>
</template>

<script>
   import Navbar from '../components/Navbar.vue'
   export default {
      name: "contact",
      components: {Navbar}
   }
</script>

<style scoped lang="scss">

   main {
      margin-top: 150px;
      text-align: center;

      a, p {
         display: block;
         margin: 0;
         padding: 15px 0;
         color: #a6a6a6;
         text-decoration: none;
         font-weight: 100;
         transition: .2s;

         &:hover {
            color: white;
         }
      }

      a {
         cursor: pointer;
      }
   }
</style>
