//客户开发计划--制定

import React from 'react';
import Left from './../../commonality/left'
import Navigation from './../../commonality/navigation'
import {Button,Breadcrumb,Form, DatePicker,message,Modal} from 'antd';
import  './../../../assets/css/pc/cdp_formulate.css'
import axios from 'axios';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class cdp_formulate extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],datall:[],date_time:'',jihua:''
        }
    }
    //初始化数据
    componentWillMount () {
        const query = this.props.location.search;
        const arr = query.split('&')
        const sid = arr[0].substr(4)
        var that=this;
        axios({
            method:'get',
            url:'api/yingxiao/plan_formulate?id='+sid,
        })
        .then(function(response){
            var datall = response.data.data;
            var data =  response.data.data.jihua_list;
            that.setState({
                datall:datall,
                data:data,
            })
        })
        .catch(function(err){
         message.error(err)
        })
        
    } 
    //获取Input框的值
    getInput(e){
        let inputValue = e.target.value;
        let inputName = e.target.name;
        this.setState({
            [inputName] : inputValue
        })
    }
    //点击获取时间
    zpshijian(date){
        this.setState({
            date_time:date.format('YYYY-MM-DD'),
        })
    }
    //删除计划
    delete(e){
        const { confirm } = Modal;
        const index= e.target.getAttribute('data-key')
        var that=this;
        confirm({
            title: '你确定要删除?',
            content: '删除之后将不可恢复',
            onOk() {
                axios({
                    method: 'post',
                    url: 'api/yingxiao/plan_del',
                    data: {
                        id:index,
                        fid:that.state.datall.sid,
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
        
            },
        });          
    }
    //修改编辑计划项
    update(e){
            const upkey =e.target.getAttribute('data-key')
            if(this.state.upjihua==undefined || !this.state.upjihua){
                message.error('计划项不能为空',1)
            }else{
                var body = {
                    id:upkey,
                    fid:this.state.datall.sid,
                    jihua:this.state.upjihua,
                }
                var that=this;
                axios({
                method: 'post',
                url: 'api/yingxiao/plan_edit',
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
    //创建计划项
    snc_submit(){
        if(this.state.date_time==undefined || !this.state.date_time || !this.state.jihua || this.state.jihua==undefined){
            message.error('请完整填写日期和计划',1)
        }else{
            var body = {
                fid:this.state.datall.sid,
                date_time:this.state.date_time,
                jihua:this.state.jihua,
            }
            //console.log(body)
            var that=this;
            axios({
            method: 'post',
            url: 'api/yingxiao/plan_formulate',
            data: body
            })
            .then(function (response) {
                if(response.data.code == 1){
                    message.success(response.data.msg,1)
                    that.setState({
                        data:response.data.data,
                        jihua:'',
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
        
        //循环计划项列表
        const Datas= this.state.data
            ?
            (this.state.data).map((v,k)=>{
            return(
                <div className='oa-cdpf-formbox-in' style={{width:'100%'}} key={k}>
                <div className="oa-cdpf-frombox-left">{v.date_time }</div>
                <input className="oa-cdpf-frombox-right" defaultValue={v.jihua} onChange={this.getInput.bind(this)} name='upjihua'></input>
                <div className="oa-cdpf-frombox-delete"  data-key={v.id} onClick={this.update.bind(this)}>保存</div>   
                <div className="oa-cdpf-frombox-delete"  data-key={v.id} onClick={this.delete.bind(this)}>删除</div>   
                </div>
            )
            
        })
        :''
       
        return(
            <div>
                <Left></Left>
                <div className="oa-common-right-box">
                    <Navigation></Navigation>
                    <div className="oa-crumbs-box">
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="/salesLeads_management">营销管理</Breadcrumb.Item>
                            <Breadcrumb.Item href="/cd_plan">客户开发计划</Breadcrumb.Item>
                            <Breadcrumb.Item >制定计划</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-snc-buttongroup">
                        <Button href={'./cdp_execute?id='+this.state.datall.sid}>执行计划</Button>
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
                                    <div className="oa-cdpf-frombox-right">计划项</div>
                                </div>
                                <div className="oa-cdpf-fromdata-list">
                                    {
                                       Datas
                                    }
                                </div>
                                <Form name='obj'>
                                    <ul className="oa-cdpf-formmenu">
                                       <div className="oa-cdpf-formmenu-left">
                                            <li className="oa-cdpf-formmenu-layer1">
                                                <div>日期</div>
                                                <DatePicker onChange={e=>{this.zpshijian(e)}} placeholder="请选择日期" name='date_time'  />
                                            </li>
                                            <li className="oa-cdpf-formmenu-layer2">
                                                <div>计划项</div>
                                                <input name='jihua' onChange={this.getInput.bind(this)} value={this.state.jihua}></input>
                                            </li>
                                       </div>
                                        <li className="oa-cdpf-formmenu-layer3">
                                            <input type="submit" onClick={this.snc_submit.bind(this)}></input>
                                        </li>
                                    </ul>
                                </Form>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default cdp_formulate