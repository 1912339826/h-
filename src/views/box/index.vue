<template>
  <div id="vueBox">
    <!-- <div class="sidebar box-shadow-0-8-12-ebedf0 scrollbar">
      <template v-for="(item, index) in list" :key="index">
        <nav v-if="!item.name" class="F-W-600-Color-455a64 line-height-28 son">
          {{ item.meta.title }}
        </nav>
        <template v-for="(items, index) in item.children" :key="index">
          <div
            class="line-height-20 hover-color-b700ff son"
            :id="items.name == route.name ? 'sidebarTabActive' : ''"
          >
            <span class="F-W-Color-455a64" @click="togo(items)">{{
              items.name
            }}</span>
          </div>
        </template>
      </template>
    </div> -->
    <div class="router-view-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useRouterOptionsRoutesLists } from "@/middleware/useRouterOptionsRoutesLists.js";
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    const { RouterOptionsRoutesListsRef } = useRouterOptionsRoutesLists();
    console.log(RouterOptionsRoutesListsRef.value, "------------");
    const router = useRouter();
    const route = useRoute();
    const data = reactive({
      list: RouterOptionsRoutesListsRef.value,
    });
    function togo(params) {
      router.push({ name: params.name });
    }
    return {
      ...toRefs(data),
      togo,
      route,
    };
  },
});
</script>

<style scoped lang='scss'>
#vueBox {
  display: flex;
  .sidebar {
    width: 300px;
    height: 100vh;
    position: fixed;
    left: 0;
    .line-height-28 {
      line-height: 28px;
      padding: 8px 0 8px 24px;
    }

    .line-height-20 {
      span {
        display: block;
        line-height: 20px;
        margin: 8px 0;
        padding: 8px 0 8px 24px;
      }
    }

    .hover-color-b700ff {
      &:hover {
        span {
          color: #b700ff;
        }

        cursor: pointer;
      }
    }

    #sidebarTabActive {
      border-radius: 999px;
      font-weight: 600;
      background-color: #fdebff;

      span {
        color: #b700ff;
      }
      &:hover {
        span {
          color: #b700ff;
        }

        cursor: pointer;
      }
    }

    .son {
      width: calc(300px - 10px); //父元素-滚动条宽度
    }
  }

  .router-view-content {
    // margin-left: 300px;
  }
}
</style>