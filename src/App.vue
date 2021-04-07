<template>
  <Button label="Primary" @click="changeData" />
  <h1>{{ data }}</h1>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const data = ref("data");
    const changeData = (): void => {
      data.value = Math.random().toString();
    };
    const computedData = computed((): string => {
      return data.value + "fuck";
    });
    watch(data, (val): void => {
      console.log(val, "computed - ", computedData.value);
    });

    return { data, changeData };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
