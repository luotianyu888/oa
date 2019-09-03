//权限管理-密码维护

import React from 'react';
import  Left from './../../commonality/left'
import { Menu, Dropdown, Button,Breadcrumb,Table, Divider,Form} from 'antd';
import './../../../assets/css/pc/AM_PasswordMaintenance.css'

class AM_PasswordMaintenance extends React.Component{
    constructor(){
        super()
        this.state={
            condition:false
        }
    }
    present(){
            this.setState({
                condition:!this.state.condition
            })
    }
    render(){
        //下来菜单
        const menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">个人信息</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">切换账号</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">退出</a>
              </Menu.Item>
            </Menu>
          );
          //table
          const columns = [
            {
                title: '编号',
                dataIndex: 'number',
                key: 'number'
            }, 
            {
                title: '用户名',
                dataIndex: 'username',
                key: 'username',
            }, 
            {
                title: '密码',
                dataIndex: 'passwrod',
                key: 'passwrod',
            }, 
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                <span>
                    <a href="./">编辑</a>
                    <Divider type="vertical" />
                    <a href="./">删除</a>
                </span>
                ),
          }
        ];

        const data = [
        {
            key: '1',
            number: '1',
            username: 'admin',
            passwrod: '1131231',
            tags: ['nice', 'developer'],
        }, 
        {
            key: '2',
            number: '1',
            username: 'admin',
            passwrod: '1131231',
            tags: ['nice', 'developer'],
        }, 
        {
            key: '3',
            number: '1',
            username: 'admin',
            passwrod: '1131231',
            tags: ['nice', 'developer'],
        },
        {
            key: '4',
            number: '1',
            username: 'admin',
            passwrod: '1131231',
            tags: ['nice', 'developer'],
        },
        {
            key: '5',
            number: '1',
            username: 'admin',
            passwrod: '1131231',
            tags: ['nice', 'developer'],
        },
    ];
        return(
            <div>
                <Left></Left>
                <div className="oa-common-right-box">
                    <div className="oa-cright-header">
                        <div>12313</div>
                        <Dropdown overlay={menu} placement="bottomCenter">
                            <Button>admin</Button>
                        </Dropdown>
                    </div>
                    <div className="oa-crumbs-box">
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="">权限管理</Breadcrumb.Item>
                            <Breadcrumb.Item >密码维护</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-ampm-top-laye">
                        <Button type="primary" onClick={this.present.bind(this)} style={{marginLeft:'20px'}}>添加管理员</Button>
                    </div>
                    <div className="oa-ampm-tabledata">
                        <Table columns={columns} dataSource={data} />
                    </div>
                </div>
                <div className={this.state.condition?"oa-ampm-Montmorillonite-layer":'unshow'}>
                    <div className="oa-ampm-m-top">
                        添加管理员
                    </div>
                    <ul className="oa-ampm-f">
                        <Form>
                            <li className="oa-ampm-f-layer1">
                                <div>用户名</div>
                                <input/>
                            </li>
                            <li className="oa-ampm-f-layer1">
                                <div>密码</div>
                                <input/>
                            </li>
                            <li className="oa-ampm-submitbox">
                                <Button type="primary">确认</Button>
                                <input type="reset"></input>
                            </li>
                        </Form>
                    </ul>
                </div>
            </div>
        )
    }
}
export  default AM_PasswordMaintenance