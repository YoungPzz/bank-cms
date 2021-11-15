<template>
  <div class="employment">
    <nav-header
      :pageContentItem="pageContentItem"
      v-bind="queryInfoConfig"
      :formData="formData"
      @getData="getData()"
      @deleteAxios="deleteAxios()"
      @updatetAxios="updatetAxios()"
      @searchAxios="searchAxios()"
      @ShowYpTable="ShowYpTable()"
      @DisplayYpTable="DisplayYpTable()"
    />
    <yp-table
      v-if="isShowYpTable"
      v-bind="queryInfoConfig"
      :listData="listData"
    />
  </div>
</template>

<script>
import NavHeader from "../../../../components/nav-header/nav-header.vue";
import { ref, defineComponent } from "vue";
import { queryInfoConfig } from "./employmentCongfig";
import { creatNew, DeleteAxios, UpdateAxios } from "../../../../service/index";
import YpTable from "../../../../components/yp-table/yp-table.vue";
import { searchItem } from "../../../../service/index";
export default defineComponent({
  components: {
    "nav-header": NavHeader,
    YpTable,
  },
  setup() {
    const pageContentItem = ref([
      {
        name: "创建员工",
      },
      {
        name: "检索员工",
      },
      {
        name: "更新员工",
      },
      {
        name: "删除员工",
      },
    ]);
    const formItems = queryInfoConfig.searchItem;
    const formOriginData = {};
    for (const item of formItems) {
      formOriginData[item.field] = "";
    }
    const formData = ref(formOriginData);
    const getData = () => {
      creatNew("/staff/create", formOriginData);
      //获取listData
    };
    const deleteAxios = () => {
      DeleteAxios("/staff/delete", formOriginData);
      //获取listData
    };
    const updatetAxios = () => {
      UpdateAxios("/staff/update", formOriginData);
      //获取listData
    };
    let listData = ref([]);
    const searchAxios = () => {
      searchItem("/staff/retrieve").then((res) => {
        //由于searchItem返回的是Promise对象，所以要用.then
        listData.value = res.Staff;
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
      queryInfoConfig,
      formData,
      getData,
      deleteAxios,
      updatetAxios,
      ShowYpTable,
      DisplayYpTable,
      searchAxios,
      listData,
      isShowYpTable,
    };
  },
});
</script>

<style></style>
