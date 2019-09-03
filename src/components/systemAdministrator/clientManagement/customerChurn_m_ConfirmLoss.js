//客户流失管理-确认流失

import React from 'react';
import Left from './../../commonality/left'
import {Button,Breadcrumb,Form, DatePicker,message} from 'antd';
import './../../../assets/css/pc/salesLeads_newConstruction.css'
import Navigation from './../../commonality/navigation'
import axios from 'axios';
class CustomerChurn_m_ConfirmLoss extends React.Component{
    constructor(){
        super()
        this.state={
            jurisdiction:true,
            number:'',
            customerName:'',
            username:'',
            orderTime:'',
            reprieve:'',
            drainCauses:''
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
        url:'api/people/liushi_queren?id='+id,
        
    })
    .then(function(response){
        var datall = response.data.data; 
        var list = response.data.data.zhipai;
     
        that.setState({
          
            datall:datall,
            data:datall.data,
            usernum:datall.usernum,
            username:datall.username,
            peoplem:datall.peoplem,
            liushi_data:datall.liushi_data,
            zanhuan:datall.zanhuan,
            queren:datall.queren,
        })
  
    })
    .catch(function(err){
      message.error(err)
    })
    
} 


getInput=(e)=>{
    let inputValue = e.target.value;
    let inputName = e.target.name;
    this.setState({
        [inputName] : inputValue
    })     
}


data(date){
    this.setState({
        time:date.format('YYYY-MM-DD'),
    })
}

 //提交表单
 snc_submit(){
    const query = this.props.location.search ;
    const arr = query.split('&')
    const id = arr[0].substr(4)
  
    var body = {
        id: id,
        liushi_data:this.state.time,
        queren:this.state.queren,

    }

    var that=this;
      axios({
        method: 'post',
        url: 'api/people/liushi_queren',
        data: body
       })
       .then(function (response) {
        if(response.data.code==1){
            message.success(response.data.msg ,0.5,function(){
                that.props.history.push('/customerChurn_management')
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
                            <Breadcrumb.Item href="">客户流失管理</Breadcrumb.Item>
                            <Breadcrumb.Item >确认流失</Breadcrumb.Item>
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
                                            <div className="oa-snc-ginput-left">客户编号</div>
                                            <input  readOnly name='usernum'   defaultValue={this.state.usernum} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">客户名称</div>
                                            <input readOnly name='username'  defaultValue={this.state.username} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">客户经理</div>
                                            <input  readOnly name='peoplem'  defaultValue={this.state.peoplem} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">确认时间</div>
                                            <DatePicker style={{width:'100%'}}  defaultValue={this.state.liushi_data}  name="liushi_data" onChange={e=>{this.data(e)}}/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1" style={{width:'100%'}}>
                                            <div className="oa-snc-ginput-left">暂缓流失</div>
                                            <input  readOnly name='zanhuan'  defaultValue={this.state.zanhuan} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-textarea">
                                            <div className="oa-snc-ginput-left2">流失原因</div>
                                            <textarea name='queren' value={this.state.queren} onChange={e=>{this.getInput(e)}}></textarea>
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

export default CustomerChurn_m_ConfirmLoss