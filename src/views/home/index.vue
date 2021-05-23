<template>
  <div>
    <!-- <h-button></h-button> -->
    <p class="aa">111s</p>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import useAxios from "@/middleware/useAxios";
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    const useAxios_ = useAxios;
    const data = reactive({});
    return {
      ...toRefs(data),
      useAxios_,
    };
  },
});
</script>

<style scoped>
.aa {
  width: 375px;
  height: 47px;
  background: #ac3232;
  opacity: 0.49;
  font-size: 11px;
}
</style>