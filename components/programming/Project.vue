<template>
   <section class="project">
      <h1>{{projectProperties.title}}</h1>

      <p v-html="projectProperties.description"></p>

      <div class="made-using-container">
         <div class="made-using">
            <article v-for="brand of projectProperties.madeUsing">

               <v-icon v-if="brand.type === 'icon'" scale="2.5"
                       :name="brand.src"
                       class="made-using-item"
                       :style="{color: brand.color}"/>

               <h2 v-else-if="brand.type === 'text'" class="made-using-item" :style="{color: brand.color}">
                  {{brand.text}}
               </h2>

               <img :src="brand.src" alt="Logo" v-else class="made-using-item"/>

            </article>
         </div>
      </div>

      <img :src="projectProperties.bigImg" class="bigImg" alt="Huge image">

      <div class="details">

         <article v-for="detail of projectProperties.details">
            <img :src="detail.img" alt="small image" @click="activatePopup(detail.img)">
            <p class="detail-desc" v-html="detail.comment"></p>
         </article>

         <div class="popup" v-if="popupActive">
            <div @click="popupActive = false">CLOSE</div>
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

   .project {
      padding: 60px 15px 40px 15px;
      position: relative;

      h1 {
         text-align: center;
         font-size: 1.35em;
         color: white;
         text-transform: uppercase;
         letter-spacing: 1px;
      }

      .made-using-container {
         position: absolute;
         right: 25px;
         top: 25px;
         display: block;
         width: fit-content;
         max-width: 90%;

         .made-using {
            display: grid;
            grid-gap: 10px;
            grid-auto-flow: column;
            align-items: center;
            justify-items: center;

            .made-using-item {
               opacity: .9;
               height: 33px;
               font-weight: 100;
               font-size: 1.3em;
               margin: 0;
            }
         }
      }

      p {
         margin: 15px auto;
         width: 80%;
         display: block;
         font-weight: 300;
         font-size: 0.94em;
         color: #656767;
         padding: 15px;
         line-height: 1.5em;

      }

      .bigImg {
         display: block;
         margin: 0 auto;
         max-height: 500px;
         max-width: 100%;

         padding: 20px 0;
         border-bottom: 1px solid #1a1a1a;
      }

      .details {
         width: 100%;
         padding: 30px 10px;
         box-sizing: border-box;
         display: grid;
         grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
         grid-gap: 10px;

         article {

            img {
               display: block;
               margin: auto;
               max-width: 100%;
               height: 200px;
               padding-bottom: 15px;

               z-index: 135;
               transition: 0.2s;
               opacity: 0.7;
               object-fit: cover;

               &:hover {
                  opacity: 1;
                  transform: scale(1.2);
                  cursor: pointer;
               }
            }

            p {
               display: block;
               margin: 0 auto;
               width: 90%;
               font-size: 0.85em;
               padding: 15px 0;
               border-top: 1px solid #232323;

            }
         }

         .popup {
            position: fixed;
            z-index: 7;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);

            opacity: 0.99;
            border-top: none;

            div {
               width: 100%;
               height: 30px;
               background-color: #1a181b;
               text-align: center;
               line-height: 30px;
               cursor: pointer;
               color: white;

               &:hover {
                  background-color: #262526;
               }
            }
            img {
               object-fit: cover;
               max-width: 70vw;
               max-height: 70vh;
            }

         }
      }

   }

</style>
