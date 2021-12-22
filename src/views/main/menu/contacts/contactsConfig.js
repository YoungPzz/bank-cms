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
        field: "contacts_id",
        type: "input",
        label: "联系人身份证号",
        placeholder: "联系人身份证号",
      },
      {
        field: "contacts_name",
        type: "input",
        label: "联系人姓名",
        placeholder: "联系人姓名",
      },
      {
        field: "contacts_phone",
        type: "input",
        label: "联系人号码",
        placeholder: "请输入联系人号码",
      },
      {
        field: "contacts_email",
        type: "input",
        label: "联系人邮件",
        placeholder: "联系人邮件",
      }
    ],
    checkItem: [
      
    ],
    updateItem: [
      {
        field: "old_contacts_id",
        type: "input",
        label: "旧·联系人身份证号",
        placeholder: "旧·联系人身份证号",
      },
      {
        field: "contacts_id",
        type: "input",
        label: "联系人身份证号",
        placeholder: "联系人身份证号",
      },
      {
        field: "contacts_name",
        type: "input",
        label: "联系人姓名",
        placeholder: "联系人姓名",
      },
      {
        field: "contactsr_phone",
        type: "input",
        label: "电话号码",
        placeholder: "电话号码",
      },
      {
        field: "contacts_email",
        type: "input",
        label: "联系人邮件",
        placeholder: "联系人邮件",
      }
    ],
    deleteItem: [
      {
        field: "contacts_id",
        type: "input",
        label: "联系人身份证号",
        placeholder: "联系人身份证号",
      },
      {
        field: "contacts_name",
        type: "input",
        label: "联系人姓名",
        placeholder: "联系人姓名",
      },
      {
        field: "contacts_phone",
        type: "input",
        label: "联系人号码",
        placeholder: "联系人号码",
      },
      {
        field: "contacts_email",
        type: "input",
        label: "联系人邮件",
        placeholder: "邮件",
      }
    ],
    proplist:[
      { prop: 'contacts_email', label: '联系人邮箱', minWidth: '100' },
      { prop: 'contacts_id', label: '联系人号码', minWidth: '100' },
      { prop: 'contacts_name', label: '联系人姓名', minWidth: '100' },
      { prop: 'contacts_phone', label: '联系人电话', minWidth: '100' }
      
    ],
  };
  