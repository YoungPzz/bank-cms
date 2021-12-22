export  const LoansqueryInfoConfig = {
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
        field: "staff_id",
        type: "input",
        label: "负责人身份证号",
        placeholder: "请输入负责人身份证号",
      },
      {
        field: "loan_money",
        type: "input",
        label: "贷款额",
        placeholder: "贷款额",
      },
      {
        field:"customer_id[]",
        type: "input",
        label: "客户身份证号列表",
        placeholder: "客户身份证号列表",
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
      //   field: "loan_id",
      //   type: "input",
      //   label: "贷款号",
      //   placeholder: "贷款号",
      // },
      // {
      //   field: "loan_money",
      //   type: "input",
      //   label: "贷款额",
      //   placeholder: "贷款额",
      // },
      // {
      //   field: "loan_state",
      //   type: "input",
      //   label: "贷款状态",
      //   placeholder: "贷款状态",
      // },
      // {
      //   field: "branch_name",
      //   type: "input",
      //   label: "支行名",
      //   placeholder: "支行名",
      // },
      // {
      //   field: "staff_id",
      //   type: "input",
      //   label: "负责人的身份证号",
      //   placeholder: "负责人的身份证号",
      // }
    ],
    updateItem: [
      {
        field: "payment_time",
        type: "input",
        label: "支付时间",
        placeholder: "请输入请求支付时间",
      },
      {
        field: "loan_id",
        type: "input",
        label: "贷款号",
        placeholder: "请输入贷款号",
      },
      {
        field: "payment_money",
        type: "input",
        label: "支付金额",
        placeholder: "不能为0",
      }
    ],
    deleteItem: [
      {
        field: "loan_id",
        type: "input",
        label: "贷款号",
        placeholder: "贷款号",
      }
    ],
    proplist:[
      { prop: 'loan_id', label: '贷款号', minWidth: '100' },
      { prop: 'loan_money', label:'贷款额', minWidth: '100' },
      { prop: 'loan_state', label:'贷款状态', minWidth: '100' },
      { prop: 'branch_name', label:'支行名', minWidth: '100' },
      { prop: 'staff_id', label: '负责人的身份证号', minWidth: '100' }
    ]
  };
  