<template>
   <section class="videos">
      <h1 class="title">
         My Youtube's piano channel
      </h1>
      <p class="description">
         Other than writing arrangements I like to just play some already written music.
         I use Youtube as some kind of personal diary of the pieces that I learnt. <br/>
         It's nothing spectacular, I'm not training profesionally or anything like that, I just like to have it all in
         one place.
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

      <a href="https://www.youtube.com/user/NikiL2134/videos" target="_blank">
         <v-icon name="brands/youtube" scale="5"
                 class="icon"/>
      </a>


   </section>
</template>

<script>
   export default {
      name: "Videos",
      data(){
         return {
            active: false
         }
      },
      methods: {
         toggleActiveVideo(){
            this.active = !this.active
         }
      }
   }
</script>

<style scoped lang="scss">
   @import '../../assets/css/variables';

   .videos {
      width: 100%;
      padding: 40px 0 0 0;
      background-color: #181818;

      .title {
         text-align: center;
         font-size: 22px;
         color: white;
         text-transform: uppercase;
         letter-spacing: 1px;
      }

      .description {
         margin: 15px auto;
         width: 70%;
         display: block;
         font-weight: 300;
         font-size: 0.94em;
         color: #656767;
         padding: 15px;
         line-height: 1.5em;
      }

      .video {

         iframe {
            display: block;
            width: 75%;
            height: 220px;
            margin: 15px auto;
            padding-left: 12px;
            border-left: 6px solid #a00f0f
         }
      }

      .icon {
         padding: 40px 0;
         margin: 35px 0 0 0;
         width: 100%;
         height: 80px;
         color: #2d282a;
         transition: 0.35s;
         cursor: pointer;
         transform: translateY(5px);
      }

      .icon:hover {
         color: #fff9f2;
         background-color: #871b17;
      }

   }

   @media only screen and (max-width: $tablet) {
      .videos {
         box-sizing: border-box;
         padding: 40px 6px 0 6px;

         .description {
            width: 80%;
         }

         .video {
            iframe {
               width: 85%;
            }
         }
      }
   }
</style>
