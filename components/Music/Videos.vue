<template>
   <section class="videos">

      <div class="video">
         <iframe
                 src="https://www.youtube.com/embed/9NsZyFLf-vg" frameborder="0"
                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen>
         </iframe>
      </div>
      <div class="video">
         <iframe src="https://www.youtube.com/embed/LkT1H1-I2yk"
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen>
         </iframe>
      </div>
      <div class="video">
         <iframe src="https://www.youtube.com/embed/o1JZtNP0x1M"
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen>
         </iframe>
      </div>

   </section>
</template>

<script>
   export default {
      name: "Videos"
   }
</script>

<style scoped lang="scss">

   .videos {
      width: 100%;

      .video{
         iframe{
            display: block;
            width: 65%;
            height: 180px;
            margin: 15px auto;
         }


      }

   }

</style>
