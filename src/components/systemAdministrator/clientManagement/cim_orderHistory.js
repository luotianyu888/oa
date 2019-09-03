//客户信息管理 - 历史订单
import React from 'react'
import { number } from 'prop-types';
import Left from './../../commonality/left'
import Navigation from './../../commonality/navigation'
import {  Menu, Dropdown,Button,Breadcrumb,Select,Table,Tag,Divider,Form,Input,Modal,message,unt} from 'antd';
import axios from 'axios';
const Option = Select.Option
class Cim_orderHistory extends React.Component{
    constructor(){
        super()
        this.state={
            data:[],
        }

    }

    //列表
    componentWillMount() {

        const query = this.props.location.search ;
        const arr = query.split('&')
        const id = arr[0].substr(4)
        this.setState({
            ids:id
        })
        var that=this;
        axios({
            method:'get',
            url:'api/people/history_index?id='+id,
        })
        .then(function(response){
            var list1 = response.data.data;
            that.setState({
                list:list1
            })
           console.log(list1)
        })
        .catch(function(err){
         console.log(err)
        })
    } 


   //获取Input的值
   getInput=(e)=>{
    let inputValue = e.target.value;
    let inputName = e.target.name;
    this.setState({
        [inputName] : inputValue
    })
}

 //搜索查询
 submit(){
    var that=this;
    var data = {
        num:this.state.num,
       
    }

    if(data){
        axios({
            method: 'post',
            url:'api/people/history_index',
            data: data
        })
        .then(function (response) {
            if(response.data.code == 1){
                var list = response.data.data;
                list.forEach(element => {
                    element.key=element.lid
                });
                that.setState({
                    list:list
                })
                console.log(list)
            }else{
                message.error(response.data.msg,1)
            }
        
        })
        .catch(function (error) {
         //   message.error(error,1)
        })
    }else{
        message.error('请至少填写一项搜索词！',1)
    }
}



 
    render(){
 
          
          const columns = [
              {
                title: '订单编号',
                dataIndex: 'num',
                key: 'num',
            }, 
            {
                title: '下单日期',
                dataIndex: 'data',
                key: 'data',
            },
            {
                title: '收货地址',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render: (text, record) => (
                    <span>
                        
                        <a href={'./cim_orderHistory_orderDetails?id='+record.id}> 订单详细</a> 
                        
                      {/* <a onClick={showConfirm} data-id={record.id}>删除</a> */}
                    </span>
                  ),
            }

            // {
            //     title: '操作',
            //     dataIndex: 'operation',
            //     key: 'operation',
            //     render: () => (
            //         <span>
            //           <a onClick={this.update.bind(this)}>订单明细</a>
            //         </span>
            //       ),
            // }
        ];
        return(
            <div>
                 <Left></Left>
                 <div className="oa-common-right-box">
                    <Navigation></Navigation>
                    <div className="oa-crumbs-box" style={{padding:'10px 0 10px 10px',boxSizing:'border-box'}}>
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="">客户管理</Breadcrumb.Item>
                            <Breadcrumb.Item href="">客户信息管理</Breadcrumb.Item>
                            <Breadcrumb.Item >历史订单</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-gm-topbox" style={{display:'flex',justifyContent:'space-between'}}>
                        <div style={{display:'flex'}}>
                            <div className="oa-gm-topleft" style={{fontSize:'14px'}}>
                                <div style={{width:'7em'}}>订单编号：</div>
                                <Input name="num" size="small" placeholder="small size" onChange={this.getInput.bind(this)} style={{height:'32px!important'}}/>
                            </div>
                            {/* <div className="oa-gm-topleft">
                                <div style={{width:'7em'}}>客户名称：</div>
                                <Input size="small" placeholder="small size" style={{height:'32px!important'}}/>
                            </div> */}
                        </div>
                        <div>
                             <Button  onClick={this.submit.bind(this)} style={{backgroundColor:'#1798DC',color:'#fff'} }>查询</Button>
                             <Button  href={'./cim_orderHistory_add?id='+this.state.ids}  style={{backgroundColor:'#1798DC',color:'#fff',marginLeft:'50px',}}>新建</Button>
                            <Button href=''  style={{backgroundColor:'#1798DC',marginLeft:'20px',color:'#fff'}}>返回</Button>
                        </div>
                        
                    </div>
                    <div className="oa-gm-tableList">
                     <Table columns={columns} dataSource={this.state.list} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Cim_orderHistory