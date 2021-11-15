<template>
  <div class="pay">
    <!-- // 支行管理 -->
    <nav-header
      :pageContentItem="pageContentItem"
      v-bind="PayqueryInfoConfig"
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
      v-bind="PayqueryInfoConfig"
      :listData="listData"
    />
  </div>
</template>

<script>
import NavHeader from "../../../../components/nav-header/nav-header.vue";
import { ref, defineComponent } from "vue";
import { PayqueryInfoConfig } from "./payConfig";
import YpTable from "../../../../components/yp-table/yp-table.vue";
import {
  creatNew,
  searchItem,
  DeleteAxios,
  UpdateAxios,
} from "../../../../service/index";
export default defineComponent({
  components: {
    "nav-header": NavHeader,
    YpTable,
  },
  setup() {
    const pageContentItem = ref([
      {
        name: "创建支行",
      },
      {
        name: "检索支行",
      },
      {
        name: "更新支行",
      },
      {
        name: "删除支行",
      },
    ]);

    const formItems = PayqueryInfoConfig.searchItem;
    const formOriginData = {};
    for (const item of formItems) {
      formOriginData[item.field] = "";
    }

    const formData = ref(formOriginData);

    //创建支行axios
    const getData = () => {
      creatNew("/branch/create", formOriginData);
    };
    const deleteAxios = () => {
      DeleteAxios("/branch/delete", formOriginData);
      //获取listData
    };
    const updatetAxios = () => {
      UpdateAxios("/branch/update", formOriginData);
      //获取listData
    };
    let listData = ref([]);
    const searchAxios = () => {
      searchItem("/branch/retrieve").then((res) => {
        //由于searchItem返回的是Promise对象，所以要用.then
        listData.value = res.Branch;
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
      PayqueryInfoConfig,
      formData,
      getData,
      listData,
      deleteAxios,
      updatetAxios,
      searchAxios,
      ShowYpTable,
      DisplayYpTable,
      isShowYpTable,
    };
  },
});
</script>

<style></style>
