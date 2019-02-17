<template>
    <button :style="{backgroundColor: bgColor}">Click for more</button>
</template>

<script>
   export default {
      props: ['bgColor'],
      name: "MainPageButton"
   }
</script>

<style scoped lang="scss">

   button{
      cursor: pointer;
      padding: 32px 0;
      width: 100%;
      border: none;
      color: #d2d6e5;
      font-size: 18px;
      letter-spacing: 4px;
      transition: 0.4s;

      &:focus, &:active{
         outline: none;
      }
   }

</style>
