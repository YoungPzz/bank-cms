export  const PayqueryInfoConfig = {
    labelWidth: "120px",
    itemLayout: {
      padding: "10px 40px",
    },
    colLayout: {
      span: 8,
    },
    searchItem: [
      {
        field: "branch_name",
        type: "input",
        label: "支行名",
        placeholder: "请输入支行名",
      },
      {
        field: "branch_asserts",
        type: "input",
        label: "支行资产",
        placeholder: "请输入支行资产",
      },
      {
        field: "branch_city",
        type: "input",
        label: "支行所在城市",
        placeholder: "支行所在城市",
      }
    ],
    checkItem: [
      // {
      //   field: "num",
      //   type: "input",
      //   label: "请求数据量",
      //   placeholder: "请输入请求数据量",
      // },
      // {
      //   field: "page",
      //   type: "input",
      //   label: "当前页数",
      //   placeholder: "请输入当前页数",
      // },
      // {
      //   field: "branch_name",
      //   type: "input",
      //   label: "支付名",
      //   placeholder: "支付名",
      // },
      // {
      //   field: "branch_asserts",
      //   type: "input",
      //   label: "支付资产",
      //   placeholder: "支付资产",
      // },
      // {
      //   field: "branch_city",
      //   type: "input",
      //   label: "支付城市",
      //   placeholder: "支付所在城市",
      // }
    ],
    deleteItem: [
      {
        field: "branch_name",
        type: "input",
        label: "支行名",
        placeholder: "请输入请求支行名",
      },
      {
        field: "branch_asserts",
        type: "input",
        label: "支行资产",
        placeholder: "请输入支行资产",
      },
      {
        field: "branch_city",
        type: "input",
        label: "支行所在城市",
        placeholder: "支行所在城市",
      }
    ],
    updateItem: [
      {
        field: "branch_name",
        type: "input",
        label: "支行名",
        placeholder: "请输入请求支行名",
      },
      {
        field: "branch_asserts",
        type: "input",
        label: "支行资产",
        placeholder: "请输入支行资产",
      },
      {
        field: "branch_city",
        type: "input",
        label: "支行所在城市",
        placeholder: "支行所在城市",
      },
      {
        field: "old_branch_name",
        type: "input",
        label: "旧·支行名",
        placeholder: "旧·支行名",
      }
    ],
    proplist:[
      { prop: 'branch_name', label: '支行名', minWidth: '100' },
      { prop: 'branch_asserts', label: '支行资产', minWidth: '100' },
      { prop: 'branch_city', label: '	支行所在城市', minWidth: '100' }
    ],
  };
  