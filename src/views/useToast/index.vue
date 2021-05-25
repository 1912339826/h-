<template>
  <div></div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import useToast from "@/middleware/useToast.js";
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
      
    let { setToast, clearToast } = useToast();
    const a = setToast(111);
    a;
    console.log()
    setTimeout(() => {
      clearToast();
    }, 5000);
    const data = reactive({});
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang=''>
</style>