<template>
    <button :style="{borderColor: bgColor}">{{text}}</button>
</template>

<script>
   export default {
      props: ['bgColor', 'text'],
      name: "MainPageButton"
   }
</script>

<style scoped lang="scss">

   button{
      cursor: pointer;
      padding: 32px 0;
      border: 5px solid;
      width: 100%;
      background-color: transparent;
      color: #a7aab9;
      font-size: 17px;
      letter-spacing: 6px;
      text-transform: uppercase;
      transition: 0.4s;
      border-radius: 1px;
      font-weight:500;

      &:focus, &:active{
         outline: none;
      }

   }

</style>
