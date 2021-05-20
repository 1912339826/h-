<template>
  <div>
    <van-button type="primary" text="1111" />
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    const data = reactive({});
    return {
      data,
    };
  },
});
</script>

<style scoped lang=''>
</style>