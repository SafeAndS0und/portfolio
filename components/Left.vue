<template>
   <section class="left" :class="{active: isActive}">

      <Content class="content"
               :title="title"
               :description="description"
               :color="color"
               @buttonClicked="changeFocus"
      />

      <MusicContent v-if="isActive" class="music-content"/>
   </section>
</template>

<script>
   import Content from './Content'
   import MusicContent from './Music/MusicContent'

   export default {
      name: "Left",
      components: {Content, MusicContent},
      data(){
         return {
            title: "Music",
            description: `Music was always something I loved.
                        That's definitely my biggest interest, it always was.
                        Shifting through the different genres I am now inloved in classical piano music the most.
                        But before that I was also intrigued by many others types of music - from electronic to orchestral.`,
            color: '#0f477f',
            isActive: false
         }
      },
      methods:{
         changeFocus(){
            this.$emit('activeStatusChanged') // let know the parent component that it should change their css
            this.isActive = !this.isActive
            this.color = this.isActive ? '#403d4b' : '#0f477f'
         }
      }
   }
</script>

<style scoped lang="scss">

   .left {
      position: relative;
      padding: 200px 0;
      transition: 0.5s;

      .content {
         margin: auto;
         width: 85%;
      }

      .music-content{
         margin: auto;
         width: 85%;
      }
   }

   .active {
      background-color: #2B2E41;
   }
</style>
