<template>
  <div class="account">
    <nav-header
      :pageContentItem="pageContentItem"
      v-bind="CutomerqueryInfoConfig"
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
      v-bind="CutomerqueryInfoConfig"
      :listData="listData"
    />
  </div>
</template>

<script>
import NavHeader from "../../../../components/nav-header/nav-header.vue";
import { ref, defineComponent } from "vue";
import { CutomerqueryInfoConfig } from "./contactsConfig";
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
        name: "创建联系人",
      },
      {
        name: "检索联系人",
      },
      {
        name: "更新联系人",
      },
      {
        name: "删除联系人",
      },
    ]);
    const formItems = CutomerqueryInfoConfig.searchItem;
    const formOriginData = {};
    for (const item of formItems) {
      formOriginData[item.field] = "";
    }

    const formData = ref(formOriginData);

    //axios
    const getData = () => {
      creatNew("/contacts/create", formOriginData);
    };
    const deleteAxios = () => {
      DeleteAxios("/contacts/retrieve", formOriginData);
      //获取listData
    };
    const updatetAxios = () => {
      UpdateAxios("/contacts/update", formOriginData);
      //获取listData
    };
    let listData = ref([]);
    const searchAxios = () => {
      searchItem("/contacts/retrieve").then((res) => {
        //由于searchItem返回的是Promise对象，所以要用.then
        console.log(res)
        listData.value = res.Contacts;
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
      CutomerqueryInfoConfig,
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
