export  const CutomerqueryInfoConfig = {
    labelWidth: "120px",
    itemLayout: {
      padding: "10px 40px",
    },
    colLayout: {
      span: 8,
    },
    searchItem: [
      {
        field: "customer_id",
        type: "input",
        label: "客户身份证号",
        placeholder: "客户身份证号",
      },
      {
        field: "customer_name",
        type: "input",
        label: "客户姓名",
        placeholder: "客户姓名",
      },
      {
        field: "customer_phone",
        type: "input",
        label: "电话号码",
        placeholder: "请输入电话号码",
      },
      {
        field: "customer_address",
        type: "input",
        label: "	住址",
        placeholder: "	住址",
      },
      {
        field: "contacts_id",
        type: "input",
        label: "联系人身份证",
        placeholder: "联系人身份证",
      },
      {
        field: "customer_contacts_relationship",
        type: "input",
        label: "与联系人之间的关系",
        placeholder: "与联系人之间的关系",
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
      //   field: "customer_id",
      //   type: "input",
      //   label: "客户身份证号",
      //   placeholder: "客户身份证号",
      // },
      // {
      //   field: "customer_name",
      //   type: "input",
      //   label: "客户姓名",
      //   placeholder: "客户姓名",
      // },
      // {
      //   field: "customer_phone",
      //   type: "input",
      //   label: "电话号码",
      //   placeholder: "电话号码",
      // }
    ],
    updateItem: [
      {
        field: "old_customer_id",
        type: "input",
        label: "旧·客户身份证号",
        placeholder: "旧·客户身份证号",
      },
      {
        field: "customer_id",
        type: "input",
        label: "客户身份证号",
        placeholder: "客户身份证号",
      },
      {
        field: "customer_name",
        type: "input",
        label: "	客户姓名",
        placeholder: "	客户姓名",
      },
      {
        field: "customer_phone",
        type: "input",
        label: "电话号码",
        placeholder: "电话号码",
      },
      {
        field: "customer_address",
        type: "input",
        label: "住址",
        placeholder: "住址",
      }
    ],
    deleteItem: [
      {
        field: "customer_id",
        type: "input",
        label: "客户身份证号",
        placeholder: "客户身份证号",
      },
      {
        field: "customer_name",
        type: "input",
        label: "客户姓名",
        placeholder: "客户姓名",
      },
      {
        field: "customer_phone",
        type: "input",
        label: "电话号码",
        placeholder: "电话号码",
      },
      {
        field: "customer_address",
        type: "input",
        label: "住址",
        placeholder: "住址",
      },
      {
        field: "contacts_id",
        type: "input",
        label: "联系人身份证",
        placeholder: "联系人身份证",
      }
    ],
    proplist:[
      { prop: 'customer_id', label: '客户身份证号', minWidth: '100' },
      { prop: 'customer_name', label: '客户姓名', minWidth: '100' },
      { prop: 'customer_phone', label: '电话号码', minWidth: '100' },
      { prop: 'customer_address', label: '住址', minWidth: '100' },
      { prop: 'contacts_id', label: '联系人身份证', minWidth: '100' },
      { prop: 'customer_contacts_relationship', label: '与联系人之间的关系', minWidth: '100' }
      
    ],
  };
  