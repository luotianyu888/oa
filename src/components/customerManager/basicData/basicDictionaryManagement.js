//销售机会管理
import React from 'react';
import Left from './../../commonality/left'
import {Link} from 'react-router-dom'
import { Menu, Dropdown, Button,Breadcrumb,Form,Select,Pagination,Table, Divider,Modal} from 'antd';
import './../../../assets/css/pc/cdp_execute.css'
import axios from 'axios';

class salesLeads_management extends React.Component{
    constructor(){
        super()
        this.state={
            data:[],
        }
        
    }
    // 提示消息栏
   

    componentWillMount() {
        var that=this;
        axios({
            method:'get',
            url:'api/yingxiao/xiaoshou_index',
        })
        .then(function(response){
            var list1 = response.data.data;
            list1.forEach(element => {
                element.key=element.sid
            });
            that.setState({
                data:list1
            })
        })
        .catch(function(err){
         console.log(err)
        })
    }

    render(){
        const { confirm } = Modal;
        function showConfirm(e) {
            var sid=e.target.getAttribute("data-sid");
            var linkid=e.target.getAttribute("data-link");
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
                        url: 'api/yingxiao/xiaoshou_del',
                        data: {
                            id:sid,
                            lid:linkid
                        }
                    })
                    .then(function (response) {
                        this.forceUpdate();
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
        
         //下拉菜单
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
          //select
          const Option = Select.Option;
          function  handleChange(value) {
            console.log(`selected ${value}`);
          }
          

          const  columns=[
            {
                title:'客户编号',
                dataIndex:'kehu_people.usernum',
                key:'kehu_people.usernum',
            },
            {
                title:'客户名称',
                dataIndex:'kehu_people.username',
                key:'kehu_people.username',
            },
            {
                title:'概要',
                dataIndex:'abstract',
                key:'abstract',
            },
            {
                title:'联系人',
                dataIndex:'kehu_people.lianxi_name',
                key:'kehu_people.lianxi_name',
            },
            {
                title:'联系电话',
                dataIndex:'kehu_people.lianxi_tel',
                key:'kehu_people.lianxi_tel',
            },
            {
                title:'创建时间',
                dataIndex:'creatTime',
                key:'creatTime',
            },
            {
                title:'创建人',
                dataIndex:'creat_people.username',
                key:'creat_people.username',
            },
            {
                title:'开发状态',
                dataIndex:'status',
                key:'status',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a href="./">编辑</a>
                        <Divider type="vertical" />
                        <a onClick={showConfirm} data-sid={record.sid} data-link={record.link_id}>删除</a>
                    </span>
                    ),
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
                            <Breadcrumb.Item href="">营销管理</Breadcrumb.Item>
                            <Breadcrumb.Item >销售机会管理</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-cdpe-groupselect" >
                        <Form>
                            <ul className="oa-cdpe-groupselectin">
                                <li className="oa-cdpe-groupselectin-layer1">
                                    <div>客户名称:</div>
                                    <input></input>
                                </li>
                                <li className="oa-cdpe-groupselectin-layer2">
                                    <div>概要:</div>
                                    <input></input>
                                </li>
                                <li className="oa-cdpe-groupselectin-layer1">
                                    <div>联系人:</div>
                                    <input></input>
                                </li>
                                <li className="oa-cdpe-groupselectin-layer2">
                                    <div>状态:</div>
                                    <Select size="large" defaultValue="lucy" style={{ width: 160 }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="disabled" >Disabled</Option>
                                        <Option value="yiminghe">Yiminghe</Option>
                                    </Select>
                                </li>
                            </ul>    
                        </Form> 
                        <div className="oa-sm-buttongroup">
                            <input type="submit" className="oa-cdpe-submit"></input>
                            <Button style={{marginLeft:'30px',backgroundColor:'red',border:'0'}} type="primary" href='salesLeads_newConstruction'>新建</Button>
                        </div>

                    </div>
                   <div className="oa-bdm-table-box">
                    <Table columns={columns} dataSource={this.state.data} />
                    </div>
                </div>
                
            </div>
        )
    }
}
export default salesLeads_management