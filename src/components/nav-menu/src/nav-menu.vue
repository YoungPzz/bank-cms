<template>
  <div class="nav-menu">
    <div class="logo">
      <!-- <img class="img" src="~@/assets/img/logo.svg" alt="logo" /> -->
      <span class="title">银行支付管理系统</span>
    </div>
    <el-menu
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="(item, ind) in userMenus">
        <el-menu-item
          :index="ind"
          class="elMENUI"
          @click="toCurrentRoute(ind)"
        >
          <strong>{{ item.name }}</strong>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
// import { useRouter, useRoute } from 'vue-router'
// vuex - typescript  => pinia
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const userMenus = computed(() => store.state.userMenus);
    const toCurrentRoute = (ind) => {
      switch (ind) {
        case 0:
          router.push("/main/pay");
          break;
        case 1:
          router.push("/main/employment");
          break;
        case 2:
          router.push("/main/customer");
          break;
        case 3:
          router.push("/main/account");
          break;
        case 4:
          router.push("/main/loans");
          break;
        case 5:
          router.push("/main/bussiness");
          break;
      }
    };
    return {
      userMenus,
      toCurrentRoute,
    };
  },
};
</script>

<style>
.elMENUI {
  font-size: 18px;
}
.nav-menu {
  height: 100%;
  background-color: #001529;
}
.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.img {
  height: 100%;
  margin: 0 10px;
}

.title {
  font-size: 14px;
  font-weight: 700;
  color: white;
}

.el-menu {
  border-right: none;
}

.el-submenu {
  background-color: #001529 !important;
  /* // 二级菜单 ( 默认背景 ) */
}
.el-menu-item {
  padding-left: 50px !important;
  background-color: #0c2135 !important;
}

::v-deep .el-submenu__title {
  background-color: #001529 !important;
}

/* // hover 高亮 */
.el-menu-item:hover {
  color: #fff !important;
}

.el-menu-item.is-active {
  color: #fff !important;
  background-color: #0a60bd !important;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
