<template>
   <section class="right" :class="{active: isActive}">

      <Content class="content"
               :title="title"
               :description="description"
               :color="color"
               position="after"
               :active="isActive"
               @buttonClicked="changeFocus"
      />
      <div v-if="isActive">
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
      </div>
   </section>
</template>

<script>
   import Content from './Content'
   import EventBus from '../assets/js/EventBus';

   export default {
      name: "Right",
      components: {Content},
      mounted(){
         EventBus.$on('togglingSections', sectionStatus =>{
            sectionStatus.right
               ? this.isActive = true
               : this.isActive = false

            sectionStatus.right
               ? this.color = '#8a3036'
               : this.color = '#202020'
         })
      },
      data(){
         return {
            title: "programming",
            description: `Music is awesome, but I would always like to keep it in the definiton of passion.
                        Programming is something different, something that I can call "work" and feel good about it.
                        Not that I don't enjoy it, but I like the distinction between programming and music.`,
            color: '#202020',

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
   }

   .active {
      background-color: #551D2B;

   }


</style>
