<template>
  <h1>watchers</h1>
</template>

<script lang="ts">
const obj = reactive({ count: 0 });

watch(obj, (newValue, oldValue) => {
  console.log('New Value:', newValue.count);
  console.log('Old Value:', oldValue.count);
});

obj.count++;
</script>
