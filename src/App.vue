<template>
  <div id="index">
    <router-view></router-view>
  </div>
</template>

<script>
import { reactive, onMounted, defineComponent, watch, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const active = ref(0);
    const router = useRouter();
    const route = useRoute();
    watch(
      () => route,
      (news) => {
        console.log(news);
      }
    );

    watch(
      () => active,
      (news) => {
        console.log(news);
      }
    );

    const data = reactive({});
    onMounted(() => {});
    return {
      data,
      active,
      router,
    };
  },
});
</script>
<style>
</style>