import React from 'react'
import {Link, Route, Switch, Redirect} from "react-router-dom"
import { Layout, Menu, Breadcrumb, Icon,Button } from 'antd';
import CardStatics from '@/components/CardStatics/CardStatics'
//tab菜单栏切换
import { Tabs } from 'antd';
//时间选择器
import WeeklyPicker from '@/components/TimePicker/WeeklyPicker'
//折线图
import Polyline from '@/components/Echarts/Echarts'
// import { Table } from 'antd';
//表格数据
import PageScanTable from '@/components/Table/PageScanTable'
const { TabPane } = Tabs;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



export default class Home extends React.Component{
    // constructor(){
    //     super()
    //     this.$Api.dataApi.recruitmentList({currentPage:1,pageSize:10,sortType:'1'}).then(res=>{
    //         if(res.status==200){
    //             console.log(res)
    //         }
    //     })
    // }
    
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
    //切换顶部tab栏
    callback(e){
      console.log(e)
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
                  defaultSelectedKeys={['10']}
                  defaultOpenKeys={['sub2']}
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
                <Breadcrumb style={{ margin: '16px 0' }}>
                  {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item> */}
                </Breadcrumb>
                <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    position:'relative'
                  }}
                >
                  <div className="top-content">
                   {/* 左侧卡片统计 */}
                  <CardStatics />
                  {/* 右侧顶部菜单 */}
                  <div className="right-top">
                    {/* tab栏 */}
                  <Tabs onChange={this.callback.bind(this)} type="card">
                    <TabPane tab="今日" key="1">
                      {/* 折线图 */}
                    <Polyline />
                    </TabPane>
                    <TabPane tab="7天" key="2">
                      Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="14日" key="3">
                      Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="30日" key="4">
                      Content of Tab Pane 3
                    </TabPane>
                  </Tabs>
                  {/* <WeeklyPicker /> */}
                  {/* <div className="polyline-img">
                    折线图
                    <Polyline />
                  </div> */}
                  </div>
                  {/* 日期选择 */}
                  <div className="pagescan-weekly">
                    <WeeklyPicker />
                  </div>
                  </div>
                    {/* 我是帖子浏览数据表格 */}
                  <div className="pagescan-table">
                  <Button type="primary" icon="download" size={50} style={{'margin-bottom':'20px'}}>
                    导出表格
                  </Button>
                  {/* <Table columns={PageScanTable.columns} dataSource={PageScanTable.data} scroll={{ y: 240 }} /> */}
                  <PageScanTable />
                  </div>
                </Content>
              </Layout>
            </Layout>
            <style>{`
            .logo {
                height: 32px;
                background: rgba(255, 255, 255, 0.2);
                margin: 16px;
            }
            .top-content{
              
              display:flex;
            }
            .right-top{
              width:80%;
              float:left;
              display:flex;
              flex:3
            }
            .right-top .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active{
              background-color:#1890ff;
              color:#fff;
              border-radius:4px;
            }
            .right-top .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab{
              padding:0 40px;
              border-radius:4px;
            }
            .pagescan-weekly{
              position:absolute;
              top:24px;
              right:50px;
              margin-left:30px;
              margin-top:5px;
            }
            .right-top .ant-tabs{
              float:left;
              width:100%;
              display:'flex';
              flex:1;
            }
            .right-top .ant-tabs-bar{
              border:0;
            }
            .pagescan-table{
              display:block;
              padding-top:30px;
              border-top:1px solid #111;
            }
            .ant-layout .ant-layout-content{
              min-height:150%!important;
            }
            `}</style>
          </Layout>
        )
    }
}