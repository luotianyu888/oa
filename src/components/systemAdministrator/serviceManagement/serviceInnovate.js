//服务创新
import React from 'react';
import Left from './../../commonality/left'
import {Button,Breadcrumb,Form,Select,message} from 'antd';
import './../../../assets/css/pc/salesLeads_newConstruction.css'
import Navigation from './../../commonality/navigation'
import { now } from 'moment';
import axios from 'axios';

const { Option } = Select;

class serviceInnovate extends React.Component{
    constructor(){
        super()
        this.state={
            nowsdate:new Date(now()).toLocaleString(),
            fuwu_type:''
        }
    }
    getmes(e){
        let inputValue = e.target.value;
        let inputName = e.target.name;
        this.setState({
            [inputName] : inputValue
        })   
    }
    handleChange=(value)=> {
        this.setState({
            fuwu_type:value,
        })
    }
    //提交表单
    snc_submit(){
        var addData={
            number:this.state.number,
            fuwu_type:this.state.fuwu_type,
            gaiyao:this.state.gaiyao,
            kehu:this.state.kehu,
            fuwu_ask:this.state.fuwu_ask,
            creat_id:1,
            status:1,
        }
        //console.log(addData);
        if(!this.state.number){
            message.error('请填写编号',1);
            return false;
        }
        if(!this.state.fuwu_type){
            message.error('请选择服务类型',1);
            return false;
        }
        if(!this.state.gaiyao){
            message.error('请填写概要',1);
            return false;
        }
        if(!this.state.kehu){
            message.error('请填写客户',1);
            return false;
        }
        if(!this.state.fuwu_ask){
            message.error('请填写服务请求',1);
            return false;
        }
        axios({
            method: 'post',
            url: 'api/service/service_add',
            data: addData
           })
           .then(function (response) {
               if(response.data.code==1){
                   message.success(response.data.msg ,0.5,function(){
                       window.location.reload()
                   })
               }else{
                   message.error(response.data.msg,1)
               }
           })
           .catch(function (error) {
               message.error(error,1)
           });
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
                            <Breadcrumb.Item >创建</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-snc-buttongroup">
                        <Button type="submit" onClick={this.snc_submit.bind(this)}>提交</Button>
                    </div>
                    <div className="oa-snc-outbox">
                        <Form>
                            <div className="oa-snc-inbox">
                                <ul className="oa-snc-formbox">
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">编号</div>
                                            <input name='number'   defaultValue={this.state.number} onChange={this.getmes.bind(this)}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">服务类型</div>
                                            <Select defaultValue="请选择" style={{border:'1px solid #ccc',lineHeight:'35px',flex:'1'}} onChange={this.handleChange.bind(this)}>
                                                <Option value="1">咨询</Option>
                                                <Option value="2">建议</Option>
                                                <Option value="3">投诉</Option>
                                            </Select>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">概要</div>
                                            <input name='gaiyao'    onChange={this.getmes.bind(this)}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">客户</div>
                                            <input name='kehu'   onChange={this.getmes.bind(this)}></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1" style={{width:'100%'}}>
                                            <div className="oa-snc-ginput-left" style={{height:'auto',display:'flex',alignItems:'center',justifyContent:'center'}}>服务请求</div>
                                            <textarea name='fuwu_ask'style={{flex:'1',height:'100px'}}   onChange={this.getmes.bind(this)}></textarea>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">创建人</div>
                                            <input name='creat_id'  value="admin" readOnly></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">创建时间</div>
                                            <input name='creat_time'   defaultValue={this.state.nowsdate} readOnly></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">状态</div>
                                            <input name='creationTime' value='新创建' readOnly></input>
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
export default serviceInnovate