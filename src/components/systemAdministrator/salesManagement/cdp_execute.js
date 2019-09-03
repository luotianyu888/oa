//客户开发计划--执行

import React from 'react';
import Left from './../../commonality/left'
import Navigation from './../../commonality/navigation'
import {Button,Breadcrumb,Form, DatePicker,message,Modal} from 'antd';
import  './../../../assets/css/pc/cdp_formulate.css'
import axios from 'axios';

class cdp_execute extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],datall:[],upxiaoguo:'',kaifa_status:''
        }
    }

    componentWillMount () {
        const query = this.props.location.search;
        const arr = query.split('&')
        const sid = arr[0].substr(4)
        //console.log(sid)
        var that=this;
        axios({
            method:'get',
            url:'api/yingxiao/plan_execute?id='+sid,
        })
        .then(function(response){
            var datall = response.data.data;
            var data =  response.data.data.jihua_list;
            that.setState({
                datall:datall,
                data:data,
                kaifa_status:datall.kaifa_status,
            })
        })
        .catch(function(err){
         message.error(err)
        })
        
    } 

    getInput(e){
        let inputValue = e.target.value;
        let inputName = e.target.name;
        this.setState({
            [inputName] : inputValue
        })
    }

    update(e){
            const upkey =e.target.getAttribute('data-key')
            if(this.state.upxiaoguo==undefined || !this.state.upxiaoguo){
                message.error('执行效果不能为空',1)
            }else{
                var body = {
                    id:upkey,
                    fid:this.state.datall.sid,
                    xiaoguo:this.state.upxiaoguo,
                }
                var that=this;
                axios({
                method: 'post',
                url: 'api/yingxiao/plan_execute',
                data: body
                })
                .then(function (response) {
                    if(response.data.code == 1){
                        message.success(response.data.msg,1)
                        that.setState({
                            data:response.data.data,
                        })
                    }else{
                        message.error(response.data.msg,1)
                    }
                })
                .catch(function (error) {
                    message.error(error,1)
                });
            }
    }
    kaifa_succ(e){
        var that=this
        const sid =e.target.getAttribute('data-key')
        const kaifa_status=that.state.kaifa_status
        
        if(kaifa_status==1){
            message.error('该计划已经开发成功',1)
        }else if(kaifa_status==2){
            message.error('该计划已经终止开发',1)
        }else{
            axios({
                method: 'get',
                url: 'api/yingxiao/plan_success?sid='+sid,
            })
            .then(function (response) {
                if(response.data.code == 1){
                    message.success(response.data.msg,1)
                    that.setState({
                        kaifa_status:response.data.data,
                    })
                }else{
                    message.error(response.data.msg,1)
                }
            })
            .catch(function (error) {
                message.error(error,1)
            });
        }
    }
    kaifa_over(e){
        var that=this
        const sid =e.target.getAttribute('data-key')
        const kaifa_status=that.state.kaifa_status
        
        if(kaifa_status==1){
            message.error('该计划已经开发成功',1)
        }else if(kaifa_status==2){
            message.error('该计划已经终止开发',1)
        }else{
            axios({
                method: 'get',
                url: 'api/yingxiao/plan_over?sid='+sid,
               
            })
            .then(function (response) {
                if(response.data.code == 1){
                    message.success(response.data.msg,1)
                    that.setState({
                        kaifa_status:response.data.data,
                    })
                }else{
                    message.error(response.data.msg,1)
                }
            })
            .catch(function (error) {
                message.error(error,1)
            });
        }
    }
    render(){
        
        const Datas= this.state.data
            ?
        (this.state.data).map((v,k)=>{
            return(
                <div className='oa-cdpf-formbox-in' style={{width:'100%'}} key={k}>
                <div className="oa-cdpf-frombox-left">{v.date_time }</div>
                <div className="oa-cdpf-frombox-left">{v.jihua }</div>
                <input className="oa-cdpf-frombox-right" defaultValue={v.xiaoguo} onChange={this.getInput.bind(this)} name='upxiaoguo'></input>
                <div className="oa-cdpf-frombox-delete"  data-key={v.id} onClick={this.update.bind(this)}>保存</div>   
                   
                </div>
            )
            
        })
        :''
       //日期选择
        const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
       
        return(
            <div>
                <Left></Left>
                <div className="oa-common-right-box">
                    <Navigation></Navigation>
                    <div className="oa-crumbs-box">
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="/salesLeads_management">营销管理</Breadcrumb.Item>
                            <Breadcrumb.Item href="/cd_plan">客户开发计划</Breadcrumb.Item>
                            <Breadcrumb.Item >执行计划</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-snc-buttongroup">
                        <Button data-key={this.state.datall.sid} onClick={this.kaifa_succ.bind(this)}>开发成功</Button>
                        <Button data-key={this.state.datall.sid} onClick={this.kaifa_over.bind(this)}>终止开发</Button>
                        <Button href={'./cdp_formulate?id='+this.state.datall.sid}>制定计划</Button>
                        <Button href="./cd_plan">返回</Button>
                    </div>
                    <div className="oa-cdpf-outbox">
                        <div className="oa-cdpf-inbox">
                            <ul className="oa-cdpf-datalist">
                                <li>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">编号</div>
                                        <div className="oa-cdpf-liyer-right">{this.state.datall.usernum}</div>
                                    </div>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">机会来源</div>
                                        <div className="oa-cdpf-liyer-right">{this.state.datall.jihui_from}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">客户名称</div>
                                        <div className="oa-cdpf-liyer-right dh">{this.state.datall.kehu_name}</div>
                                    </div>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">成功几率</div>
                                        <div className="oa-cdpf-liyer-right">{this.state.datall.success_jilv}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="oa-cdpf-lg-layer">
                                        <div className="oa-cdpf-groupbutton">概要</div>
                                        <div className="oa-cdpf-groupbutton-right">
                                            <p>
                                           {this.state.datall.abstract}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">联系人</div>
                                        <div className="oa-cdpf-liyer-right dh">{this.state.datall.lianxi_name}</div>
                                    </div>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">联系电话</div>
                                        <div className="oa-cdpf-liyer-right">{this.state.datall.lianxi_tel}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="oa-cdpf-lg-layer">
                                        <div className="oa-cdpf-groupbutton">机会描述</div>
                                        <div className="oa-cdpf-groupbutton-right">
                                            <p>
                                                {this.state.datall.jihui_desc}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">创建人</div>
                                        <div className="oa-cdpf-liyer-right dh">{this.state.datall.creat_name}</div>
                                    </div>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">创建时间</div>
                                        <div className="oa-cdpf-liyer-right">{this.state.datall.creatTime}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">指派给</div>
                                        <div className="oa-cdpf-liyer-right dh">{this.state.datall.zhipai_name}</div>
                                    </div>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">指派时间</div>
                                        <div className="oa-cdpf-liyer-right">{this.state.datall.zhipai_time}</div>
                                    </div>
                                </li>
                                <li style={{backgroundColor:'#ccc',height:'1px'}}></li>
                                <div className="oa-cdpf-frombox-out">
                                    <div className="oa-cdpf-frombox-left">日期</div>
                                    <div className="oa-cdpf-frombox-left">计划项</div>
                                    <div className="oa-cdpf-frombox-right">执行效果</div>
                                </div>
                                <div className="oa-cdpf-fromdata-list">
                                    {
                                       Datas
                                    }
                                </div>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default cdp_execute