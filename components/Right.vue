<template>
   <section class="right" :class="{active: isActive}">

      <Content class="content"
               :title="title"
               :description="description"
               :color="color"
               position="after"
               @buttonClicked="changeFocus"
      />
   </section>
</template>

<script>
   import Content from './Content'

   export default {
      name: "Right",
      components: {Content},
      data(){
         return {
            title: "programming",
            description: `Music is awesome, but I would always like to keep it in the definiton of passion.
                        Programming is something different, something that I can call "work" and feel good about it.
                        Not that I don't enjoy it, but I like the distinction between programming and music.`,
            color: '#0f477f',

            isActive: false
         }
      },
      methods:{
         changeFocus(){
            this.isActive = !this.isActive

            this.color = this.isActive ? '#8a3036' : '#0f477f'
         }
      }
   }
</script>

<style scoped lang="scss">

   .right{
      position: relative;
      padding: 200px 0;
      transition: 0.5s;

      .content{
         margin: auto;
         width: 85%;
      }
   }
   .active {
      background-color: #551D2B;

   }


</style>
