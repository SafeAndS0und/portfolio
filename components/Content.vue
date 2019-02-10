<template>
    <div class="content">

       <h1>{{title}}</h1>

       <p
          :class="{left: isLeft, right: !isLeft, transparent: active}"
          :style="{borderLeftColor: color, borderRightColor: color}">
          {{description}}
       </p>

       <main-page-button class="big-butt-on"
                         :bg-color="color"
                         @click.native="btnClicked"/>
    </div>
</template>

<script>
   import MainPageButton from './partials/MainPageButton'

   export default {
      name: "Content",
      props: ['title', 'description', 'position', 'color'],
      components: {MainPageButton},
      data(){
         return {
            active: false
         }
      },
      computed:{
         isLeft(){
            return this.position !== 'after'
         }
      },
      methods: {
         btnClicked(){
            this.active = !this.active
            this.$emit('buttonClicked')
         }
      }
   }
</script>

<style scoped lang="scss">
   .content{
      color: white;


      h1{
         text-align: center;
         text-transform: uppercase;
         letter-spacing: 7px;
         font-size: 1.7em;
         font-weight: 400;
         margin-bottom: 10vh;
      }

      p{
         background-color: #0a2643;
         position: relative;
         padding: 6vh 40px;
         font-size: .9em;
         color: #999ba1;
         transition: 0.3s;

      }

      .transparent{
         background-color: transparent;
      }

      .left{
         border-left: 6px solid;
      }

      .right{
         border-right: 6px solid;
      }

      .big-butt-on {

         display: block;
         margin: 16vh auto;
      }
   }
</style>
