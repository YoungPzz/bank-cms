import { createStore } from "vuex";
import main from "./main/main";
export default createStore({
  state: {
    userMenus: [
      { name: "支行管理" },
      { name: "员工管理" },
      { name: "客户管理" },
      { name: "账户管理" },
      { name: "贷款管理" },
      { name: "业务统计" },
    ],
  },
  mutations: {},
  actions: {},
  modules: { main },
});
