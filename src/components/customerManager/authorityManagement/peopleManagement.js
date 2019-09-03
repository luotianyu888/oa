//人员管理

import React from 'react';
import Left from './../../commonality/left'
import { Menu, Dropdown, Button,Breadcrumb,Table, Divider,Form,Input} from 'antd';
import './../../../assets/css/pc/peopleManagement.css'
class  peopleManagement extends React.Component{
    constructor(){
        super()
        this.state={

        }
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
                title: '人员编号',
                dataIndex: 'number',
                key: 'number',
            }, 
            {
                title: '用户姓名',
                dataIndex: 'username',
                key: 'category',
            }, 
            {
                title: '所属部门',
                dataIndex: 'subclauses',
                key: 'subclauses',
            }, 
            {
                title: '岗位',
                dataIndex: 'post',
                key: 'post',
            }, 
            {
                title: '登录账号',
                dataIndex: 'account',
                key: 'account',
            },
            {
                title: '登录密码',
                dataIndex: 'password',
                key: 'password',
            },
            {
                title: '联系电话',
                dataIndex: 'phoneNumber',
                key: 'phoneNumber',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                <span>
                    <a href="./">编辑 {record.name}</a>
                    <Divider type="vertical" />
                    <a href="./">删除</a>
                </span>
                ),
          }
        ];

        const data = [
            {
                key: '1',
                number: '0001',
                username: '王何川',
                subclauses: '电商部',
                post:'销售经理',
                account:'admin',
                password:'123456',
                phoneNumber:'13968451234',
                action: ['nice', 'developer'],
            },
            {
                key: '2',
                number: '0001',
                username: '王何川',
                subclauses: '电商部',
                post:'销售经理',
                account:'admin',
                password:'123456',
                phoneNumber:'13968451234',
                action: ['nice', 'developer'],
            },
            {
                key: '3',
                number: '0001',
                username: '王何川',
                subclauses: '电商部',
                post:'销售经理',
                account:'admin',
                password:'123456',
                phoneNumber:'13968451234',
                action: ['nice', 'developer'],
            },
            {
                key: '4',
                number: '0001',
                username: '王何川',
                subclauses: '电商部',
                post:'销售经理',
                account:'admin',
                password:'123456',
                phoneNumber:'13968451234',
                action: ['nice', 'developer'],
            },
            {
                key: '5',
                number: '0001',
                username: '王何川',
                subclauses: '电商部',
                post:'销售经理',
                account:'admin',
                password:'123456',
                phoneNumber:'13968451234',
                action: ['nice', 'developer'],
            },
            {
                key: '6',
                number: '0001',
                username: '王何川',
                subclauses: '电商部',
                post:'销售经理',
                account:'admin',
                password:'123456',
                phoneNumber:'13968451234',
                action: ['nice', 'developer'],
            },
            {
                key: '7',
                number: '0001',
                username: '王何川',
                subclauses: '电商部',
                post:'销售经理',
                account:'admin',
                password:'123456',
                phoneNumber:'13968451234',
                action: ['nice', 'developer'],
            },
            {
                key: '8',
                number: '0001',
                username: '王何川',
                subclauses: '电商部',
                post:'销售经理',
                account:'admin',
                password:'123456',
                phoneNumber:'13968451234',
                action: ['nice', 'developer'],
            },
            {
                key: '9',
                number: '0001',
                username: '王何川',
                subclauses: '电商部',
                post:'销售经理',
                account:'admin',
                password:'123456',
                phoneNumber:'13968451234',
                action: ['nice', 'developer'],
            },
            {
                key: '10',
                number: '0001',
                username: '王何川',
                subclauses: '电商部',
                post:'销售经理',
                account:'admin',
                password:'123456',
                phoneNumber:'13968451234',
                action: ['nice', 'developer'],
            },
            {
                key: '11',
                number: '0001',
                username: '王何川',
                subclauses: '电商部',
                post:'销售经理',
                account:'admin',
                password:'123456',
                phoneNumber:'13968451234',
                action: ['nice', 'developer'],
            },
            {
                key: '12',
                number: '0001',
                username: '王何川',
                subclauses: '电商部',
                post:'销售经理',
                account:'admin',
                password:'123456',
                phoneNumber:'13968451234',
                action: ['nice', 'developer'],
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
                            <Breadcrumb.Item >人员管理</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-pm-topbox">
                        <Form>
                            <ul className="oa-pm-topbox-left">
                                <li className="oa-pm-topbox-left-layer">
                                    <div>用户姓名</div>
                                    <Input />
                                </li>
                                <li className="oa-pm-topbox-left-layer">
                                    <div>所属部门</div>
                                    <Input />
                                </li>
                                <li className="oa-pm-topbox-left-layer">
                                    <div>岗位</div>
                                    <Input />
                                </li>
                            </ul>
                        </Form>
                        <div className="oa-pm-topbox-right">
                            <Button type="primary" href="">部门</Button>
                            <Button type="primary"  href="./peopleManagement_post">岗位</Button>
                            <Button type="primary" href="./peopleManagement_add">添加</Button>
                        </div>
                    </div>
                    <div className="oa-pm-tablelist">
                        <Table columns={columns} dataSource={data} />
                    </div>
                </div>
            </div>
        )
    }
}

export default peopleManagement