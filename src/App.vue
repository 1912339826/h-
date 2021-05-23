<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { reactive, onMounted, defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const data = reactive({});
    onMounted(() => {});
    return {
      data,
    };
  },
});
</script>
<style>
</style>