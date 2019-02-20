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
      color: #a7aab9;
      font-size: 17px;
      letter-spacing: 6px;
      text-transform: uppercase;
      transition: 0.4s;
      border-radius: 3px;
      font-weight:500;

      &:focus, &:active{
         outline: none;
      }

   }

</style>
