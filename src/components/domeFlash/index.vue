<template>
  <div id="flashAnimate_wrap">
    <div id="scrollContainer">
      <div id="scrollContent">
        <transition name="van-fade" v-if="list.length != 0">
          <div
            v-show="DataLonelyFlickerAnimated.visible"
            class="list van-ellipsis"
            v-if="!!CurrentDataLonelyFlickerAnimated.content.xuanyan_user_name"
          >
            用户{{
              CurrentDataLonelyFlickerAnimated.content.xuanyan_user_name
            }}参加了接力
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import useLonelyFlickerAnimated from "@/middleware/useLonelyFlickerAnimated";

export default defineComponent({
  name: "flashAnimate_wrap",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    visible: {
      type: Boolean,
      default: true,
    },
  },
  components: {},
  setup(props) {
    const {
      DataLonelyFlickerAnimated,
      LonelyFlickerAnimated,
      CurrentDataLonelyFlickerAnimated,
      IntermediateRelayLonelyFlickerAnimated,
    } = useLonelyFlickerAnimated();
    function autoCarousel() {
      IntermediateRelayLonelyFlickerAnimated(props.list);
      LonelyFlickerAnimated();
    }
    return {
      autoCarousel,
      DataLonelyFlickerAnimated,
      CurrentDataLonelyFlickerAnimated,
    };
  },
});
</script>

<style scoped lang='' src="./index.scss">
</style>