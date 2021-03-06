<template>
   <div class="content">

      <h1>{{title}}</h1>

      <p
         :class="{left: isLeft, right: !isLeft, transparent: active}"
         :style="{
            borderColor: color,
            }"
         v-html="description"
      >
      </p>

      <main-page-button class="big-butt-on"
                        :class="{active: active}"
                        :bg-color="color"
                        :text="btnText"
                        @click.native="btnClicked"/>

      <transition name="showArrow">
         <v-icon name="arrow-down" class="arrow" v-if="active" scale="3" @click.native="scrollDown"/>
      </transition>
   </div>
</template>

<script>
   import MainPageButton from './partials/MainPageButton'
   import EventBus from '../assets/js/EventBus'

   export default {
      name: "Content",
      props: ['active', 'title', 'description', 'position', 'color', 'btnText'],
      components: {MainPageButton},
      data() {
         return {
            window: null
         }
      },
      beforeMount() {
         this.window = window
      },
      computed: {
         isLeft(){
            return this.position !== 'after'
         }
      },
      methods: {
         scrollDown(){
            window.scrollBy({
               top: this.window.innerHeight,
               left: 0,
               behavior: 'smooth'
            });
         },
         btnClicked(){
            this.$emit('buttonClicked')
            this.window.scrollTo(0, 0)
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
         line-height: 1.5em;
         position: relative;
         padding: 6vh 18px;
         font-size: .95em;
         color: #f6f8ff;
         transition: .3s;
         font-weight: 300;
         /*box-shadow: 3px 3px 5px 0 rgba(18, 18, 18, 0.75);*/
         min-height: 86px;
      }

      .arrow {
         display: block;
         margin: 5vh auto 120px auto;
         padding: 16px;
         width: 30%;
         height: 25px;
         border: 4px solid #9b9b9b;
         animation: blink 0.6s infinite alternate-reverse ease-out;
         cursor: pointer;
         transition: .3s;

         &:hover {
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
         font-family: 'Bahnschrift', sans-serif;
         display: block;
         position: relative;
         margin: 14vh auto 0 auto;
         border: 0;
         color: white;

         &:hover {
            background-color: #151618 !important;
         }

         &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 3px;
            width: 0;
            background-color: #fff;
            transition: 0.35s ease-in;
         }

         &::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            height: 3px;
            width: 0;
            background-color: #fff;
            transition: 0.35s ease-in;
         }

      }

      .active {
         border: none !important;
         background-color: transparent !important;

         &::after, &::before {
            width: 100%;
         }

         &:hover {
            background-color: transparent !important;
         }
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
