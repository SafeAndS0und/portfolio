<template>
   <section class="soundcloud">
      <h1 class="title">
         My own pieces on Soundclound
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

      <v-icon name="brands/soundcloud" scale="5"
              class="icon"/>

   </section>
</template>

<script>
   export default {
      name: "Soundcloud"
   }
</script>

<style scoped lang="scss">

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
         margin: 25px auto;
         padding: 15px;
         width: 70%;
         display: block;
         font-size: 0.9em;
         font-weight: 300;
         color: #676463;
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

</style>
