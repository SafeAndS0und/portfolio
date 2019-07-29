<template>
   <div class="programming-content">
      <Project :projectProperties="projects[0]" id="Tableaux"/>
      <Project :projectProperties="projects[1]" id="Claire"/>
      <Project :projectProperties="projects[2]" id="asd"/>
   </div>
</template>

<script>
   import Project from './Project'

   export default {
      name: "ProgrammingContent",
      components: {Project},
      data(){
         return {
            projects: [
               {
                  title: 'Tableaux',
                  description: `
                     Tableaux means just "images". And really that's all there is to it. Nothing but images. <br/>
                     I just used Pixabay's API to fetch the images and display it in a nice looking grid, added some basic functionality. <br/>
                     Simple but I was interested in writing good code with React and Redux rather than making new Instagram.

                  `,
                  bigImg: '/img/tableaux/t-big.gif',
                  details: [
                     {
                        img: '/img/tableaux/t-grid.png',
                        comment: `
                           Appreciate amazing pictures put into a simple looking grid .<br/>
                           Search a topic that interests you and scroll down until you find what you're looking for. <br/>
                           Then add it to favorites to be able to come back to it easily.
                        `
                     },
                     {
                        img: '/img/tableaux/t-filter.png',
                        comment: `
                           Filter searched images by different properties - category, color, size or style. <br/>
                           Change the order to see some newly added images.
                        `
                     },
                     {
                        img: '/img/tableaux/t-image.png',
                        comment: `
                           Click an image that caught your eye. <br/>
                           You'll be able to download it, add it to favorites, see some more information or just admire it in all its glory.
                        `
                     }
                  ],

               },
               {
                  title: 'fictional-claire',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                  'Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. ' +
                  'Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. ',
                  bigImg: '/img/claire/c-big.gif',
                  details: [
                     {
                        img: '/img/claire/c-main.png'
                     },
                     {
                        img: '/img/claire/c-bio.png'
                     },
                     {
                        img: '/img/claire/c-res.png'
                     },
                  ],

               },
               {
                  title: 'moo-v',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                  'Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. ' +
                  'Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. ',
                  bigImg: '/img/moov/m-big.gif',
                  details: [
                     {
                        img: '/img/moov/m-main.png'
                     },
                     {
                        img: '/img/moov/m-search.png'
                     },
                     {
                        img: '/img/moov/m-moovie.png'
                     },
                  ],

               }
            ]
         }
      }
   }
</script>

<style scoped lang="scss">

   .programming-content {

      section:nth-child(odd) {
         background-color: #141414;
      }
      section:nth-child(even) {
         background-color: #191919;
      }

   }

</style>
