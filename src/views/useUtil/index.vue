<template>
  <div></div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import util from "@/middleware/useUtil";
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    const router = useRouter();
    const route = useRoute();
    console.log(router, route);
    const data = reactive({});
    console.log(util());
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang=''>
</style>