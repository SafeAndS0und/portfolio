<template>
   <div class="programming-content">
      <Project :projectProperties="projects[0]" id="Tableaux"/>
      <Project :projectProperties="projects[1]" id="Claire"/>
      <Project :projectProperties="projects[2]" id="asd"/>
      <Project :projectProperties="projects[3]" id="adfd"/>
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
                  githubURL: "https://github.com/SafeAndS0und/Tableaux",
                  liveURL: "https://safeands0und.github.io/Tableaux/",
                  madeUsing: [
                     {type: 'icon', src: 'brands/react', color: "#3187ff"},
                     {type: 'image', src: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' },
                     {type: 'image', src: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg' }
                     ],
                  description: `
                     Tableaux is just a fancy french word for "images". And really that's all there is to it. Nothing but images (of cows for example). <br/>
                     I just used Pixabay's API to fetch the images and display it in a nice looking grid and gave it some basic functionality. <br/>
                     Quite simple but I was interested in writing good code with React and Redux rather than making new Instagram.

                  `,
                  bigImg: '/portfolio/img/tableaux/t-big.gif',
                  details: [
                     {
                        img: '/portfolio/img/tableaux/t-grid.png',
                        comment: `
                           Appreciate amazing pictures put into a simple looking grid .<br/>
                           Search a topic that interests you and scroll down until you find what you're looking for. <br/>
                           Then add it to favorites to be able to come back to it easily.
                        `
                     },
                     {
                        img: '/portfolio/img/tableaux/t-filter.png',
                        comment: `
                           Filter searched images by different properties - category, color, size or style. <br/>
                           Change the order to see some newly added images.
                        `
                     },
                     {
                        img: '/portfolio/img/tableaux/t-image.png',
                        comment: `
                           Click an image that caught your eye. <br/>
                           You'll be able to download it, add it to favorites, see some more information or just admire it in all its glory.
                           <br/> Just look at this beauty.
                        `
                     }
                  ],

               },
               {
                  title: 'totallynotspotify',
                  githubURL: "https://github.com/SafeAndS0und/totallynotspotify",
                  liveURL: "https://safeands0und.github.io/totallynotspotify/",
                  madeUsing: [
                     {type: 'icon', src: 'brands/react', color: "#3187ff"},
                     {type: 'image', src: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' },
                     {type: 'image', src: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg' }
                  ],
                  description: `
                     With "totallynotspotify" I was primarily aiming for a pleasing visual impression. <br/>
                     That why I was shamelessly stealing Spotify's design and some other dribbble ideas.
                     I'm not a graphic designer - I gathered. <br/>
                     Well it also works. And I think it works really well.
                     I didn't plan it to, so in the end it doesn't use any state management solution except for simple props, custom hooks and components.
                     It's still just a demo, many things could have been done better.
                  `,
                  bigImg: '/portfolio/img/spotify/t-big.gif',
                  details: [
                     {
                        img: '/portfolio/img/spotify/t-whole.png',
                        comment: `
                           I'm really satisfied with the general visual result. <br/>
                        `
                     },
                     {
                        img: '/portfolio/img/spotify/t-mobile.png',
                        comment: `
                           I won't lie, it's pretty cumbersome on mobile devices. <br/>
                           It's usable, though. : ]
                        `
                     },
                     {
                        img: '/portfolio/img/spotify/t-close.png',
                        comment: `
                           I like the list specifically. <br/>
                           It's just really elegant but modern at the same time.
                        `
                     }
                  ],

               },
               {
                  title: 'Corresponder',
                  githubURL: "https://github.com/SafeAndS0und/Corresponder",
                  liveURL: null,
                  madeUsing: [
                     {type: 'image', src: 'https://nodejs.org/static/images/logo.svg' },
                     {type: 'text', text: 'Express.js', color: "#beb8c1" },
                     {type: 'image', src: 'http://pluspng.com/img-png/logo-mongodb-png-mongodb-1600.png' },
                     {type: 'image', src: 'https://www.3cx.pl/wp-content/uploads/sites/23/webrtc-logo.png' },
                     {type: 'icon', src: 'brands/vuejs', color: "#369e49"},
                     {type: 'text', text: 'Vuex', color: "#7bc2a1"}
                  ],
                  description: `
                     Corresponder is a chatting app.
                     This project probably concerns the most different programming areas (whole frontend and backend, webRTC) of all projects I did.
                     <br/> So it also makes it the most complicated project I worked on. <br/>
                     But I can't say it's the best one - almost half a year passed since I began working on it. I've learnt a lot throughout this time. <br/>
                     Sadly, I couldn't get it to work with webRTC on hosting but I guess you can try downloading the repo locally.
                      `,
                  bigImg: '/portfolio/img/corresponder/c-big.gif',
                  details: [
                     {
                        img: '/portfolio/img/corresponder/c-talk.png',
                        comment: `Add friends and to talk to them in real time through webRTC. <br/>
                                  You can also join different topic-rooms and discuss about a specific matter.
                        `
                     },
                     {
                        img: '/portfolio/img/corresponder/c-fold.png',
                        comment: `The sidebar folds. Not much to say about that.`
                     },
                     {
                        img: '/portfolio/img/corresponder/c-dark.png',
                        comment: `It also includes dark mode - I don't want you to go blind.`
                     },
                  ],

               },
               {
                  title: 'fictional-claire',
                  githubURL: "https://github.com/SafeAndS0und/Fictional-Claire",
                  liveURL: "https://safeands0und.github.io/Fictional-Claire/",
                  madeUsing: [
                     {type: 'icon', src: 'brands/vuejs', color: "#369e49"},
                     {type: 'image', src: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg' },
                     {type: 'image', src: 'https://nuxtjs.org/logos/nuxt-square.svg' }
                  ],
                  description: `
                  Fictional Claire is a personal website of a classical pianist, Claire. And yes, you've guessed it - she doesn't exist irl.
                  <br/> It's a simple website, I focused on showing my perspective on style and design which is probably not so great.
                  <span style="font-size: 1.5em">💁‍♀</span>️


                  `,
                  bigImg: '/portfolio/img/claire/c-big.gif',
                  details: [
                     {
                        img: '/portfolio/img/claire/c-main.png',
                        comment: `Homepage.`
                     },
                     {
                        img: '/portfolio/img/claire/c-bio.png',
                        comment: `Bio.
                        For those who care - it's a biography of an actual pianist, <a
                        href="https://en.wikipedia.org/wiki/Yuja_Wang"
                        target="_blank"
                        style="text-decoration: none;color:#2d5747;"
                        >
                        Yuja Wang</a>.
`
                     },
                     {
                        img: '/portfolio/img/claire/c-res.png',
                        comment: `
                           It's responsive, yes I know media queries.
                        `
                     },
                  ],

               },
               {
                  title: 'moo-v',
                  githubURL: "https://github.com/SafeAndS0und/moo-v",
                  liveURL: "https://safeands0und.github.io/moo-v/",
                  madeUsing: [
                     {type: 'icon', src: 'brands/vuejs', color: "#369e49"},
                     {type: 'image', src: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg' },
                     {type: 'image', src: 'https://nuxtjs.org/logos/nuxt-square.svg' }
                  ],
                  description: `
                  Moo is what cow does. V stands for Vue. Combined it gives us a "movie" which is, in fact, the subject of this project. <br/>
                  It uses an external API to fetch some details about a movie and displays them nicely to the user. That's about it.
                  `,
                  bigImg: '/portfolio/img/moov/m-big.gif',
                  details: [
                     {
                        img: '/portfolio/img/moov/m-main.png',
                        comment: `
                           Looks just like Netflix, right?.
                        `
                     },
                     {
                        img: '/portfolio/img/moov/m-search.png',
                        comment: `
                           You can also search for a specific movie. Even in non-english languages, didn't test them all, though.
                        `
                     },
                     {
                        img: '/portfolio/img/moov/m-moovie.png',
                        comment: `
                           Click a moo-v to find out its rating, release date, categories and other things you don't care about.
                        `
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
