<template>
  <div id="catch">
    <van-empty description="描述文字" :image="image">
      <van-button type="danger" class="bottom-button" @click="goto">{{
        buttonText
      }}</van-button>
    </van-empty>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import { stateArray } from "./index.js";
export default defineComponent({
  name: "catch",
  props: {},
  components: {},
  setup() {
    const router = useRouter();
    const route = useRoute();
    const message = JSON.parse(route.query.message);
    const state = stateArray[message.status];
    console.log(stateArray, message, state);
    const data = reactive({});
    function goto() {
      let active = state.active;
      if (typeof active == "number") {
        router.go(active);
      } else if (typeof active == "string") {
        router.push({ name: active });
      }
    }
    return {
      ...toRefs(data),
      goto,
      ...state,
    };
  },
});
</script>

<style scoped lang='scss'>
.bottom-button {
  width: 160px;
  height: 40px;
}
</style>