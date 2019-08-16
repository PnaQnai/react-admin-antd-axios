import React from 'react'
// import { Link, Route, Switch, Redirect } from "react-router-dom"
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Job from '@/pages/Home/subpages/Job/index'
import House from '@/pages/Home/subpages/House/index'
// import './index.css'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


export default class Home extends React.Component {
  // constructor(){
  //     super()
  //     this.$Api.dataApi.recruitmentList({currentPage:1,pageSize:10,sortType:'1'}).then(res=>{
  //         if(res.status==200){
  //             console.log(res)
  //         }
  //     })
  // }
  render() {
    return (
      <Job />
    )
  }
}