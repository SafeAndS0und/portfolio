<template>
   <section class="right" :class="{active: isActive}">

      <Content class="content"
               :title="title"
               :description="description"
               :color="color"
               position="after"
               :active="isActive"
               btn-text="See my projects"
               @buttonClicked="changeFocus"
      />

      <programming-content v-if="isActive" class="programming-content"/>
   </section>
</template>

<script>
   import Content from './Content'
   import ProgrammingContent from './programming/ProgrammingContent'
   import EventBus from '../assets/js/EventBus'

   export default {
      name: "Right",
      components: {Content, ProgrammingContent},
      mounted(){
         EventBus.$on('togglingSections', sectionStatus =>{
            sectionStatus.right
               ? this.isActive = true
               : this.isActive = false

            sectionStatus.right
               ? this.color = '#fff'
               : this.color = '#151618'
         })
      },
      data(){
         return {
            title: "programming",
            color: '#151618',
            description: `Music is awesome, but I would always like to keep it in the definiton of hobby.
                        Programming is something different, something that I can call "work" and feel good about it.
                        Not that I don't enjoy it, but I like the distinction between work and passion.`,

            isActive: false
         }
      },
      methods: {
         changeFocus(){
            this.$emit('activeStatusChanged') // let know the parent component that it should change their css

         }
      }
   }
</script>

<style scoped lang="scss">

   .right {
      position: relative;
      transition: background-color 0.5s;

      .content {
         margin: auto;
         width: 85%;
      }

      .programming-content{
         margin: auto;
         width: 100%;
      }
   }

   .active {
      background-color: #2d60dd;
      //#551D2B

   }


</style>
