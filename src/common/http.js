import axios from 'axios';
import Crypto from './crypto';
// import Router from './../router/index';



/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
//线上地址

// 线下地址
let baseUrl = "xxxxx"  //接口地址

// 创建移动端用户统一授权登录的axios 实例
let UserAxios = axios.create({
  baseURL: baseUrl
  // baseURL: baseUrl + ":8801"
});
// 创建主要业务服务的axios实例
let MainAxios = axios.create({
  baseURL: baseUrl
  // baseURL: baseUrl + ":8802"
})

// 请求拦截器
UserAxios.interceptors.request.use(
  config => {
    // 过滤登录请求
    if (config.url === "/api/system/auth/loginBySMSsss" || config.url === "/api/system/auth/verificationCodessssss") {
      return config;
    }
    // loadingserve.startLoading();
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    let token = localStorage.getItem('token');
    // if (token) {
    config.headers['Authorization'] = token;
    return config;
  },
  error => {
    return Promise.error(error);
  })

// 请求拦截器
MainAxios.interceptors.request.use(
  config => {
    // loadingserve.startLoading();
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    let token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = token;
      return config;
    }
    return config
  },
  error => {
    return Promise.error(error);
  })



// 响应拦截器
MainAxios.interceptors.response.use(
  response => {
    if (response.data.status !== 200) {
    //   Toast(response.data.message)
    }
    return Promise.resolve(response);
  },
  // 服务器状态码不是200的情况
  error => {
    // loadingserve.endLoading();
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
        //   Toast("登录过期，请重新登录");
        //   store.commit('del_token')
          setTimeout(() => {
            // Router.push({
            //   path: "/Login"
            // });
          }, 600);
          break;
          // 403 token过期
          // 登录过期对用户进行提示
          // 清除本地token和清空vuex中token对象
          // 跳转登录页面
        case 403:
        //   Toast('登录过期，请重新登录')
        //   // 清除token
        //   store.commit('del_token')
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            // Router.push({
            //   path: "/Login"
            // });
          }, 600);
          break;
          // 404请求不存在
        case 404:
        //   Toast('网络请求不存在')
          break;
          // 其他错误，直接抛出错误提示
        default:
        //   Toast(error.response.data.message)
      }
      return Promise.reject(error.response);
    }
  }
);

// 响应拦截器
UserAxios.interceptors.response.use(
  response => {
    if (response.data.status !== 200) {
    //   Toast(response.data.message)
    }
    return Promise.resolve(response);
  },
  // 服务器状态码不是200的情况
  error => {
    // loadingserve.endLoading();
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
        //   store.commit('del_token')
          setTimeout(() => {
            // Router.push({
            //   path: "/Login"
            // });
          }, 600);
          break;
          // 403 token过期
          // 登录过期对用户进行提示
          // 清除本地token和清空vuex中token对象
          // 跳转登录页面
        case 403:
        //   Toast('登录过期，请重新登录')
          // 清除token
        //   store.commit('del_token')
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            // Router.push({
            //   path: "/Login"
            // });
          }, 600);
          break;
          // 404请求不存在
        case 404:
        //   Toast('网络请求不存在')
          break;
          // 其他错误，直接抛出错误提示
        default:
        //   Toast(error.response.data.message)
      }
      return Promise.reject(error.response);
    }
  }
);



let headersConfig = {
  // 'sign': 
  // 'ver': 
  // 'os': 
  // 'Content-Type': 
}

/* 移动端用户统一授权登录，UserAxios，端口号8801*/
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function UserGet(url, params) {
  if (!params) {
    params = {}
  }
  return new Promise(function (resolve, reject) {
    UserAxios.get(url, {
        headers: headersConfig,
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function UserPost(url, params) {
  return new Promise((resolve, reject) => {
    if (!params) {
      params = {}
    }
    UserAxios.post(url, params, {
        headers: headersConfig
      }).then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}


/* 主要业务服务，MainAxios，端口号8802*/
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 **/
export function Get(url, params) {
  if (!params) {
    params = ""
  }
  return new Promise(function (resolve, reject) {
    MainAxios.get(url, {
        headers: headersConfig,
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function Post(url, params) {
  return new Promise((resolve, reject) => {
    if (!params) {
      params = {}
    }
    MainAxios.post(url, params, {
        headers: headersConfig
      }).then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

