<template>
   <svg version="1.1" :class="{active: showMenu}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 313 151" style="enable-background:new 0 0 313 151;" xml:space="preserve">
         <g>
            <rect x="0.5" y="0.5" width="312" height="31"/>
            <path d="M312,1v30H1V1H312 M313,0H0v32h313V0L313,0z"/>
         </g>
         <g>
            <rect x="0.5" y="60.5" width="312" height="31"/>
            <path d="M312,61v30H1V61H312 M313,60H0v32h313V60L313,60z"/>
         </g>
         <g>
            <rect x="0.5" y="119.5" width="312" height="31"/>
            <path d="M312,120v30H1v-30H312 M313,119H0v32h313V119L313,119z"/>
         </g>
      </svg>
</template>

<script>
   export default {
      name: "burger_Icon",
      props: ['showMenu'],
      data(){
         return {}
      },
      methods: {}
   }
</script>

<style scoped lang="scss">
   svg {
      overflow: visible;
      g {
         transition: 0.25s;

         rect {

         }
      }
   }

   .active {
      transform-origin: center;
      transform: rotate(90deg) scale(0.9) translateX(12px);

      g{
         transform-origin: center;
      }

      g:nth-child(1) {
         transform: rotate(-45deg) translateX(-51px);
      }
      g:nth-child(2) {
         opacity: 0;
      }
      g:nth-child(3) {
         transform: rotate(45deg)  translateX(-51px);
      }
   }

   @media only screen and (max-width: 900px) {
      .active {

         g:nth-child(1) {
            transform: rotate(-45deg) translateX(-56px);
         }
         g:nth-child(2) {
            opacity: 0;
         }
         g:nth-child(3) {
            transform: rotate(45deg)  translateX(-56px);
         }
      }
   }
</style>
