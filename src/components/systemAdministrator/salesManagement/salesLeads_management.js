//销售机会管理
import React from 'react';
import Left from './../../commonality/left'
import {Link} from 'react-router-dom'
import { Menu, Dropdown, Button,Breadcrumb,Form,Select,Pagination,Table, Divider,Modal,message} from 'antd';
import './../../../assets/css/pc/cdp_execute.css'
import axios from 'axios';
import unt from '../../../until/unt'
class salesLeads_management extends React.Component{
    constructor(){
        super()
        this.state={
            data:[],status:'',
        }
    }
    //初始化数据
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
            message.error(err,1)
        })
    }
    //表单点击事件
    getInput=(e)=>{
        let inputValue = e.target.value;
        let inputName = e.target.name;
        this.setState({
            [inputName] : inputValue
        })
    }
    handleChange(value) {
        this.setState({
            status:value
        })
    }
    
    //搜索查询
    snc_submit(){
        var body = {
            kehu_name:this.state.kehu_name,
            gaiyao:this.state.gaiyao,
            lianxi_name:this.state.lianxi_name,
            status:this.state.status,
        }
        var arr = unt.check_obj(body)
        //console.log(body)
        if(arr > -1){
            var that=this;
            axios({
            method: 'post',
            url: 'api/yingxiao/xiaoshou_index',
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
                        if(response.data.code == 1){
                            message.success(response.data.msg,1,function(){
                                window.location.reload();
                            })
                        }else{
                            message.error(response.data.msg,1)
                        }
                    })
                    .catch(function (error) {
                         message.error(error,1)
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
                title:'创建人',
                dataIndex:'creat_name',
                key:'creat_name',
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
                        <a href={'./salesLeads_editConstruction?id='+record.sid} >编辑</a>
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
                            <Breadcrumb.Item href="/salesLeads_management">营销管理</Breadcrumb.Item>
                            <Breadcrumb.Item >销售机会管理</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-cdpe-groupselect" >
                        <Form>
                            <ul className="oa-cdpe-groupselectin">
                                <li className="oa-cdpe-groupselectin-layer1">
                                    <div>客户名称:</div>
                                    <input name='kehu_name' onChange={e=>{this.getInput(e)}}></input>
                                </li>
                                <li className="oa-cdpe-groupselectin-layer2">
                                    <div>概要:</div>
                                    <input name='gaiyao' onChange={e=>{this.getInput(e)}}></input>
                                </li>
                                <li className="oa-cdpe-groupselectin-layer1">
                                    <div>联系人:</div>
                                    <input name='lianxi_name' onChange={e=>{this.getInput(e)}}></input>
                                </li>
                                <li className="oa-cdpe-groupselectin-layer2">
                                    <div>状态:</div>
                                    <Select size="large" defaultValue="请选择" style={{ width: 160 }} onChange={e=>{this.handleChange(e)}}>
                                        <Option value="1">未指派</Option>
                                        <Option value="2">已指派</Option>
                                    </Select>
                                </li>
                            </ul>    
                        </Form> 
                        <div className="oa-sm-buttongroup">
                            <input type="submit" className="oa-cdpe-submit" onClick={this.snc_submit.bind(this)}></input>
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