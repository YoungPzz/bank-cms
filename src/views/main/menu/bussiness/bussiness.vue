<template>
  <div class="bussiness">
    <el-button type="primary" @click="getIMG">获取数据</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  setup() {
    const getIMG = async function () {
      let data;
      await axios.get("/statistics", {
        statistics_type: "loan",
      });
      
    };

    return {
      getIMG,
    };
  },
};
</script>

<style></style>
