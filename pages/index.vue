<template>
   <div class="container">
      <Navbar class="nav"/>
      <main>
         <Left class="left"
               :class="{a_left: isActiveLeft, d_left: isActiveRight}"
               @activeStatusChanged="toggleLeft"/>
         <Right class="right"
                :class="{a_right: isActiveRight, d_right: isActiveLeft}"
                @activeStatusChanged="toggleRight"
         />
      </main>

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
            isActiveRight: false,
         }
      },
      methods: {
         toggleLeft(){
            this.isActiveLeft = !this.isActiveLeft
            this.isActiveRight = false

         },
         toggleRight(){
            this.isActiveRight = !this.isActiveRight
            this.isActiveLeft = false
         }
      }
   }

</script>

<style scoped lang="scss">
   .container {

      &::-webkit-scrollbar {
         width: 0 !important;
      }
      .nav {
         z-index: 5;
      }
      main {
         width: 100%;

         display: grid;
         z-index: -44;

         .right {
            padding-top: 20vh;
            z-index: 0;
            position: fixed;
            left: 50vw;
            width: 50%;
            overflow-y: scroll;
            transition: 0.6s;

            &::-webkit-scrollbar {
               width: 0 !important;
            }
         }

         .a_right {
            position: relative;
            width: 75%;
            left: 25vw;
         }

         .d_right {
            width: 25%;
            left: 75vw;
         }

         .left {
            position: fixed;
            width: 50%;
            padding-top: 20vh;
            z-index: 0;
            overflow-y: scroll;
            top: 0;
            left: 0;
            transition: 0.6s;

            &::-webkit-scrollbar {
               width: 0 !important;
            }
         }

         .a_left {
            position: relative;
            width: 75%;
         }

         .d_left {
            width: 25%;
         }

      }
   }

   /* mobile */

   @media only screen and (max-width: 900px) {
      .container {

         main {

            .right {
               padding-top: 15vh;
               z-index: 0;
               position: fixed;
               left: 50vw;
               width: 50%;
               overflow-y: scroll;
               transition: 0.6s;

               &::-webkit-scrollbar {
                  width: 0 !important;
               }
            }

            .a_right {
               position: relative;
               width: 100%;
               left: 0;
            }

            .d_right {
               left: 0;
               display: none;
            }

            .left {
               position: fixed;
               width: 50%;
               padding-top: 15vh;
               z-index: 0;
               overflow-y: scroll;
               top: 0;
               left: 0;
               transition: 0.6s;

               &::-webkit-scrollbar {
                  width: 0 !important;
               }
            }

            .a_left {
               position: relative;
               width: 100%;
            }

            .d_left {
               display: none;
            }

         }
      }
   }


</style>
