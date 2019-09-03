//客户信息管理 - 交往记录 - 新建

import React from 'react';
import Left from './../../commonality/left'
import {Button,Breadcrumb,Form, DatePicker,message} from 'antd';
import './../../../assets/css/pc/salesLeads_newConstruction.css'
import Navigation from './../../commonality/navigation'
import axios from 'axios';

// const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
class cim_communicationRecord_new extends React.Component{
    constructor(){
        super()
        this.state={
            jurisdiction:true,
            number:'',
            source :'',
            username:'',
            successRate:'',
            outline:''
        }
    }

 //查询
 componentWillMount () {
    const query = this.props.location.search ;
    const arr = query.split('&')
    const id = arr[0].substr(4)
    //console.log(id)
    var that=this;
    axios({
        method:'get',
        url:'api/people/jilu_edit?id='+id,
        
    })
    .then(function(response){
        var datall = response.data.data; 
        var list = response.data.data.zhipai;
     
        that.setState({
          
            datall:datall,
            data:datall.data,
            address:datall.address,
            gaiyao:datall.gaiyao,
            beizhu:datall.beizhu,
            detail:datall.detail,

    
        })
       console.log(datall)
         
    })
    .catch(function(err){
 //   message.error(err)
    })
    
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
    const query = this.props.location.search ;
    const arr = query.split('&')
    const id = arr[0].substr(4)
    

 

    var body = {
        pid: id,
        data:this.state.data,
        address:this.state.address,
        gaiyao:this.state.gaiyao,
        tel:this.state.tel,
        beizhu:this.state.beizhu,
        detail:this.state.detail,
      
    }


    var that=this;
      axios({
        method: 'post',
        url: 'api/people/jilu_add',
        data: body
       })
       .then(function (response) {
        if(response.data.code==1){
            message.success(response.data.msg ,0.5,function(){
                that.props.history.push('/cim_communicationRecord')
               })
           }else{
            message.error(response.data.msg,1)
           }
       })
       .catch(function (error) {
          console.log(error);
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
                            <Breadcrumb.Item href="">客户管理</Breadcrumb.Item>
                            <Breadcrumb.Item href="">交往记录</Breadcrumb.Item>
                            <Breadcrumb.Item >新建交往记录</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-snc-buttongroup">
                        <Button type="submit" onClick={this.snc_submit.bind(this)}>保存</Button>
                        <Button href="">返回</Button>
                    </div>
                    <div className="oa-snc-outbox">
                        <Form>
                            <div className="oa-snc-inbox">
                                <ul className="oa-snc-formbox">
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">时间</div>
                                            <input name='data'   defaultValue={this.state.data} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">地点</div>
                                            <input name='address'  defaultValue={this.state.address} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">概要</div>
                                            <input  name='gaiyao'  defaultValue={this.state.gaiyao} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">备注</div>
                                            <input name='beizhu'  defaultValue={this.state.beizhu} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                    </li>
                                    <li>
                                    <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">详细信息</div>
                                            <input name='detail'  defaultValue={this.state.detail} onChange={e=>{this.getInput(e)}}></input>
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

export default cim_communicationRecord_new