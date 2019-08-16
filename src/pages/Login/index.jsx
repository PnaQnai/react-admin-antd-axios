import React from 'react'
import { Link } from 'react-router-dom'
import Home from '@/pages/Home/index'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class NormalLoginForm extends React.Component {
  handleSubmit(e){
      console.log(this.props)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.history.push('/Home')
      }
    });
  };
//   toHome(){
//       console.log(this.props)
//   }

  render() {
    const { getFieldDecorator } = this.props.form;
    // console.log(getFieldDecorator)
    return (
      <div className="login-padding">
              <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
          <h1>数据管理系统</h1>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="账号"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住密码</Checkbox>)}
          {/* <a className="login-form-forgot" href="">
            Forgot password
          </a> */}
          <Button type="primary" htmlType="submit" className="login-form-button">
            {/* <div onClick={this.toHome.bind(this)}></div> */}
            登录
          </Button>
        </Form.Item>
      </Form>
      <style>
        {`.login-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px 40px;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px 5px #ccc;
		
}

.login-form-forgot {
    float: right;
}

.login-form-button {
    width: 100%;
}
.login-padding {
    padding-top: 300px;
}`}
      </style>
      </div>
    );
  }
}

// const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm

//  class Login extends React.Component{
//     render(){
//         return (
//             <div>我是Login页面  也是入口页面
//                 <button onClick={this.handleClick.bind(this)}>跳转到登录页面</button>
//             </div>
//         )
//     }
//     handleClick(){
//         this.props.history.push('/home')
//     }

// }