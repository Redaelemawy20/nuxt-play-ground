<template>
  <div>
    <h1>This is - {{ getName() }}</h1>
    <p>api is - {{ api }}</p>
  </div>
</template>

<script setup>
import { api, getName } from '#imports';
console.log(api);
</script>
