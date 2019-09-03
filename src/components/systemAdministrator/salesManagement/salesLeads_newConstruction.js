//销售机会管理--新建

import React from 'react';
import Left from './../../commonality/left'
import {Button,Breadcrumb,Form, DatePicker} from 'antd';

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
            zhipai:[],userid:'',
        }
    }



    getInput=(e)=>{
        let inputValue = e.target.value;
        let inputName = e.target.name;
        this.setState({
            [inputName] : inputValue
        })     
    }

    //提交表单
    snc_submit(){

        var body = {
            userid: this.state.userid,
            kehu_name:this.state.kehu_name,
          
        }
          // console.log(body);
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
        //     console.log(date, dateString);
        // }
        // 权限判定是否显示
        const jurisdiction =this.state.jurisdiction
        //console.log(jurisdiction)

        const  als= jurisdiction
                    ?<li>
                        <div className="oa-snc-groupinput1">
                            <div className="oa-snc-ginput-left">指派给</div>
                            <input ></input>
                        </div>
                        <div className="oa-snc-groupinput1">
                            <div className="oa-snc-ginput-left">指派时间</div>
                            <input ></input>
                        </div>
                    </li>
                :'未加载到内容'
       
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
                        
                        <Button href="">返回</Button>
                    </div>
                    <div className="oa-snc-outbox">
                        <Form id="formdata">
                            <div className="oa-snc-inbox">
                                <ul className="oa-snc-formbox">
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">编号</div>
                                            
                                            <input onChange={e=>{this.getInput(e)}} name="userid" ></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">机会来源</div>
                                            <input ></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">客户名称</div>
                                            <input onChange={e=>{this.getInput(e)}} name="kehu_name"></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">成功几率</div>
                                            <input ></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-textarea">
                                            <div className="oa-snc-ginput-left2">概要</div>
                                            <textarea></textarea>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">联系人</div>
                                            <input ></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">联系电话</div>
                                            <input ></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-textarea">
                                            <div className="oa-snc-ginput-left2">机会描述</div>
                                            <textarea></textarea>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">创建人</div>
                                            <input ></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">创建时间</div>
                                            <div className="oa-snc-ginput-right">
                                                {/* <DatePicker onChange={onChange} style={{width:'100%'}} />
                                                <DatePicker    style={{width:'100%'}}/> */}
                                            </div>
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