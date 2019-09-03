//服务处理--去处理
import React from 'react';
import Left from './../../commonality/left'
import {Button,Breadcrumb,Form,Select,message} from 'antd';
import './../../../assets/css/pc/salesLeads_newConstruction.css'
import Navigation from './../../commonality/navigation'
import axios from 'axios';
import { now } from 'moment';
import unt from '../../../until/unt';

const { Option } = Select;

// const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
class ServiceProcessing_goDispose extends React.Component{
    constructor(props){
        super(props)
        this.state={
            nowdate:unt.nowdate(),
            datainfo:[],number:null,gaiyao:null,kehu:null,fuwu_ask:'',handle_time:'',
            handle_name:'',handle_method:'',
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
                handle_name:datainfo.handle_name,
                handle_method:datainfo.handle_method,
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
     //提交表单
    snc_submit(){
        const handle_times=this.state.datainfo.handle_time?this.state.datainfo.handle_time:this.state.nowdate;
        var body={
            id:this.state.datainfo.id,
            number:this.state.number,
            kehu:this.state.kehu,
            fuwu_type:this.state.fuwu_type,
            gaiyao:this.state.gaiyao,
            fuwu_ask:this.state.fuwu_ask,
            handle_name:this.state.handle_name, 
            handle_method:this.state.handle_method,
            handle_time:handle_times,
            status:3,
        }
        if(this.state.handle_name==''  || this.state.handle_name==undefined){
            message.error('请填写处理方法！',1);
            return false;
        }
        if(this.state.handle_method==''  || this.state.handle_method==undefined){
            message.error('请填写处理人！',1);
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
                    that.props.history.push('/serviceProcessing')
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
        const handle_method = this.state.datainfo.handle_method 
                ?<textarea name='handle_method' style={{flex:'1',height:'100px'}}   value={this.state.handle_method} onChange={this.getmes.bind(this)} />
                : <textarea name='handle_method' style={{flex:'1',height:'100px'}}  defaultValue={this.state.handle_method} onChange={this.getmes.bind(this)} />;
        return(
            <div>
                <Left></Left>
                <div className="oa-common-right-box">
                    <Navigation></Navigation>
                    <div className="oa-crumbs-box" style={{padding:'10px'}}>
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="">服务管理</Breadcrumb.Item>
                            <Breadcrumb.Item href="">服务处理</Breadcrumb.Item>
                            <Breadcrumb.Item >处理</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-snc-buttongroup">
                        <Button type="submit" onClick={this.snc_submit.bind(this)}>提交</Button>
                        <Button href="/serviceProcessing">返回</Button>
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
                                            {handle_method}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">处理人</div>
                                            <input name='handle_name'   defaultValue={this.state.handle_name} onChange={this.getmes.bind(this)}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">处理时间</div>
                                            <input value={this.state.datainfo.handle_time?this.state.datainfo.handle_time:this.state.nowdate} readOnly></input>
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
export default ServiceProcessing_goDispose