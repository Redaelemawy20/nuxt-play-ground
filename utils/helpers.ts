import { useRoute } from 'vue-router';

export const getName = () => 'reda king';
export const api = 'xyz.com/api';

export const logPath = () => {
  const route = useRoute();
  console.log(route.path);
};

export const failLogPath = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async work
  const route = useRoute(); // will fail
  console.log('Route path is:', route.path); // route not defined
};
