<template>
  <div class="account">
    <nav-header
      :pageContentItem="pageContentItem"
      v-bind="AccountqueryInfoConfig"
      :formData="formData"
      @getData="getData()"
      @deleteAxios="deleteAxios()"
      @updatetAxios="updatetAxios()"
      @searchAxios="searchAxios()"
      @ShowYpTable="ShowYpTable()"
      @DisplayYpTable="DisplayYpTable()"
    />
  </div>
  <yp-table
    v-if="isShowYpTable"
    v-bind="AccountqueryInfoConfig"
    :listData="listData"
  />
</template>

<script>
import NavHeader from "../../../../components/nav-header/nav-header.vue";
import { ref, defineComponent } from "vue";
import { AccountqueryInfoConfig } from "./accountConfig";
import { pageContentItem } from "./pageContentItem";
import {creatNew, DeleteAxios, UpdateAxios} from "../../../../service/index";
import YpTable from "../../../../components/yp-table/yp-table.vue";
import { searchItem } from "../../../../service/index";
export default defineComponent({
  components: {
    "nav-header": NavHeader,
    YpTable,
  },
  setup() {
    const formItems = AccountqueryInfoConfig.searchItem;
    const formOriginData = {};
    for (const item of formItems) {
      formOriginData[item.field] = "";
    }

    const formData = ref(formOriginData);

    //创建
    const getData = () => {
      creatNew(`/check_account/create`, formOriginData);
    };
     const deleteAxios = () => {
      DeleteAxios("/account/delete", formOriginData);
      //获取listData
    };
    const updatetAxios = () => {
      UpdateAxios("/check_account/update", formOriginData);
      //获取listData
    };
    let listData = ref([]);
    const searchAxios = () => {
      searchItem("/account/retrieve").then((res) => {
        //由于searchItem返回的是Promise对象，所以要用.then
        listData.value = res.Account;
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
    return { pageContentItem, AccountqueryInfoConfig, formData, getData,
    deleteAxios,updatetAxios,searchAxios,ShowYpTable,DisplayYpTable,isShowYpTable,listData };
  },
});
</script>

<style></style>
