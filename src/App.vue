<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { reactive, onMounted, defineComponent } from "vue";
import useAxios from "./middleware/useAxios";
export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const data = reactive({});
    const { useAxiosAPISingle } = useAxios();
    useAxiosAPISingle("YmInfo")
    onMounted(() => {});
    return {
      data,
    };
  },
});
</script>
<style>
</style>