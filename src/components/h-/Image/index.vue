<template>
  <div>
    <van-image
      width="100%"
      height="100%"
      :src="src"
      :fit="fit"
      :alt="alt"
      :radius="radius"
      :round="round"
      :lazy-load="lazyLoad"
      :show-error="showError"
      :show-loading="showLoading"
      :error-icon="errorIcon"
      :loading-icon="loadingIcon"
      :icon-size="iconSize"
      :icon-prefix="iconPrefix"
    />
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "h-Image",
  props: {
    src: {
      //图片链接
      type: String,
      default: "",
    },
    fit: {
      //图片填充模式
      type: String,
      default: "fill",
    },
    alt: {
      //替代文本
      type: String,
      default: "",
    },
    radius: {
      //圆角大小，默认单位为 px
      type: String || Number,
      default() {
        return "";
      },
    },
    round: {
      //是否显示为圆形(radius值非0)
      type: Boolean,
      default: false,
    },
    lazyLoad: {
      // lazy-load 是否开启图片懒加载，须配合 Lazyload 组件使用
      type: Boolean,
      default: true,
    },
    showError: {
      // 是否展示图片加载失败提示
      type: Boolean,
      default: true,
    },
    showLoading: {
      // 是否展示图片加载中提示
      type: Boolean,
      default: true,
    },
    errorIcon: {
      // 失败时提示的图标名称或图片链接
      type: String,
      default: "photo-fail",
    },
    loadingIcon: {
      // 	加载时提示的图标名称或图片链接
      type: String,
      default: "photo",
    },
    iconSize: {
      //加载图标和失败图标的大小
      type: String || Number,
      default() {
        return "32px";
      },
    },
    iconPrefix: {
      // 图标类名前缀，同 Icon 组件的 class-prefix 属性
      type: String,
      default: "van-icon",
    },
  },
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