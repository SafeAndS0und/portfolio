<template>
   <section class="soundcloud">
      <h1 class="title">
         My own pieces on Soundclound
      </h1>
      <p class="description">
         Last but not least - Soundcloud.
         It's a place for everything else that I do which isn't the already mentioned. <br/>
         You can expect more of my own creations in many different genres, styles and ideas. <br/>
         I don't compose too much anymore but there are some pieces that I'm proud of to this day.
      </p>
      <!---->
      <div class="piece">
         <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
                 src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/220892836&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      </div>
      <div class="piece">
         <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
                 src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/271989133&color=%230a0a1d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      </div>
      <div class="piece">
         <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
                 src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/250869974&color=%230a0a1d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      </div>
      <div class="piece">
         <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
                 src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/274443808&color=%230a0a1d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      </div>

      <a href="https://soundcloud.com/safeandsound2134" target="_blank">
         <v-icon name="brands/soundcloud" scale="5"
                 class="icon"/>
      </a>
   </section>
</template>

<script>
   export default {
      name: "Soundcloud"
   }
</script>

<style scoped lang="scss">

   @import '../../assets/css/variables';

   .soundcloud {
      width: 100%;
      padding: 40px 0 0 0;
      background-color: #141414;

      .title {
         text-align: center;
         font-size: 22px;
         color: #ec3c0e;
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

      .piece {
         display: block;
         width: 75%;
         margin: 15px auto;
         padding-left: 12px;
         border-left: 6px solid #d73303
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
         background-color: #d73303;
      }

   }

   @media only screen and (max-width: $tablet) {
      .soundcloud {
         box-sizing: border-box;
         padding: 40px 6px 0 6px;

         .description {
            width: 80%;
         }

         .piece {
            width: 85%;
         }
      }
   }

</style>
