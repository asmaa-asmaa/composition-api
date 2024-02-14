import { ref } from "vue";
const counterFunction = () => {
  const counter = ref(0);
  const increase = () => {
    counter.value++;
  };
  const decrease = () => {
    if (counter.value > 0) {
      counter.value--;
    }
  };

  return { counter, increase, decrease };
};

export default counterFunction;
