<template>
   <div class="container">
      <Navbar class="nav"/>
      <div class="main" :style="{gridTemplateColumns: `${leftSpace}% ${rightSpace}%` }">
         <Left class="left"
               :style="{
               position: isActiveLeft ? 'relative' : 'fixed',
               width: isActiveLeft ? '100%' : leftSpace + '%'
               }"
               @activeStatusChanged="toggleLeft"/>
         <Right class="right"
                :style="{
                position: isActiveRight ? 'relative' : 'fixed',
                width: isActiveRight ? '100%' : rightSpace + '%',
                left: isActiveRight && isActiveLeft ? '0' : leftSpace + 'vw'
               }"
                @activeStatusChanged="toggleRight"
         />
      </div>

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
            rightSpace: 50,
            leftSpace: 50
         }
      },
      methods: {
         toggleLeft(){
            this.isActiveLeft = !this.isActiveLeft
            if(this.isActiveLeft){
               this.leftSpace = 70
               this.rightSpace = 30
            } else{
               this.leftSpace = 50
               this.rightSpace = 50
            }

         },
         toggleRight(){
            this.isActiveRight = !this.isActiveRight
            if(this.isActiveRight){
               this.leftSpace = 30
               this.rightSpace = 70
            } else{
               this.leftSpace = 50
               this.rightSpace = 50
            }

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
      .main {
         width: 100%;

         display: grid;
         z-index: -44;

         .right {
            padding-top: 20vh;
            z-index: 0;
            grid-row: 1;
            overflow-y: scroll;
            transition: 0.6s;

            &::-webkit-scrollbar {
               width: 0 !important;
            }

         }

         .left {
            padding-top: 20vh;
            z-index: 0;
            grid-row: 1;
            overflow-y: scroll;
            top: 0;
            left: 0;
            transition: 0.6s;

            &::-webkit-scrollbar {
               width: 0 !important;
            }
         }
      }
   }

</style>
