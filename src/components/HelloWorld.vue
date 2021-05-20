<template>
  <div class="hello">
    <van-form @submit="onSubmit">
      <van-field
        v-model="state.username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="text"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        readonly
        right-icon="arrow"
        @click="field"
        v-model="state.change"
        type="text"
        name="change"
        label="选择器"
        placeholder="选择器"
        :rules="[{ required: true, message: '请选择' }]"
      />
      <van-field
        v-show="false"
        readonly
        right-icon="arrow"
        @click="field"
        v-model="state.changeKey"
        type="text"
        name="changeKey"
        label="选择器"
        placeholder="选择器"
        :rules="[{ required: true, message: '请选择' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <van-popup :show="show" position="bottom">
      <van-picker
        title="标题"
        :columns="columns"
        @cancel="onCancel"
        @confirm="confirm"
      />
    </van-popup>
  </div>
</template>

<script>
import { reactive, defineComponent, ref } from "vue";
// import { Toast } from "vant";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const show = ref(false);
    const state = reactive({
      username: "",
      password: "",
      change: "",
      changeKey: "",
    });
    const onSubmit = (values) => {
      console.log("submit", values);
    };

    const field = () => {
      // console.log("11");
      show.value = true;
    };

    const columns = [
      { text: "厦门", id: 0 },
      { text: "厦门1", id: 1 },
      { text: "厦门2", id: 2 },
      { text: "厦门3", id: 3 },
      { text: "厦门4", id: 4 },
      { text: "厦门5", id: 5 },
      { text: "厦门6", id: 6 },
    ];

    const confirm = (e) => {
      console.log(e);
      state.change = e.text;
      state.changeKey = e.id;
      show.value = false;
    };

    const onCancel = () => {
      show.value = false;
    };

    return {
      state,
      onSubmit,
      field,
      columns,
      onCancel,
      show,
      confirm,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
