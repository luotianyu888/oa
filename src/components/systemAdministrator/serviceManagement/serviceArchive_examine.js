//服务归档-- 查看

import React from 'react';
import Left from './../../commonality/left'
import {Button,Breadcrumb,Form,Select,message} from 'antd';
import './../../../assets/css/pc/salesLeads_newConstruction.css'
import Navigation from './../../commonality/navigation'
import axios from 'axios';

const { Option } = Select;

class serviceArchive_examine extends React.Component{
    constructor(props){
        super(props)
        this.state={
            datainfo:[],
        }
    }
    //初始化数据
    componentWillMount () {
        const query = this.props.location.search ;
        const arr = query.split('&')
        const id = arr[0].substr(4)
        var that=this;
        axios({
            method:'get',
            url:'api/service/service_edit?id='+id,
        })
        .then(function(response){
            var datainfo = response.data.data;
            if(datainfo.pleased==5){
                datainfo.pleased='☆☆☆☆☆';
            }else if(datainfo.pleased==4){
                datainfo.pleased='☆☆☆☆';
            }else if(datainfo.pleased==3){
                datainfo.pleased='☆☆☆';
            }
            that.setState({
                datainfo:datainfo,
            })
        })
        .catch(function(err){
         message.error(err)
        })
       
    }
    
    render(){
        return(
            <div>
                <Left></Left>
                <div className="oa-common-right-box">
                    <Navigation></Navigation>
                    <div className="oa-crumbs-box" style={{padding:'10px'}}>
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="">服务管理</Breadcrumb.Item>
                            <Breadcrumb.Item href="">服务归档</Breadcrumb.Item>
                            <Breadcrumb.Item >归档</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-snc-buttongroup">
                        <Button href="/serviceArchive">返回</Button>
                    </div>
                    <div className="oa-snc-outbox">
                        <Form>
                            <div className="oa-snc-inbox">
                                <ul className="oa-snc-formbox">
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">编号</div>
                                            <input defaultValue={this.state.datainfo.number} readOnly></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">服务类型</div>
                                            <input defaultValue={this.state.datainfo.fuwu_type} readOnly></input>
                                        </div>
                                       
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">概要</div>
                                            <input defaultValue={this.state.datainfo.gaiyao} readOnly></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">客户</div>
                                            <input defaultValue={this.state.datainfo.kehu} readOnly></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1" style={{width:'100%'}}>
                                            <div className="oa-snc-ginput-left" style={{height:'auto',display:'flex',alignItems:'center',justifyContent:'center'}}>服务请求</div>
                                            <textarea name='fuwu_ask' value={this.state.datainfo.fuwu_ask}  style={{flex:'1',height:'100px'}}  />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">创建人</div>
                                            <input defaultValue={this.state.datainfo.creat_name} readOnly></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">创建时间</div>
                                            <input defaultValue={this.state.datainfo.creat_time} readOnly></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">状态</div>
                                            <input value='已分配' readOnly></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">分配给</div>
                                            <input  defaultValue={this.state.datainfo.assigned_name} readOnly></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">分配时间</div>
                                            <input defaultValue={this.state.datainfo.assigned_time} readOnly></input>
                                        </div>
                                        
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1" style={{width:'100%'}}>
                                            <div className="oa-snc-ginput-left" style={{height:'auto',display:'flex',alignItems:'center',justifyContent:'center'}}>处理方法</div>
                                            <textarea style={{flex:'1',height:'100px'}} value={this.state.datainfo.handle_method} /> 
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">处理人</div>
                                            <input defaultValue={this.state.datainfo.handle_name} readOnly></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">处理时间</div>
                                            <input defaultValue={this.state.datainfo.handle_time} readOnly></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">处理结果</div>
                                            <input defaultValue={this.state.datainfo.handle_result} readOnly></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">满意度</div>
                                            <input defaultValue={this.state.datainfo.pleased} readOnly></input>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
export default serviceArchive_examine