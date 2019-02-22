<template>
   <div class="programming-content">
      <Project :projectProperties="projects[0]" id="crm"/>
      <Project :projectProperties="projects[1]" id="asd"/>
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
                  title: 'CRM System',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                  'Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. ' +
                  'Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. ',
                  bigImg: 'https://cdn.business2community.com/wp-content/uploads/2017/09/Sales-Dashboard.png',
                  details: [
                     'https://www.speedtocontact.com/wp-content/uploads/2018/05/speed-to-contact-blog-what-is-crm-system.png',
                     'https://synergiuscrm.pl/wp-content/uploads/2017/03/CRM-proces-sprzeda%C5%BCy.-Elastyczny-CRM..png',
                     'http://informatykawfirmie.pl/images/Grafiki/aura-pulpit.png'
                  ],

               },
               {
                  title: 'MOVIES',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                  'Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. ' +
                  'Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. ',
                  bigImg: 'https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2017/10/p-1-why-netflix-isnand8217t-worried-that-studios-andamp-networks-are-walking-away-1.jpg',
                  details: [
                     'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fs.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F884e68f9a829f3a26db5b729f00ccd03%2F206508290%2FEnglish.jpg&client=amp-blogside-v2&signature=953687e45abb08acfd93f2cac4c7fe66de3a9fc6',
                     'https://filedb.experts-exchange.com/incoming/2015/06_w27/921333/Netflix.jpg',
                     'https://i.kinja-img.com/gawker-media/image/upload/s--8TzC0OzO--/c_scale,f_auto,fl_progressive,q_80,w_800/nkk0nmfxlxp9dnofuwov.jpg',
                  ],

               }
            ]
         }
      }
   }
</script>

<style scoped lang="scss">

   .programming-content {

      #crm {
         background-color: #141414;
      }

      #asd{
         background-color: #191919;
      }
   }

</style>
