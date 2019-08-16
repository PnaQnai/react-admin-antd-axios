import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import '../static/css/base.css'


import '../static/css/base.css'
import {
    userApi,
    dataApi
} from '@/common/api';
import App from './router/App'
// 全局挂载Api  虽然说不建议
React.Component.prototype.$Api = {
    userApi: userApi,
    dataApi: dataApi
};



ReactDOM.render(
    <App />, document.getElementById('root'));

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();