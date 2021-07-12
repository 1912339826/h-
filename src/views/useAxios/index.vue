<template>
  <div id="useAxios">

  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
// import { useAxios } from "@/middleware/useAxios.js";
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    // const { useAxiosAPISingle } = useAxios();
    // useAxiosAPISingle("YmInfo");
    const data = reactive({});
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang="less">

</style>
