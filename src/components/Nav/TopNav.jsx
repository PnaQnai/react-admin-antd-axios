import React from 'react'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

export default class App extends React.Component {
  constructor(){
    super()
this.state = {
  current: 'daily',
};
  }

  // componentDidMount() {
  //   this.handleClick({"key":'daily'})
  // }

  handleClick(e) {
    console.log(e)
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
    console.log(this.state.current)
    this.props.handleClick(e.key)
  };

  render() {
    return (
      <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="daily">
        <Icon type="bar-chart" />
         日报
        </Menu.Item>
        <Menu.Item key="weekly">
        <Icon type="line-chart" />
          周报
        </Menu.Item>
        <Menu.Item key="monthly">
        <Icon type="area-chart" />
        月报
        </Menu.Item>
        <style>
          {`.ant-layout-content .ant-menu-item{
            width:150px;
            text-align:center;
            border-right :1px solid #e8e8e8;
            border-top:1px solid #e8e8e8;
            border-left:1px solid #e8e8e8;
          }`}
        </style>
      </Menu>
    );
  }

}

