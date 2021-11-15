<template>
  <div class="bussiness">
    <!-- <el-button type="primary" @click="getIMG"></el-button> -->
     <img :src="'data:image/png;base64,'+data2" alt="">
     <img :src="'data:image/png;base64,'+data1" alt="">
  </div>
</template>

<script>
import axios from "axios";
import {ref} from 'vue'
export default {
  setup() {
     
    const getIMG = async function (path,name) {
     var data;
      await axios.get(path, {
        params:{statistics_type: name}
      }).then((res)=>{
        data = res.data.data.amount_fig
      });
      return data
    
    };
    let data2 = ref(null)
    getIMG("/statistics","储蓄").then((res)=>{
      data2.value = res
    })
    let data1 = ref(null)
    getIMG("/statistics","贷款").then((res)=>{
      data1.value = res
    })
    return {
      getIMG,
      data2,
      data1
    };
  },
};
</script>

<style>

</style>
