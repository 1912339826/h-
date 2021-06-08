<template>
  <div id="calendar">
    <van-calendar
      v-model:show="show"
      ref="calendar"
      :show-confirm="true"
      @confirm="confirm"
      @select="select"
      @unselect="unselect"
      :type="type"
    />
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs, onMounted } from "vue";
import util from "@/middleware/useUtil";
export default defineComponent({
  name: "Calendar",
  props: {},
  components: {},
  setup() {
    const type = ref("single");
    const calendar = ref(null);
    const data = reactive({});
    const show = ref(true);
    const selectData = reactive({ selectList: [] });
    const useUtil = util();
    console.log(useUtil);
    function confirm(params) {
      console.log(params);
    }
    function select(params) {
      if (type.value != "multiple") {
        return;
      }
      // 将date转化为时间戳,并存放在selectData.selectList中.
      let arr = [];
      for (let index = 0; index < params.length; index++) {
        const element = params[index];
        arr.push(element.getTime());
      }
      selectData.selectList = arr;
    }
    function unselect(params) {
      // 当日历组件的 type 为 multiple 时，取消选中日期时触发
      // 删除对应的时间戳
      useUtil.util.array.remove(selectData.selectList, params.getTime());
    }
    const formatter = (type, val) => {
      if (type === "year") {
        return `${val}年`;
      }
      if (type === "month") {
        return `${val}月`;
      }
      return val;
    };
    onMounted(() => {
      //   document.getElementsByClassName("van-calendar__header-subtitle").click(()=>{
      //       console.log(1)
      //   });
      document.getElementsByClassName("van-calendar__header-subtitle")[0].click(function () {
        // e.preventDefault();
         console.log(1)
      });
    // console.log(document.getElementsByClassName("van-calendar__header-subtitle"))
    });
    return {
      ...toRefs(data),
      show,
      calendar,
      select,
      unselect,
      confirm,
      type,
      formatter,
    };
  },
});
</script>

<style scoped lang='scss' src="./index.scss">
</style>