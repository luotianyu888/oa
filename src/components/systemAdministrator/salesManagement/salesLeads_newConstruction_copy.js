//销售机会管理--新建

import React from 'react';
import Left from './../../commonality/left'
import {Button,Breadcrumb,Form,Select,DatePicker} from 'antd';
import './../../../assets/css/pc/salesLeads_newConstruction.css'
import Navigation from './../../commonality/navigation'
import { now } from 'moment';
import axios from 'axios';
import { link } from 'fs';

// const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
class salesLeads_newConstruction extends React.Component{
    constructor(){
        super()
        this.state={
            jurisdiction:true,
            newsdate:new Date(now()).toLocaleString(),
            zhipai:[],link_id:'',zhipai_name:'',zhipai_time:'',
        }
        
    }



    componentWillMount2() {
        const query = this.props.location.search;
        const arr = query.split('&')
        const sid = arr[0].substr(4)
        //console.log(sid)
        var that = this;
        axios({
            method: 'get',
            url: 'api/yingxiao/xiaoshou_edit?sid=' + sid,
        })
            .then(function (response) {
                var datall = response.data.data;
                var list = response.data.data.zhipai; 

                that.setState({
                    zhipai: list,
                    datall: datall,
                    usernum: datall.usernum,
                    jihui_from: datall.jihui_from,
                    kehu_name: datall.kehu_name,
                    success_jilv: datall.success_jilv,
                    abstract: datall.abstract,
                    lianxi_name: datall.lianxi_name,
                    lianxi_tel: datall.lianxi_tel,
                    jihui_desc: datall.jihui_desc,
                    creat_name: datall.creat_name,
                    creatTime: datall.creatTime,
                    zhipai_name: datall.zhipai_name,
                    zhipai_time: datall.zhipai_time,  
                    
                    status: datall.status,
                })

            })
            // .catch(function (err) {
            //     message.error(err)
            // })

    }







    componentWillMount() {
        var that=this;
        axios({
            method:'get',
            url:'api/yingxiao/xiaoshou_add',
        })
        .then(function(response){
            var list1 = response.data.data;
            that.setState({
                zhipai:list1
            })
            //console.log(list1)
        })
        .catch(function(err){
         console.log(err)
        })
        
    } 

    getInput=(e)=>{
        let inputValue = e.target.value;
        let inputName = e.target.name;
        this.setState({
            [inputName] : inputValue
        })     
    }

 
    handleChange(value){
        this.setState({
            zhipai_name:value,
        })
    }

    zpshijian(date){
        this.setState({
            zhipai_time:date.format('YYYY-MM-DD'),
        })
    }
    //提交表单
    snc_submit(){

        var body = {
            userid: this.state.userid,
            creat_name:'zhansan',
            creat_time:this.state.newsdate,
            zhipai_name:this.state.zhipai_name,
            zhipai_time:this.state.zhipai_time,
            jihui_from:this.state.jihui_from,
            kehu_name:this.state.kehu_name,
            success_jilv:this.state.success_jilv,
            abstract:this.state.abstract,
            lianxi_name:this.state.lianxi_name,
            lianxi_tel:this.state.lianxi_tel,
            jihui_desc:this.state.jihui_desc,
        }
        
        console.log(body);
        axios({
         method: 'post',
         url: 'api/people/add',
         data: body
        })
        .then(function (response) {
           console.log(response.data);
        })
        .catch(function (error) {
           console.log(error);
        });
        
    }
 
  

    render(){
        const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
        // function onChange(date, dateString) {
        //    // console.log(date, dateString);
        // }
        // 权限判定是否显示
        const jurisdiction =this.state.jurisdiction
        //console.log(jurisdiction)
        //select
        const Option = Select.Option;
        // function  handleChange(value) {
        //    console.log(value);
        // }
        const  als= jurisdiction
                    ?<li>
                        <div className="oa-snc-groupinput1">
                            <div className="oa-snc-ginput-left">指派给</div>
                            <Select size="large" defaultValue="请选择" style={{ width: 230 }} onChange={e=>{this.handleChange(e)}}>
                                {
                                    this.state.zhipai.map(function(val,key){
                                        return (<Option key={key} value={val.id}>{val.username}</Option>);
                                    })
                                }
                            </Select>
                        </div>
                        <div className="oa-snc-groupinput1">
                            <div className="oa-snc-ginput-left">指派时间</div>
                            <div className="oa-snc-ginput-right">
                                <DatePicker   style={{width:'100%'}} name="zhipai_time" onChange={e=>{this.zpshijian(e)}}/>
                            </div>
                        </div>
                    </li>
                    :''
        
        return(
            <div>
                <Left></Left>
                <div className="oa-common-right-box">
                    <Navigation></Navigation>
                    <div className="oa-crumbs-box">
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="">营销管理</Breadcrumb.Item>
                            <Breadcrumb.Item href="">销售机会管理</Breadcrumb.Item>
                            <Breadcrumb.Item >新建销售机会</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-snc-buttongroup">
                        <Button type="submit" onClick={this.snc_submit.bind(this)}>提交</Button>
                        <Button href="javascript:history.go(-1)">返回</Button>
                    </div>
                    <div className="oa-snc-outbox">
                        <Form id="formdata">
                            <div className="oa-snc-inbox">
                                <ul className="oa-snc-formbox">
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">用户编号</div>
                                            <input onChange={e=>{this.getInput(e)}} name="userid"></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">机会来源</div>
                                            <input onChange={e=>{this.getInput(e)}} name="jihui_from"></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">客户名称</div>
                                            <input onChange={e=>{this.getInput(e)}} name="kehu_name"></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">成功几率</div>
                                            <input onChange={e=>{this.getInput(e)}} name="success_jilv"></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-textarea">
                                            <div className="oa-snc-ginput-left2">概要</div>
                                            <textarea onChange={e=>{this.getInput(e)}} name="abstract"></textarea>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">联系人</div>
                                            <input onChange={e=>{this.getInput(e)}} name="lianxi_name"></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">联系电话</div>
                                            <input onChange={e=>{this.getInput(e)}} name="lianxi_tel"></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-textarea">
                                            <div className="oa-snc-ginput-left2">机会描述</div>
                                            <textarea onChange={e=>{this.getInput(e)}} name="jihui_desc"></textarea>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">创建人</div>
                                            <input value="张三" readOnly></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">创建时间</div>
                                            <input value={this.state.newsdate} readOnly></input>
                                            {/*<div className="oa-snc-ginput-right">*/}
                                                {/* <DatePicker onChange={onChange} style={{width:'100%'}} /> */}
                                                {/*<DatePicker    style={{width:'100%'}}/>
                                            </div>*/}
                                        </div>
                                    </li>
                                    {als}
                                </ul>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default salesLeads_newConstruction