<template>

   <nav :style="{backgroundColor: YOffset >= 60 ? '#081e33' : 'transparent'}">
      <h1>nikodem lorenz</h1>

      <Burger class="burger" @click.native="toggleMenu" :showMenu="showMenu"/>

      <transition name="fade">
         <div class="menu" v-if="showMenu" @click.native="toggleMenu">
            <nuxt-link to="#">About</nuxt-link>
            <nuxt-link to="#">Contact</nuxt-link>
         </div>
      </transition>


   </nav>
</template>

<script>
   import Burger from '../assets/svg/Burger_icon.vue'

   export default {
      name: "navbar",
      components: {
         Burger
      },
      created(){
         if (process.client) {
            window.addEventListener('scroll', () => {
               this.YOffset = window.pageYOffset
            })
         }

      },
      data(){
         return {
            showMenu: false,
            YOffset: 0
         }
      },
      methods: {
         toggleMenu(){
            this.showMenu = !this.showMenu
         }
      }
   }

</script>

<style scoped lang="scss">

   nav {
      position: fixed;
      top: 0;
      width: 100%;
      height: 70px;
      transition: 0.5s;
      opacity: 0.95;



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

      .burger {
         position: absolute;
         top: 26px;
         right: 50px;
         width: 45px;

         cursor: pointer;

         fill: #e6dae0;
         transition: 200ms;

         &:hover {
            fill: #ffffff;
         }
      }

      .menu {
         position: absolute;
         top: 0;
         right: 110px;
         height: 100%;

         a {
            color: #c4c4c4;
            margin: 0 8px;
            padding: 8px 10px;
            line-height: 75px;
            text-decoration: none;
            position: relative;

            &:after{
               content: '';
               position: absolute;
               top: 36px;
               left: 0;
               width: 0;
               height: 2px;
               background-color: #cbd3de;
               color: #e2e2e2;
               transition: 0.4s;

            }

            &:hover{
               color: white;
               &:after{
                  width: 60%;
               }

            }
         }
      }
   }


   /* Transitions */

   .fade-enter-active, .fade-leave-active {
      transition: opacity .25s;
   }
   .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
   }

</style>
