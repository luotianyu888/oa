//客户信息管理 - 历史订单 - 订单明细

//客户流失管理-确认流失

import React from 'react';
import Left from './../../commonality/left'
import {Button,Breadcrumb,Form, DatePicker} from 'antd';
import './../../../assets/css/pc/salesLeads_newConstruction.css'
import Navigation from './../../commonality/navigation'
import axios from 'axios';


class cim_orderHistory_orderDetails extends React.Component{
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


   //查询
 componentWillMount () {
    const query = this.props.location.search ;
    const arr = query.split('&')
    const id = arr[0].substr(4)
    //console.log(id)
    var that=this;
    axios({
        method:'get',
        url:'api/people/history_detail?id='+id,
        
    })
    .then(function(response){
        var datall = response.data.data; 
        var list = response.data.data.zhipai;
     
        that.setState({
          
            datall:datall,
            data:datall.data,
            num:datall.num,
            data:datall.data,
            status:datall.status,
            address:datall.address,
            money:datall.money,

    
        })
       console.log(datall)
         
    })
    .catch(function(err){
 //   message.error(err)
    })
    
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
                        <Button type="submit" >保存</Button>
                        <Button href="">返回</Button>
                    </div>
                    <div className="oa-snc-outbox">
                        <Form>
                            <div className="oa-snc-inbox">
                                <ul className="oa-snc-formbox">
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">订单编号</div>
                                            <input name=' orderNumber'   defaultValue={this.state.num} ></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">订单日期</div>
                                            <input name='orderTime'  defaultValue={this.state.data} ></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">收货地址</div>
                                            <input  name='shippingAddress'  defaultValue={this.state.address} ></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">总金额</div>
                                            <input name='totalMoney'  defaultValue={this.state.money} ></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">状态</div>
                                            <input  name='state'  defaultValue={this.state.status} ></input>
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

export default cim_orderHistory_orderDetails