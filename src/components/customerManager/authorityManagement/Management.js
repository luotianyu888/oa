//人员管理

import React from 'react';
import Left from './../../commonality/left'
import {Link} from 'react-router-dom'
import { Menu, Dropdown, Button,Breadcrumb,Table, Divider,Form,Input,Modal} from 'antd';
import './../../../assets/css/pc/peopleManagement_add.css'
import axios from 'axios';




class  peopleManagement extends React.Component{

  constructor(){
        super()
        this.state={
            data:[],
        }

    }



    componentWillMount() {
        var that=this;
        axios({
            method:'get',
            url:'api/index/index',
        })
        .then(function(response){
            var list1 = response.data.data;
            that.setState({
                list:list1
            })
         //   console.log(that.state.list)
        })
        .catch(function(err){
         console.log(err)
        })
    } 



    // showModal=(obj)=>{
    //     var that=this;
    //     axios({
    //         method:'post',
    //         url:'api/people/del',
    //         data:{id:obj}
    //     })
    //     .then(function(response){
    //         var list1 = response.data.data;
    //         that.setState({
    //             list:list1
    //         })
    //      //   console.log(that.state.list)
    //     })
    //     .catch(function(err){
    //     // console.log(err)
    //     })
    // }

    search(){
        const inpVal = this.input.value;
        console.log(inpVal);
    }
    

    render(){

        const { confirm } = Modal;
        function showConfirm(e) {
            var id=e.target.getAttribute("data-id");
          //  var linkid=e.target.getAttribute("data-link");
          console.log(id);
            confirm({
              title: '你确定要删除?',
              content: '删除之后将不可恢复',
              onOk() {
                return new Promise((resolve, reject) => {
                  setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                })
                .catch(() =>
                    axios({
                        method: 'post',
                        url: 'api/index/delete',
                        data: {
                            id:id,
                          //  lid:linkid
                        }
                    })
                    .then(function (response) {
                        
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                 );
              },
              onCancel() {},
            });
          }

        
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
                dataIndex: 'id',
                key: 'id',
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
                    {/* <a onClick={this.showModal.bind(this,record.id)}  >删除</a> */}
                    <a onClick={showConfirm} data-id={record.id} data-link={record.link_id}>删除</a>
                </span>
                ),
          }
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
                                    <Input type="text" ref={input => this.input = input} defaultValue="Hello"/>
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
            
                            <Button type="primary" href="" onClick={this.search}>部门</Button>
                            <Button type="primary"  href="./peopleManagement_post">岗位</Button>
                            <Button type="primary" href="./peopleManagement_add">添加</Button>
                        </div>
                    </div>
                    <div className="oa-pm-tablelist">
                    
                        <Table columns={columns} dataSource={this.state.list} />
                    </div>
                </div>
            </div>
        )
    }
}

export default peopleManagement