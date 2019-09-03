//客户信息管理 - 历史订单 - 订单明细

//客户流失管理-确认流失

import React from 'react';
import Left from './../../commonality/left'
import {Button,Breadcrumb,Form, DatePicker,message} from 'antd';
import './../../../assets/css/pc/salesLeads_newConstruction.css'
import Navigation from './../../commonality/navigation'
import axios from 'axios';


class cim_orderHistory_add extends React.Component{
    constructor(){
        super()
        this.state={
            jurisdiction:true,
            orderNumber:'',
            orderTime:'',
            shippingAddress:'',
            totalMoney:'',
            state:'',
        }
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
        pid: id,
        data:this.state.time,
        address:this.state.address,
        num:this.state.num,
        money:this.state.money,
        status:this.state.status,
        
    }


    var that=this;
      axios({
        method: 'post',
        url: 'api/people/history_add',
        data: body
       })
       .then(function (response) {
        if(response.data.code==1){
            message.success(response.data.msg ,0.5,function(){
                that.props.history.push('/cim_orderHistory')
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
                            <Breadcrumb.Item href="">历史订单</Breadcrumb.Item>
                            <Breadcrumb.Item >订单明细</Breadcrumb.Item>
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
                                            <div className="oa-snc-ginput-left">订单编号</div>
                                            <input name='num'   defaultValue={this.state.num} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">订单日期</div>
                                            <DatePicker style={{width:'100%'}}   name="data" onChange={e=>{this.data(e)}}/>
                                              
                                            {/* <input name='data'  defaultValue={this.state.data} onChange={e=>{this.getInput(e)}}></input> */}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">收货地址</div>
                                            <input  name='address'  defaultValue={this.state.address} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">总金额</div>
                                            <input name='money'  defaultValue={this.state.money} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">状态</div>
                                            <input  name='status'  defaultValue={this.state.status}  onChange={e=>{this.getInput(e)}}></input>
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

export default cim_orderHistory_add