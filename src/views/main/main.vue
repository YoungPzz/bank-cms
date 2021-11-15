<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside> <NavMenu /></el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <h2>欢迎来到银行业务管理系统</h2> 
          <user-info />
        </el-header>
        <el-main class="page-content">
          <div class="page-info"><router-view></router-view></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from "../../components/nav-menu/index";
import UserInfo from '../../components/user-info/user-info.vue'
import {ref} from 'vue'
export default {
  components: {
    NavMenu,
    UserInfo
  },
  setup() {
    const isCollaps = ref(false);
    const handleFoldChange = (isFlod) => {
      console.log(isFlod);
      isCollaps.value = isFlod;
    };

    return { handleFoldChange, isCollaps };
  },
};
</script>

<style>
.page-header {
  display: flex;
  justify-content: space-between;
}
.main {
  /* background-image: url('../../assets/images/1211.png'); */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.main-content,
.page {
  height: 100%;

}
.page-content {
  height: calc(100% - 48px);
}
.page-info {
  background-color: #fff;
  border-radius: 5px;
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
  text-align: center;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
