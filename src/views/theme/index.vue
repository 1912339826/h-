<template>
  <div>
    <van-tag type="primary">标签</van-tag>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    const data = reactive({});
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang=''>
</style>