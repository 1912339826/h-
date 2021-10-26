<template>
  <div>
    <button class="btn btn-green">11</button>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props) {
    const { appContext } = getCurrentInstance();
    //appContext.config.globalProperties
    const router = useRouter();
    const route = useRoute();
    const data = reactive({});
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='less'>
.btn {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md;
}
.btn-green {
  @apply text-white bg-green-500 hover:bg-green-700;
}
</style>