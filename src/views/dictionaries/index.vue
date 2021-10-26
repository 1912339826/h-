<template>
  <div></div>
</template>

<script>
import { defineComponent, reactive, toRefs, getCurrentInstance } from "vue";
import { UseTheDictionaryExtract } from "@/middleware/TheDictionaryExtract";
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    const { appContext } = getCurrentInstance();
    const { HandlingOfSubmissions, listen_picker_columns_array } =
      UseTheDictionaryExtract();
    //appContext.config.globalProperties
    const data = reactive({});
    console.log(
      HandlingOfSubmissions(
        { basicTechnology: 1, expressiveness: 3, intonation: 2, rhythm: 0 },
        listen_picker_columns_array.value,
        "id",
        "text"
      )
    );
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang=''>
</style>