<template>
   <section class="mario">
      <h1 class="title">
         My arrangements on Marioverehrer's channel
      </h1>
      <p class="description">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Nunc interdum velit nec erat pharetra, id tristique nibh condimentum.
         In vel blandit ligula. Nullam tortor massa, vulputate interdum accumsan a, commodo eu purus.
         Duis pulvinar consequat ligula. Praesent vel tellus eu mi consequat ultricies.
         Curabitur pretium elit odio, a rhoncus massa convallis vitae.
         Pellentesque sem diam, lacinia nec lectus ut, varius rhoncus velit.
         In sed libero vestibulum, malesuada ante ut, laoreet quam. Aenean ante ipsum, tristique vitae sapien ac,
         aliquam faucibus justo.
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

      <v-icon name="brands/youtube" scale="5"
              class="icon youtube"/>
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
         margin: 25px auto;
         padding: 15px;
         width: 70%;
         display: block;
         font-size: 0.9em;
         font-weight: 300;
         color: #676463;
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

         .description{
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
