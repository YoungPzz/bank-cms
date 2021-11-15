<template>
  <div class="login">
    <div class="box">
      <h2>银行账户管理系统</h2>
      <div class="input">
        <el-input v-model="input1" placeholder="请输入账号">
          <template #prepend>账号</template>
        </el-input>
      </div>
      <div class="input input2">
        <el-input v-model="input2" placeholder="请输入密码">
          <template #prepend>密码</template>
        </el-input>
      </div>
      <div class="button">
        <el-button type="primary" @click="axiosLogin()">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";
import LocalCache from "../../utils/cache";
import { useRouter } from "vue-router";
import Qs from "qs";
export default defineComponent({
  setup() {
    const input1 = ref("");
    const input2 = ref("");
    const router = useRouter();
    const axiosLogin = () => {
      axios({
        method: "post",
        // headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: "/login",
        data: Qs.stringify({
          username: input1.value,
          password: input2.value,
        }),
      }).then((res) => {
        console.log(res);
        if (res.data.state_code < 400) {
          LocalCache.setCache("username", input1.value);
          LocalCache.setCache("password", input2.value);
          alert('登录成功')
          router.push("/main");
        }
        else{
          alert('登录失败')
        }
      });
    };

    return { input1, input2, axiosLogin };
  },
});
</script>

<style scoped>
.button {
  padding-top: 50px;
}
.input {
  margin: 0 10px;
}
.input2 {
  margin-top: 30px;
}
.login {
  background-image: url("../../assets/images/1211.png");
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box {
  border: solid 1px rgba(255, 255, 255, 0.7);
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.7);
}
</style>
