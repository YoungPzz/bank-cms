<template>
  <div>
    <div class="user-info">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <!-- 用户信息 <span class="el-icon-arrow-down"> </span> -->
          <el-avatar size="small" :src="circleUrl"></el-avatar>
          <span class="name">{{ name }}</span>
        </span>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="exit()">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ArrowDown } from "@element-plus/icons";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import LocalCache from "../../utils/cache";

export default defineComponent({
  setup() {
    const store = useStore();
    const name = LocalCache.getCache("username");
    const router = useRouter();
    const circleUrl =
      "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";

    const exit = () => {
      LocalCache.deleteCache("username");
      LocalCache.deleteCache("password");
      router.push('/login')
    };
    return { ArrowDown, circleUrl, name,exit };
  },
});
</script>

<style scoped>
.el-dropdown-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.name {
  margin-left: 10px;
  font-size: 15px;
}
</style>
