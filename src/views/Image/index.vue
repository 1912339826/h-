<template>
  <div>
      <h-Image :round="true" :src="'https://img.yzcdn.cn/vant/cat.jpeg'"/>
  </div>
</template>

<script>
// (记:)行内样式px单位的转换 px=>vw px=>rem...
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