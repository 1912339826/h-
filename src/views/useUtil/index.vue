<template>
  <div id="useUtil">
    <section class="box">
      <section
        v-for="(item, index) in UseUtilFindTheCurrentDictionary"
        :key="index"
        :ref="index"
        class="UseUtilFindTheCurrentDictionary"
      >
        <van-sticky :container="name(index)">
          <nav class="title">
            <span>{{ index }} ({{ item.todo }})</span><span></span>
          </nav>
        </van-sticky>

        <div class="listCell">
          <template v-for="(items, indexs) in item.Function" :key="indexs">
            <van-cell :label="items.todo" :title="indexs" :value="index" />
          </template>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import {useUtil} from "@/middleware/useUtil";
import { Toast } from "vant";
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    const useUtils = useUtil();
    const router = useRouter();
    const route = useRoute();
    const array = ref(null);
    const dataType = ref(null);
    const element = ref(null);
    const environmentalType = ref(null);
    const number = ref(null);
    const other = ref(null);
    const string = ref(null);
    const verify = ref(null);
    console.log(router, route);
    // 32032120100126722X  32108820100327364X
    // console.log(useUtils.util.verify.isCardID('32032120100126722X'))
    const data = reactive({});
    function name() {}
    const value = ref("");
    function onSearch(val) {
      Toast(val);

    }
    const onCancel = () => Toast("取消");
    return {
      ...toRefs(data),
      ...useUtils,
      array,
      dataType,
      element,
      environmentalType,
      number,
      other,
      string,
      verify,
      name,
      value,
      onSearch,
      onCancel,
    };
  },
});
</script>

<style scoped lang='' src="./index.scss"></style>
