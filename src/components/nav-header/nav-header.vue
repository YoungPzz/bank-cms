<template>
  <div class="page-content">
    <el-tabs
      type="border-card"
      v-model="currentTab"
      @tab-click="showSearch()"
    >
      <template v-for="(item, index) in pageContentItem">
        <el-tab-pane :label="item.name" :name="index">
          <el-form :label-width="labelWidth">
            <el-row>
              <template
                v-if="index === 0"
                v-for="config in searchItem"
                :key="config.label"
              >
                <el-col v-bind="colLayout">
                  <el-form-item :label="config.label" :style="itemStyle">
                    <template
                      v-if="
                        config.type === 'input' || config.type === 'password'
                      "
                    >
                      <el-input
                        :placeholder="config.placeholder"
                        :show-password="config.type === 'password'"
                        v-model="formData[`${config.field}`]"
                      />
                    </template>
                    <template v-if="config.type === 'select'">
                      <el-select :placeholder="placeholder" style="width: 100%">
                        <el-option
                          v-for="option in config.options"
                          :key="option.value"
                          :value="option.value"
                          >{{ option.title }}</el-option
                        >
                      </el-select>
                    </template>
                    <template v-if="config.type === 'datepicker'">
                      <el-date-picker
                        v-bind="config.otherOptions"
                        style="width: 100%"
                      ></el-date-picker>
                    </template>
                  </el-form-item>
                </el-col>
              </template>
              <template
                v-if="index === 1"
                v-for="config in checkItem"
                :key="config.label"
              >
                <el-col v-bind="colLayout">
                  <el-form-item :label="config.label" :style="itemStyle">
                    <template
                      v-if="
                        config.type === 'input' || config.type === 'password'
                      "
                    >
                      <el-input
                        :placeholder="config.placeholder"
                        :show-password="config.type === 'password'"
                        v-model="formData[`${config.field}`]"
                      />
                    </template>
                    <template v-if="config.type === 'select'">
                      <el-select :placeholder="placeholder" style="width: 100%">
                        <el-option
                          v-for="option in config.options"
                          :key="option.value"
                          :value="option.value"
                          >{{ option.title }}</el-option
                        >
                      </el-select>
                    </template>
                    <template v-if="config.type === 'datepicker'">
                      <el-date-picker
                        v-bind="config.otherOptions"
                        style="width: 100%"
                      ></el-date-picker>
                    </template>
                  </el-form-item>
                </el-col>
              </template>
              <template
                v-if="index === 2"
                v-for="config in updateItem"
                :key="config.label"
              >
                <el-col v-bind="colLayout">
                  <el-form-item :label="config.label" :style="itemStyle">
                    <template
                      v-if="
                        config.type === 'input' || config.type === 'password'
                      "
                    >
                      <!-- v-model="updateData[`${config.field}`]" -->
                      <el-input
                        :placeholder="config.placeholder"
                        :show-password="config.type === 'password'"
                        v-model="formData[`${config.field}`]"
                      />
                    </template>
                    <template v-if="config.type === 'select'">
                      <el-select :placeholder="placeholder" style="width: 100%">
                        <el-option
                          v-for="option in config.options"
                          :key="option.value"
                          :value="option.value"
                          >{{ option.title }}</el-option
                        >
                      </el-select>
                    </template>
                    <template v-if="config.type === 'datepicker'">
                      <el-date-picker
                        v-bind="config.otherOptions"
                        style="width: 100%"
                      ></el-date-picker>
                    </template>
                  </el-form-item>
                </el-col>
              </template>
              <template
                v-if="index === 3"
                v-for="config in deleteItem"
                :key="config.label"
              >
                <el-col v-bind="colLayout">
                  <el-form-item :label="config.label" :style="itemStyle">
                    <template
                      v-if="
                        config.type === 'input' || config.type === 'password'
                      "
                    >
                      <el-input
                        :placeholder="config.placeholder"
                        :show-password="config.type === 'password'"
                        v-model="formData[`${config.field}`]"
                      />
                    </template>
                    <template v-if="config.type === 'select'">
                      <el-select :placeholder="placeholder" style="width: 100%">
                        <el-option
                          v-for="option in config.options"
                          :key="option.value"
                          :value="option.value"
                          >{{ option.title }}</el-option
                        >
                      </el-select>
                    </template>
                    <template v-if="config.type === 'datepicker'">
                      <el-date-picker
                        v-bind="config.otherOptions"
                        style="width: 100%"
                      ></el-date-picker>
                    </template>
                  </el-form-item>
                </el-col>
              </template>
            </el-row>
            <el-button type="primary" @click="commitAxios()" v-if="index === 0"
              >确定创建</el-button
            >
            <el-button type="primary" @click="searchAxios()" v-if="index === 1"
              >确定检索</el-button
            >
            <el-button type="primary" @click="updatetAxios()" v-if="index === 2"
              >确定更新</el-button
            >
            <el-button type="primary" @click="deleteAxios()" v-if="index === 3"
              >确定删除</el-button
            >
          </el-form>
        </el-tab-pane>
      </template>
    </el-tabs>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  props: {
    formData: {
      type: Object,
    },
    pageContentItem: {
      type: Array,
    },
    searchItem: {
      //prop的类型
      type: Array,
      default: () => [],
    },
    checkItem: {
      //prop的类型
      type: Array,
      default: () => [],
    },
    updateItem: {
      //prop的类型
      type: Array,
      default: () => [],
    },
    deleteItem: {
      //prop的类型
      type: Array,
      default: () => [],
    },
    labelWidth: {
      type: String,
      defalut: "100px",
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: "10px 40px" }),
    },
    colLayout: {
      //响应式
      type: Object,
      default: () => ({
        //响应式，设置为prop所以可以由外界决定
        xl: 8,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24,
      }),
    },
  },
  setup(props, context) {
    const commitAxios = () => {
      context.emit("getData");
    };
    const searchAxios = () => {
      context.emit("searchAxios");
    };
    const updatetAxios = () => {
      context.emit("updatetAxios");
    };
    const deleteAxios = () => {
      context.emit("deleteAxios");
    };

    //触发yptable
    let currentTab=ref(0)
    const SearchIndex = 1;
    const showSearch=()=>{
    if(currentTab.value === SearchIndex){
      context.emit('ShowYpTable')
    }
    else{
      context.emit('DisplayYpTable')
    }
    }
    return { commitAxios,searchAxios,updatetAxios,deleteAxios,showSearch,currentTab };
  },
};
</script>

<style></style>
