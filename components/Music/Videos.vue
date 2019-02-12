<template>
   <section class="videos">
      <h1 class="title">
         My Youtube's piano channel
      </h1>
      <p class="description">

      </p>
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
      margin: 70px 0;
      padding: 40px 0 100px 0;
      background-color: #141414;

      .title{
         text-align: center;
         font-size: 22px;
         color: white;
         text-transform: uppercase;
         letter-spacing: 1px;
      }

      .video{
         iframe{
            display: block;
            width: 75%;
            height: 180px;
            margin: 15px auto;
         }


      }

   }

</style>
