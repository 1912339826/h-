<template>
  <div style="back">
    <router-view></router-view>
  </div>
</template>

<script>
import { reactive, onMounted, defineComponent } from "vue";
import {
  formList,
  pattern,
  validator,
  validatorMessage,
  asyncValidator,
  submitForm,
} from "./index";
export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const data = reactive({});
    onMounted(() => {});
    const state = reactive({
      formList,
    });

    const onFailed = (errorInfo) => {
      console.log("failed", errorInfo);
    };

    const onSubmit = (values) => {
      console.log("submit", values, submitForm);
      Object;
    };
    return {
      data,
      state,
      onSubmit,
      onFailed,
      pattern,
      validator,
      asyncValidator,
      validatorMessage,
    };
  },
});
</script>
<style>
</style>