<template>
   <section class="left" :class="{active: isActive}">

      <Content class="content"
               :title="title"
               :description="description"
               :color="color"
               :active="isActive"
               @buttonClicked="changeFocus"
      />

      <MusicContent v-if="isActive" class="music-content"/>
   </section>
</template>

<script>
   import Content from './Content'
   import MusicContent from './Music/MusicContent'
   import EventBus from '../assets/js/EventBus';

   export default {
      name: "Left",
      components: {Content, MusicContent},
      mounted(){
         EventBus.$on('togglingSections', sectionStatus =>{
            sectionStatus.left
               ? this.isActive = true
               : this.isActive = false

            sectionStatus.left
               ? this.color = '#ffffff'
               : this.color = '#1d1d1d'
         })
      },
      data(){
         return {
            title: "Music",
            description: `Music was always something I loved.
                        That's definitely my biggest interest, it always was.
                        Shifting through the different genres I am now inloved in classical piano music the most.
                        But before that I was also intrigued by many others types of music - from electronic to orchestral.`,
            isActive: false,
            color: '#1d1d1d',
         }
      },
      methods:{
         changeFocus(){
            this.$emit('activeStatusChanged') // let know the parent component that it should change their css
         }
      }
   }
</script>

<style scoped lang="scss">

   .left {
      position: relative;
      transition: background-color 0.5s;

      .content {
         margin: auto;
         width: 85%;
      }

      .music-content{
         margin: auto;
         width: 100%;
      }
   }

   // #134883;
   .active {
      background-color: #194fc8;
   }
</style>
