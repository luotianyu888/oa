//服务反馈 --反馈

import React from 'react';
import Left from './../../commonality/left'
import {Button,Breadcrumb,Form,Select,message} from 'antd';
import './../../../assets/css/pc/salesLeads_newConstruction.css'
import Navigation from './../../commonality/navigation'
import axios from 'axios';

const { Option } = Select;

class serviceFeedback_coupleBack extends React.Component{
    constructor(props){
        super(props)
        this.state={
            datainfo:[],number:null,gaiyao:null,kehu:null,fuwu_ask:'',handle_result:'',pleased:'',
        }
    }
    //初始化数据
    componentWillMount () {
        const query = this.props.location.search ;
        const arr = query.split('&')
        const id = arr[0].substr(4)
        //console.log(id);return false;
        var that=this;
        axios({
            method:'get',
            url:'api/service/service_edit?id='+id,
        })
        .then(function(response){
            var datainfo = response.data.data;
            that.setState({
                datainfo:datainfo,
                number:datainfo.number,
                kehu:datainfo.kehu,
                gaiyao:datainfo.gaiyao,
                kehu:datainfo.kehu,
                fuwu_ask:datainfo.fuwu_ask,
                handle_result:datainfo.handle_result,
                pleased:datainfo.pleased,
            })
            
        })
        .catch(function(err){
         message.error(err)
        })
       
    }
    
    //获取Input值
    getmes(e){
        let inputValue = e.target.value;
        let inputName = e.target.name;
        this.setState({
            [inputName] : inputValue
        })
        
    }
    handleChange(value){
        this.setState({
            fuwu_type:value,
        })
    }
    manyi(value){
        this.setState({
            pleased:value,
        })
     }
     //提交表单
    snc_submit(){
        var body={
            id:this.state.datainfo.id,
            number:this.state.number,
            kehu:this.state.kehu,
            fuwu_type:this.state.fuwu_type,
            gaiyao:this.state.gaiyao,
            fuwu_ask:this.state.fuwu_ask,
            handle_result:this.state.handle_result,
            pleased:this.state.pleased,
        }
        if(this.state.handle_result==''  || this.state.handle_result==undefined){
            message.error('请填写处理结果！',1);
            return false;
        }
        if(this.state.pleased==''  || this.state.pleased==undefined){
            message.error('请选择满意度！',1);
            return false;
        }
        var that=this;
        axios({
            method: 'post',
            url: 'api/service/service_edit',
            data: body
        })
        .then(function (response) {
            if(response.data.code == 1){
                message.success(response.data.msg,1,function(){
                    that.props.history.push('/serviceFeedback')
                })
            }else{
                message.error(response.data.msg,1)
            }
           
        })
        .catch(function (error) {
             message.error(error,1)
        })
    }
    render(){
        const fuwu_type = this.state.datainfo.fuwu_type
                ?<Select size="large" defaultValue={this.state.datainfo.fuwu_type} style={{ width: 230 }} onChange={e=>{this.handleChange(e)}}>
                        <Option value="1">咨询</Option>
                        <Option value="2">建议</Option>
                        <Option value="3">投诉</Option>
                </Select>
                :'';
        return(
            <div>
                <Left></Left>
                <div className="oa-common-right-box">
                    <Navigation></Navigation>
                    <div className="oa-crumbs-box" style={{padding:'10px'}}>
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="">服务管理</Breadcrumb.Item>
                            <Breadcrumb.Item href="">服务反馈</Breadcrumb.Item>
                            <Breadcrumb.Item >反馈</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-snc-buttongroup">
                        <Button type="submit" onClick={this.snc_submit.bind(this)}>提交</Button>
                        <Button href="/serviceFeedback">返回</Button>
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
                                            {fuwu_type}
                                        </div>
                                       
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">概要</div>
                                            <input name='gaiyao'   defaultValue={this.state.gaiyao} onChange={this.getmes.bind(this)}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">客户</div>
                                            <input name='kehu'   defaultValue={this.state.kehu} onChange={this.getmes.bind(this)}></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1" style={{width:'100%'}}>
                                            <div className="oa-snc-ginput-left" style={{height:'auto',display:'flex',alignItems:'center',justifyContent:'center'}}>服务请求</div>
                                            <textarea name='fuwu_ask' value={this.state.fuwu_ask}  style={{flex:'1',height:'100px'}}  onChange={this.getmes.bind(this)}/>
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
                                            <textarea value={this.state.datainfo.handle_method} style={{flex:'1',height:'100px'}}  onChange={this.getmes.bind(this)} ></textarea>
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
                                            <input defaultValue={this.state.handle_result} name='handle_result' onChange={this.getmes.bind(this)}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">满意度</div>
                                            <Select size="large" defaultValue="请选择" style={{ width: 230 }} onChange={e=>{this.manyi(e)}}>
                                                    <Option value="5">☆☆☆☆☆</Option>
                                                    <Option value="4">☆☆☆☆</Option>
                                                    <Option value="3">☆☆☆</Option>
                                                    <Option value="2">☆☆</Option>
                                                    <Option value="1">☆</Option>
                                            </Select>
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
export default serviceFeedback_coupleBack