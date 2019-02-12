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

      <transition name="showArrow">
         <v-icon name="arrow-down" class="arrow" v-if="active" scale="3"/>
      </transition>
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
      computed: {
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
   .content {
      color: white;

      h1 {
         text-align: center;
         text-transform: uppercase;
         letter-spacing: 7px;
         font-size: 1.7em;
         font-weight: 400;
         margin-bottom: 8vh;
      }

      p {
         background-color: #0a2643;
         position: relative;
         padding: 6vh 40px;
         font-size: .9em;
         color: #999ba1;
         transition: .3s;
      }

      .arrow {
         display: block;
         margin: 4.5vh auto;
         padding: 16px;
         width: 30%;
         height: 25px;
         border: 4px solid #9b9b9b;
         animation: blink 0.6s infinite alternate-reverse ease-out;
         cursor: pointer;
         transition: .3s;

         &:hover{
            border-color: #ffffff;
            background-color: #161616;
            transform: scale(1.02);
            animation: none;
         }
      }

      .transparent {
         background-color: transparent;
      }

      .left {
         border-left: 6px solid;
      }

      .right {
         border-right: 6px solid;
      }

      .big-butt-on {

         display: block;
         margin: 14vh auto 0 auto;
      }

      @keyframes blink {
         from {
            opacity: 0.3;
         }
         to {
            opacity: 1;
         }
      }
   }




   .showArrow-enter-active, .showArrow-leave-active {
      transition: .5s;
   }
   .showArrow-enter, .showArrow-leave-to {
      transform: translateY(400px);
   }
</style>
