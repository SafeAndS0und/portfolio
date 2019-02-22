<template>
   <section class="project">
      <h1>{{projectProperties.title}}</h1>
      <p>{{projectProperties.description}}</p>

      <img :src="projectProperties.bigImg" class="bigImg" alt="Huge image">

      <div class="details">

         <article v-for="detail of projectProperties.details">
            <img :src="detail" alt="small image" @click="activatePopup(detail)">
            <p class="detail-desc">{{projectProperties.description}}</p>
         </article>

         <div class="popup" v-if="popupActive">
            <div>CLOSE</div>
            <img :src="popupSrc" alt="Image">
         </div>

      </div>
   </section>
</template>

<script>
   export default {
      name: "Project",
      props: ['projectProperties'],
      data(){
         return {
            popupActive: false,
            popupSrc: ''
         }
      },
      methods: {
         activatePopup(src){
            this.popupActive = !this.popupActive
            this.popupSrc = src
         }
      }
   }
</script>

<style scoped lang="scss">

   .project{
      padding: 40px 15px;

      h1{
         text-align: center;
         font-size: 1.35em;
         color: white;
         text-transform: uppercase;
         letter-spacing: 1px;
      }

      p{
         margin: 25px auto;
         width: 70%;
         display: block;
         font-weight: 300;
         font-size: 0.9em;
         color: #656767;
         padding: 15px;
      }

      .bigImg{
         display: block;
         margin: 0 auto;
         max-height: 500px;
         max-width: 100%;

         padding: 40px 0;
         border-bottom: 1px solid #1a1a1a;
      }

      .details{
         width: 100%;
         padding: 30px 10px;
         box-sizing: border-box;
         display: grid;
         grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
         grid-gap: 10px;

         article{

            img{
               display: block;
               margin: auto;
               max-width: 100%;
               height: 200px;
               padding-bottom: 15px;

               z-index: 135;
               transition: 0.2s;
               opacity: 0.7;

               &:hover{
                  opacity: 1;
                  transform: scale(1.2);
                  cursor: pointer;
               }
            }

            p{
               display: block;
               margin: 0 auto;
               width: 90%;
               font-size: 0.85em;
               padding: 15px 0;
               border-top: 1px solid #232323;

            }
         }

         .popup{
            position: fixed;
            z-index: 12500;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);

            opacity: 0.9;
            border: 10px solid white;

            div{
               width: 100%;
               height: 20px;
               background-color: red;
            }
            img{
               max-width: 80vw;
               max-height: 80vh;
            }

         }
      }

   }

</style>
