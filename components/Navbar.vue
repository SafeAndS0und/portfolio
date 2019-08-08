<template>

   <nav :style="{backgroundColor: YOffset >= 60 ? '#111111' : 'transparent'}">
      <h1 @click="resetSections">nikodem lorenz</h1>

      <Burger class="burger" @click.native="toggleMenu" :showMenu="showMenu"/>

      <transition name="fade">
         <div class="menu" v-if="showMenu" @click.native="toggleMenu">
            <nuxt-link to="#">Resume</nuxt-link>
            <nuxt-link to="/contact">Contact</nuxt-link>
         </div>
      </transition>


   </nav>
</template>

<script>
   import Burger from '../assets/svg/Burger_icon.vue'
   import EventBus from '../assets/js/EventBus'

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
         },
         resetSections() {
            this.$router.push('/')
            this.$emit('resetSections')
            EventBus.$emit('togglingSections', {
               left: false,
               right: false
            })
         }
      }
   }

</script>

<style scoped lang="scss">
   @import '../assets/css/variables';

   nav {
      position: fixed;
      top: 0;
      width: 100%;
      height: 70px;
      transition: 0.5s;
      opacity: 0.94;



      h1 {
         margin: 0;
         padding: 8px 35px;
         line-height: 70px;

         text-transform: uppercase;
         color: #fbfcff;
         font-weight: 600;
         letter-spacing: 3px;
         font-size: 1.8em;
         cursor: pointer;
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
            color: #cdcdcd;
            margin: 0 8px;
            padding: 8px 10px;
            font-size: 15px;
            line-height: 75px;
            letter-spacing: 2px;
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
      transition: opacity .35s;
   }
   .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
   }

   /* mobile */

   @media only screen and (max-width: $tablet) {
      nav {
         position: absolute;

         h1{

            font-size: 1.15em;
            padding: 8px 20px;
         }

         .burger{
            position: fixed;
            transform: scale(0.7);
            top: 32px;
            right: 15px;
         }

         .menu{
            position: fixed;
            right: 7px;
            top: 70px;

            a{
               color: white;
               /*border-bottom: 1px solid #ededed;*/
               text-align: center;
               display: block;
               padding: 6px;
               margin: 0;
               line-height: 32px;
               font-weight: 300;
            }
         }
      }
   }
</style>
