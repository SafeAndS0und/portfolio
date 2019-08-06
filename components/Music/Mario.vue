<template>
   <section class="mario">
      <h1 class="title">
         My arrangements on Marioverehrer's channel
      </h1>
      <p class="description">
         If you're anyhow interested in piano music you may have seen the 'falling keys' tutorials.
         That's synthesia. <br/> It uses MIDI files to display how to play a piece. <br/>
         I often have fun writing MIDI arrangements for a guy who has a pretty famous Youtube account - Marioverehrer.
         <br/>
         He records a video of it, puts it up online for people to learn or just enjoy the music.
      </p>

      <div class="video">
         <iframe
            src="https://www.youtube.com/embed/YE9cxYd27Jw" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
         </iframe>
      </div>
      <div class="video">
         <iframe src="https://www.youtube.com/embed/W7vKbP0RJt0"
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen>
         </iframe>
      </div>
      <div class="video">
         <iframe src="https://www.youtube.com/embed/781TZLu4pVM"
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen>
         </iframe>
      </div>

      <a href="https://www.youtube.com/playlist?list=PLr9sGf00riiu-5jD7l1_r0vvyJn0t2Srv" target="_blank">
         <v-icon name="brands/youtube" scale="5"
                 class="icon youtube"/>
      </a>
   </section>
</template>

<script>
   export default {
      name: "Mario"
   }
</script>

<style scoped lang="scss">
   @import '../../assets/css/variables';

   .mario {
      width: 100%;
      padding: 40px 0 0 0;
      background-color: #141414;

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
            border-left: 6px solid #1659D7;
         }
      }

      .icon {
         padding: 40px 0;
         margin: 35px 0 0 0;
         width: 100%;
         height: 80px;
         color: #72717a;
         transition: 0.35s;
         cursor: pointer;
         transform: translateY(5px);
      }

      .icon:hover {
         color: #fff;
         background-color: #1659D7;
      }
   }

   /* mobile */

   @media only screen and (max-width: $tablet) {
      .mario {
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
