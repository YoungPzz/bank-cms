export const AccountqueryInfoConfig = {
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
      placeholder: "支行名",
    },
    {
      field: "staff_id",
      type: "input",
      label: "负责人的身份证号",
      placeholder: "负责人的身份证号",
    },
    {
      field: "rate",
      type: "input",
      label: "利率",
      placeholder: "利率",
    },
    {
      field: "currency_type",
      type: "input",
      label: "货币类型",
      placeholder: "货币类型",
    },
    {
      field: "customer_id[]",
      type: "input",
      label: "账户所属的客户身份证号列表",
      placeholder: "账户所属的客户身份证号列表",
    },
  ],
  checkItem: [
    // {
    //   field: "account_id",
    //   type: "input",
    //   label: "账户号",
    //   placeholder: "账户号",
    // },
    // {
    //   field: "account_balance",
    //   type: "input",
    //   label: "余额",
    //   placeholder: "余额",
    // },
    // {
    //   field: "account_open_date",
    //   type: "input",
    //   label: "开户日期",
    //   placeholder: "开户日期",
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
    // },
    // {
    //   field: "rate",
    //   type: "input",
    //   label: "利率",
    //   placeholder: "利率",
    // },
    // {
    //   field: "currency_type",
    //   type: "input",
    //   label: "货币类型",
    //   placeholder: "货币类型",
    // },
  ],
  updateItem: [
    {
      field: "account_id",
      type: "input",
      label: "需要修改的账户号",
      placeholder: "需要修改的账户号",
    },
    {
      field: "branch_name",
      type: "input",
      label: "支行名",
      placeholder: "支行名",
    },
    {
      field: "staff_id",
      type: "input",
      label: "负责人的身份证号",
      placeholder: "负责人的身份证号",
    },
    {
      field: "rate",
      type: "input",
      label: "利率",
      placeholder: "利率",
    },
    {
      field: "account_balance",
      type: "input",
      label: "余额",
      placeholder: "余额",
    },
    {
      field: "currency_type",
      type: "input",
      label: "货币类型",
      placeholder: "货币类型",
    },
  ],
  deleteItem: [
    {
      field: "account_id",
      type: "input",
      label: "账户号",
      placeholder: "账户号",
    },
  ],
  proplist: [
    { prop: "account_id", label: "账户号", minWidth: "100" },
    { prop: "account_balance", label: "余额", minWidth: "100" },
    { prop: "account_open_date", label: "开户日期", minWidth: "100" },
    { prop: "branch_name", label: "支行名", minWidth: "100" },
    { prop: "staff_id", label: "负责人的身份证号", minWidth: "100" },
    { prop: "rate", label: "利率", minWidth: "100" },
    { prop: "currency_type", label: "货币类型", minWidth: "100" },
  ],
};
