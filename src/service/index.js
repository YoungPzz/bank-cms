import axios from "axios";
// 全局axios配置选项;
axios.defaults.baseURL = "http://wjoy.top/api/bank";
axios.defaults.timeout = 100000; //配置超时时间
import Qs from "qs";

export function creatNew(path, query) {
  //删除属性值为空的属性
  for (let key in query) {
    if (query[key] == "") {
      delete query[key];
    }
  }
  axios({
    method: "post",
    // headers:{
    //  'Content-Type':'multipart/form-data'
    // },
    url: path,
    data: Qs.stringify(query),
  })
    .then((res) => {
      console.log(res);
      console.log(path, query);
      if (res.data.state_code > 400) {
        alert("创建失败");
      } else {
        alert("创建成功");
      }
    })
    .catch((err) => {
      alert("创建失败");
    });
}
export function DeleteAxios(path, query) {
  //删除属性值为空的属性
  for (let key in query) {
    if (query[key] == "") {
      delete query[key];
    }
  }
  axios({
    method: "post",
    // headers:{
    //  'Content-Type':'multipart/form-data'
    // },
    url: path,
    data: Qs.stringify(query),
  })
    .then((res) => {
      if (res.data.state_code > 400) {
        alert("删除失败");
      } else {
        alert("删除成功");
      }
    })
    .catch((err) => {
      alert("删除失败");
    });
}
export function UpdateAxios(path, query) {
  //删除属性值为空的属性
  for (let key in query) {
    if (query[key] == "") {
      delete query[key];
    }
  }
  axios({
    method: "post",
    // headers:{
    //  'Content-Type':'multipart/form-data'
    // },
    url: path,
    data: Qs.stringify(query),
  })
    .then((res) => {
      if (res.data.state_code > 400) {
        alert("更新失败");
      } else {
        alert("更新成功");
      }
    })
    .catch((err) => {
      alert("更新失败");
    });
}
export async function searchItem(path) {
  //删除属性值为空的属性
  // for (let key in query) {
  //   if (query[key] == "") {
  //     delete query[key];
  //   }
  // }
  let result = [];
  await axios.get(path).then((res) => {
    // console.log('115',res.data.data.Staff)
    result = res.data.data;
  });
  return result
}
