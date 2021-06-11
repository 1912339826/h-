<template>
  <div>
    <van-form ref="formaa" @submit="onSubmit">
      <van-field
        v-model="state.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" @click="formSubmit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import useHditableTable from "@/middleware/useHditableTable.js";
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    const formaa = ref(null);
    const { state, FormRefRepeaters, onSubmit } = useHditableTable();
    function formSubmit() {
      FormRefRepeaters(formaa);
    }
    return {
      state,
      formaa,
      formSubmit,
      onSubmit,
    };
  },
});
</script>

<style scoped lang=''>
</style>