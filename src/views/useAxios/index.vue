<template>
  <div></div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
// import useAxios from "@/middleware/useAxios.js";
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    // const { useAxiosAPISingle } = useAxios();

    // async function posterPathList() {
    //   let res = await useAxiosAPISingle("posterPathList");
    //   console.log(res);
    // }
    // posterPathList();

    const data = reactive({
      con: 0,
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang="less"></style>
