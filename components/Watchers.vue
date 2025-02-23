<template>
  <h1>watchers</h1>
</template>

<script lang="ts">
const obj = reactive({ count: 0 });

watch(obj, (newValue, oldValue) => {
  console.log('New Value:', newValue.count);
  console.log('Old Value:', oldValue.count);
});
watch(
  () => obj.count,
  (newValue, oldValue) => {
    console.log('watching count value', newValue, oldValue);
  }
);
obj.count++;

const state = reactive({
  someObject: { count: 0 },
});

watch(state.someObject, (newValue, oldValue) => {
  console.log(
    'Triggered because a property inside someObject changed!',
    newValue.count,
    oldValue.count
  );
});
state.someObject.count++; // ✅ This triggers the watch callback

watch(
  () => state.someObject,
  (newValue, oldValue) => {
    console.log(
      'Triggered only when is object is replaced',
      newValue.count,
      oldValue.count
    );
  }
);
state.someObject = { count: 6 };

watch(
  () => state.someObject,
  (newValue, oldValue) => {
    console.log('watching deeply ', newValue.count, oldValue.count);
  },
  { deep: true }
);
state.someObject.count += 20;
</script>
