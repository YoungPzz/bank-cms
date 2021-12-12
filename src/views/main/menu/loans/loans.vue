<template>
  <div class="loans">
    <nav-header
      :pageContentItem="pageContentItem"
      v-bind="LoansqueryInfoConfig"
      :formData="formData"
      @getData="getData()"
      @deleteAxios="deleteAxios()"
      @updatetAxios="updatetAxios()"
      @searchAxios="searchAxios()"
      @createAxios="createAxios()"
      @ShowYpTable="ShowYpTable()"
      @DisplayYpTable="DisplayYpTable()"
    />
    <yp-table
      v-if="isShowYpTable"
      v-bind="LoansqueryInfoConfig"
      :listData="listData"
    />
  </div>
</template>

<script>
import NavHeader from "../../../../components/nav-header/nav-header.vue";
import { ref, defineComponent } from "vue";
import { LoansqueryInfoConfig } from "./loansConfig";
import {
  creatNew,
  searchItem,
  DeleteAxios,
  UpdateAxios,
} from "../../../../service/index";
import YpTable from "../../../../components/yp-table/yp-table.vue";
export default defineComponent({
  components: {
    "nav-header": NavHeader,
    YpTable,
  },
  setup() {
    const pageContentItem = ref([
      {
        name: "创建贷款",
      },
      {
        name: "检索贷款",
      },
      {
        name: "创建贷款支付",
      },
      {
        name: "删除贷款",
      },
    ]);
    const formItems = LoansqueryInfoConfig.searchItem;
    const formOriginData = {};
    for (const item of formItems) {
      formOriginData[item.field] = "";
    }
    const formData = ref(formOriginData);

    const getData = () => {
      creatNew("/loan/create", formOriginData);
    };
    const deleteAxios = () => {
      DeleteAxios("/loan/delete", formOriginData);
      //获取listData
    };
    const updatetAxios = () => {
      UpdateAxios("/loan/update", formOriginData);
      //获取listData
    };
    const createAxios = ()=>{
      UpdateAxios('/payment/create',formOriginData)
    }
    let listData = ref([]);
    const searchAxios = () => {
      searchItem("/loan/retrieve").then((res) => {
        //由于searchItem返回的是Promise对象，所以要用.then
        listData.value = res.Loan;
        console.log("15", listData.value);
      });
    };

    //  await searchItem("/staff/retrieve")
    const isShowYpTable = ref(false);
    const ShowYpTable = () => {
      isShowYpTable.value = true;
    };
    const DisplayYpTable = () => {
      isShowYpTable.value = false;
    };
    return {
      pageContentItem,
      LoansqueryInfoConfig,
      formData,
      getData,
      listData,
      deleteAxios,
      updatetAxios,
      searchAxios,
      ShowYpTable,
      createAxios,
      DisplayYpTable,
      isShowYpTable,
    };
  },
});
</script>

<style></style>
