import React from 'react'
import {Link, Route, Switch, Redirect} from "react-router-dom"
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Job from '@/pages/Home/subpages/Job/index'
import House from '@/pages/Home/subpages/House/index'
// 顶部tab切换菜单
import TopNav from '@/components/Nav/TopNav'
// 城市选择
import { Cascader } from 'antd';
// 日报时间选择器
import DailyTimePicker from '@/components/TimePicker/DailyTimePicker'
//周报时间选择器
import WeeklyPicker from '@/components/TimePicker/WeeklyPicker'
//月报时间选择器
import MonthlyPicker from '@/components/TimePicker/MonthlyPicker'
//城市选择数据
import ChooseCity from '@/components/ChooseCity/ChooseCity'
//导入表格组件
import { Table } from 'antd';
//表格内容
import TableData from '@/components/Table/Table'
import { Button } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


export default class Home extends React.Component{
  constructor(){
    super()
    //接口处理 案例
    // this.$Api.dataApi.recruitmentList({currentPage:1,pageSize:10,sortType:'1'}).then(res=>{
    //     if(res.status==200){
    //         console.log(res)
    //     }
    // })
    console.log(new Date())
    this.state = {
      currentIndex:'daily',//当前选中的tab菜单栏
    }
}

linkTo(e){
  console.log(e)
  let key = e.key;
  // console.log(this.props.history)
  // switch(key){
  //   case '1':
  //     this.props.history.push('/Job')
  //     break;
  //     case '2':
  //         this.props.history.push('/House')
  //         break;
  // }
}
//点击顶部tab菜单栏 进行内容切换
handleClick(e){
  console.log('我是求职招聘顶部tab菜单栏切换')
  console.log(e)
  this.setState({
    currentIndex:e
  })
}
//处理顶部tab菜单栏切换 内容条件渲染
handlerRender(){
  switch(this.state.currentIndex){
    case 'daily':
        return (
          <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {/* 头部菜单栏 */}
              <TopNav handleClick={this.handleClick.bind(this)}/>
              {/* 城市选择器 */}
              <div className="choose-container">
              地区选择：<Cascader options={ChooseCity.options} onChange={ChooseCity.onChange} changeOnSelect className="cascader-picker" defaultValue={['全国']}/>
              时间选择：<DailyTimePicker />
              <Button type="primary" className="search-btn">搜索</Button>
              <Button type="danger" icon="download" className="export-table">导出表格</Button>
              </div>
              {/* 表格数据展示 */}
                <div className="table-container">
                <Table columns={TableData.columns} dataSource={TableData.data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} pagination={false} bordered/>
                </div>
            </Content>
        )
    break;
    case 'weekly':
        return (
          <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {/* 头部菜单栏 */}
              <TopNav handleClick={this.handleClick.bind(this)}/>
              {/* 城市选择器 */}
              <div className="choose-container">
              地区选择：<Cascader options={ChooseCity.options} onChange={ChooseCity.onChange} changeOnSelect className="cascader-picker" defaultValue={['全国']}/>
              时间选择：<WeeklyPicker />
              <Button type="primary" className="search-btn">搜索</Button>
              <Button type="danger" icon="download" className="export-table">导出表格</Button>
              </div>
              {/* 表格数据展示 */}
              <div className="table-container">
                <Table columns={TableData.columns} dataSource={TableData.data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} pagination={false} bordered/>
                </div>
            </Content>
        )
    break;
    case 'monthly':
        return (
          <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {/* 头部菜单栏 */}
              <TopNav handleClick={this.handleClick.bind(this)}/>
              {/* 城市选择器 */}
              <div className="choose-container">
              地区选择：<Cascader options={ChooseCity.options} onChange={ChooseCity.onChange} changeOnSelect className="cascader-picker" defaultValue={['全国']}/>
              时间选择：<MonthlyPicker />
              <Button type="primary" className="search-btn">搜索</Button>
              <Button type="danger" icon="download" className="export-table">导出表格</Button>
              </div>
              {/* 表格数据展示 */}
              <div className="table-container">
                <Table columns={TableData.columns} dataSource={TableData.data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} pagination={false} bordered/>
                </div>
              </Content>
        )
    break;
  }
}
    render(){
      let { routes } = this.props
      console.log(this.props)
        return (
            <Layout>
            <Header className="header">
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
                
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Layout>
              <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                  mode="inline"
                  defaultSelectedKeys={['6']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                  onClick={this.linkTo.bind(this)}
                >
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="user" />
                        帖子数据
                      </span>
                    }
                  >
                    <Menu.Item key="1"><Link to="/Job"/>求职招聘</Menu.Item>
                    <Menu.Item key="2"><Link to="/House"/>房屋租售</Menu.Item>
                    <Menu.Item key="3"><Link to="/Windmill"/>顺风车</Menu.Item>
                    <Menu.Item key="4"><Link to="/Trading"/>二手交易</Menu.Item>
                    <Menu.Item key="5"><Link to="/LifeCircle"/>生活圈</Menu.Item>
                    <Menu.Item key="6"><Link to="/UsedCar"/>二手车</Menu.Item>
                    <Menu.Item key="7"><Link to="/Local"/>本地转让</Menu.Item>
                    <Menu.Item key="8"><Link to="/Marriage"/>婚恋交友</Menu.Item>
                    <Menu.Item key="9"><Link to="/LifeServer"/>生活服务</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <Icon type="laptop" />
                        帖子浏览数据
                      </span>
                    }
                  >
                    <Menu.Item key="10"><Link to="/PageScan"/>帖子浏览数据</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub3"
                    title={
                      <span>
                        <Icon type="notification" />
                        活动数据
                      </span>
                    }
                  >
                    <Menu.Item key="11"><Link to="/ShopActivity"/>商家活动数据</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                {/* 内容渲染 */}
                {this.handlerRender()}
              </Layout>
            </Layout>
            <style>{`
            .logo {
                height: 32px;
                background: rgba(255, 255, 255, 0.2);
                margin: 16px;
            }
            .choose-container{
              margin-top:30px;
            }
            .cascader-picker{
              margin-right:30px;
            }
            .search-btn{
              margin-left:30px;
            }
            .export-table{
              float:right;
            }
            .ant-table-body{
              max-height:500px!important;
            }
            .table-container{
              margin-top:30px;
            }
            `}</style>
          </Layout>
        )
    }
}