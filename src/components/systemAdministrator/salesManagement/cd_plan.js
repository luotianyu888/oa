//客户开发计划

import React from 'react';
import Left from './../../commonality/left'
import {Link} from 'react-router-dom'
import { Menu, Dropdown, Button,Breadcrumb,Form,Select,Pagination,Divider,Table,Modal,message} from 'antd';
import './../../../assets/css/pc/cdp_execute.css'
import axios from 'axios';
import unt from '../../../until/unt'
class cd_plan extends React.Component{
    constructor(){
        super()
        this.state={
            data:[],kaifa_status:'',
        }
    }
    componentWillMount() {
        var that=this;
        axios({
            method:'get',
            url:'api/yingxiao/plan_index',
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
            message.error(err,1)
        })
    }
    getInput(e){
        let inputValue = e.target.value;
        let inputName = e.target.name;
        this.setState({
            [inputName] : inputValue
        })
    }
    handleChange(value) {
        this.setState({
            kaifa_status:value
        })
    }
    //提交表单---搜索
    snc_submit(){
        var body = {
            kehu_name:this.state.kehu_name,
            gaiyao:this.state.gaiyao,
            lianxi_name:this.state.lianxi_name,
            kaifa_status:this.state.kaifa_status,
        }
        var arr = unt.check_obj(body)
        if(arr > -1){
            var that=this;
            axios({
            method: 'post',
            url: 'api/yingxiao/plan_index',
            data: body
            })
            .then(function (response) {
                if(response.data.code == 1){
                    var list1 = response.data.data;
                    list1.forEach(element => {
                        element.key=element.sid
                    });
                    that.setState({
                        data:list1
                    })
                }else{
                    message.error(response.data.msg,1)
                }
            })
            .catch(function (error) {
                message.error(error,1)
            });
        }else{
            message.error('请至少填写一项搜索词！',1)
        }
        
        
    }
  
    render(){
        
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
          //table
          const  columns=[
            {
                title:'客户编号',
                dataIndex:'usernum',
                key:'usernum',
            },
            {
                title:'客户名称',
                dataIndex:'kehu_name',
                key:'kehu_name',
            },
            {
                title:'概要',
                dataIndex:'abstract',
                key:'abstract',
            },
            {
                title:'联系人',
                dataIndex:'lianxi_name',
                key:'lianxi_name',
            },
            {
                title:'联系电话',
                dataIndex:'lianxi_tel',
                key:'lianxi_tel',
            },
            {
                title:'创建时间',
                dataIndex:'creatTime',
                key:'creatTime',
            },
            {
                title:'已指派',
                dataIndex:'zhipai_name',
                key:'zhipai_name',
            },
            {
                title:'开发状态',
                dataIndex:'kaifa_status',
                key:'kaifa_status',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a href={'./cdp_formulate?id='+record.sid} >制定</a>
                        <Divider type="vertical" />
                        <a href={'./cdp_execute?id='+record.sid} >执行</a>
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
                            <Breadcrumb.Item href="/salesLeads_management">营销管理</Breadcrumb.Item>
                            <Breadcrumb.Item >客户开发计划</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-cdpe-groupselect">
                        <Form>
                            <ul className="oa-cdpe-groupselectin">
                                <li className="oa-cdpe-groupselectin-layer1">
                                    <div>客户名称:</div>
                                    <input name='kehu_name' onChange={e=>{this.getInput(e)}}></input>
                                </li>
                                <li className="oa-cdpe-groupselectin-layer2">
                                    <div>概要:</div>
                                    <input name="gaiyao" onChange={e=>{this.getInput(e)}}></input>
                                </li>
                                <li className="oa-cdpe-groupselectin-layer1">
                                    <div>联系人:</div>
                                    <input name='lianxi_name' onChange={e=>{this.getInput(e)}}></input>
                                </li>
                                <li className="oa-cdpe-groupselectin-layer2">
                                    <div>开发状态:</div>
                                    <Select size="large" defaultValue="请选择" style={{ width: 160 }} onChange={e=>{this.handleChange(e)}}>
                                        <Option value="1">开发中</Option>
                                        <Option value="2">开发成功</Option>
                                        <Option value="3">终止开发</Option>
                                    </Select>
                                </li>
                            </ul>    
                        </Form> 
                        <input type="submit" className="oa-cdpe-submit" onClick={this.snc_submit.bind(this)}></input>
                    </div>
                    <div className="oa-cdpe-outbox">
                        <Table columns={columns} dataSource={this.state.data} />
                    </div>
                </div>
            </div>
        )
    }
}
export default cd_plan