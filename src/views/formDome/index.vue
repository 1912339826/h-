<template>
  <div id="formDome">
    <van-form @submit="onSubmitForm" ref="FormRef">
      <van-cell-group inset>
        <template v-for="(item, key, index) in formObjLists" :key="index">
          <van-field
            @click-input="clickInputForm(key, item)"
            v-model="item.model.Display"
            :name="item.name"
            :type="item.type"
            :label="item.label"
            :placeholder="item.placeholder"
            @update:model-value="FuncUpdateInputForm"
            :autocomplete="item.autocomplete ? item.autocomplete : 'off'"
            :rules="item.rules"
          />
        </template>
        <!-- v-if="item.initializedHidden" -->
        <!-- :rules="item.rules" -->
        <!-- :readonly="item.readonly" -->
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { objList, configEditableForm_data } from "./dome.js";
import { useHEditableForm } from "@/middleware/useForm/useHEditableForm.js";
import {
  singleReq,
  // multipleReq//暂时null
} from "@/utils/request.js";
import api from "@/api/index.js";
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    const {
      onSubmitForm,
      clickInputForm,
      FuncUpdateInputForm,
      FormRef,
      formObjLists,
      configEditableForm,
    } = useHEditableForm();
    formObjLists.value = objList; //接收./index.js中的项
    configEditableForm.beAssociatedWith =
      configEditableForm_data.beAssociatedWith;
    async function signGetCity() {
      let res = await singleReq(api["signGetCity"]);
      console.log(res);
      // console.log(api["signGetCity"],singleReq())
    }

    console.log(configEditableForm);

    let a = false;

    if (a) {
      signGetCity();
    }

    return {
      onSubmitForm,
      clickInputForm,
      FuncUpdateInputForm,
      FormRef,
      formObjLists,
    };
  },
});
</script>

<style scoped lang=''>
</style>