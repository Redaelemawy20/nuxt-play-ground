<template>
  <div>
    <h1>This is - {{ getName() }}</h1>
  </div>
</template>

<script setup>
/** invalid code throw errors */
// async function invalidUsage() {
//   const response = await useAsyncData(
//     () => new Promise((resolve) => setTimeout(resolve('hamo'), 6000))
//   ); // Delayed async call
//   useHead({ title: 'hakko' });
// }
// await invalidUsage(); // not working error

/** working code */
async function invalidUsage() {
  const response = await useAsyncData(
    () => new Promise((resolve) => setTimeout(resolve('hamo'), 6000))
  ); // Delayed async call
  useHead({ title: response.data });
}
invalidUsage(); // will work without errors
</script>
