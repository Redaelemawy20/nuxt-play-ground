<template>
  <div>
    <Header></Header>
    <p>This our home content</p>
    <UiButtonsMainBtn>click here</UiButtonsMainBtn>
  </div>
</template>
<script setup lang="ts">
const log = logPath(); // work
// const fail = failLogPath(); // fail
/*
// this will work normaly 
await new Promise((resolve) => setTimeout(resolve, 1000));
const route = useRoute();
console.log(route.path);
*/
</script>
