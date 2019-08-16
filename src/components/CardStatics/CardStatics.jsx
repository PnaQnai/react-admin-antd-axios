import React from 'react'
import { Icon } from 'antd';

export default class Cards extends React.Component{
    render(){
        return (
    <div style={{ background: '#fff', paddingRight: '30px',display:"flex",flex:1 }}>
        <ul className="card-ul">
            <li className="card-li">
                <div className="top">
                    <span>0</span>
                    <span><Icon type="arrow-down" /></span>
                    <span>300</span>
                </div>
                <p>截止当前注册用户数</p>
            </li>
            <li className="card-li">
                <div className="top">
                    <span>0</span>
                    <span><Icon type="arrow-down" /></span>
                    <span>300</span>
                </div>
                <p>截止当前注册用户数</p>
            </li>
            <li className="card-li">
                <div className="top">
                    <span>0</span>
                    <span><Icon type="arrow-down" /></span>
                    <span>300</span>
                </div>
                <p>截止当前注册用户数</p>
            </li>
        </ul>
        <style>
            {`
            .card-ul{
                display:'inline-block';
            }
            li.card-li{
                width:260px;
                height:160px;
                text-align:center;
                background-color:#ECECEC;
                padding-top:20px;
                margin-bottom:30px;
                font-size:20px;
            }
            li.card-li .top{
                line-height:50px;
                
            }
            li.card-li .top .anticon-arrow-down{
                font-size:25px;
            }`}
        </style>
    </div>
        )
    }
}