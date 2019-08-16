import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from '@/pages/Login/index'
import Home from '@/pages/Home/index'
import Job from '@/pages/Home/subpages/Job/index'
import House from '@/pages/Home/subpages/House/index'
import Windmill from '@/pages/Home/subpages/Windmill/index'
import Trading from '@/pages/Home/subpages/Trading/index'
import LifeCircle from '@/pages/Home/subpages/LifeCircle/index'
import UsedCar from '@/pages/Home/subpages/UsedCar/index'
import Local from '@/pages/Home/subpages/Local/index'
import Marriage from '@/pages/Home/subpages/Marriage/index'
import LifeServer from '@/pages/Home/subpages/LifeServer/index'
import PageScan from '@/pages/Home/subpages/PageScan/index'
import ShopActivity from '@/pages/Home/subpages/ShopActivity/index'

export default class App extends React.Component{
    render(){
        return (
            // 3 使用 Router 组件包裹整个应用
            <Router>
                <div className="app-container">
                    {/* 4 配置路由的入口（也就是一个导航菜单） */}
                    {/* <Link to="/login">页面一</Link> */}

                    {/* 5 配置路由的出口（配置路由规则和要展示的组件） */}
                    <Route path="/" component={Login} exact/>

                    {/* 配置登录页面的路由规则： */}
                    <Route path="/Home"  component={Home} />
                    <Route path="/Job"  component={Home} />
                    <Route path="/House"  component={House} />
                    <Route path="/Windmill"  component={Windmill} />
                    <Route path="/Trading"  component={Trading} />
                    <Route path="/LifeCircle"  component={LifeCircle} />
                    <Route path="/UsedCar"  component={UsedCar} />
                    <Route path="/Local"  component={Local} />
                    <Route path="/Marriage"  component={Marriage} />
                    <Route path="/LifeServer"  component={LifeServer} />
                    <Route path="/PageScan"  component={PageScan} />
                    <Route path="/ShopActivity"  component={ShopActivity} />
                </div>
            </Router>
        )
    }
}