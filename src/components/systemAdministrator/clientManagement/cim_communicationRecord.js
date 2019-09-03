//客户信息管理 - 交往记录
import React from 'react'
import { number } from 'prop-types';
import Left from './../../commonality/left'
import Navigation from './../../commonality/navigation'
import {  Menu, Dropdown,Button,Breadcrumb,Select,Table,Tag,Divider,Form,Input,Modal,message,unt} from 'antd';
import axios from 'axios';
const Option = Select.Option
class Cim_communicationRecord extends React.Component{
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
            url:'api/people/jilu_index?id='+id,
        })
        .then(function(response){
            var list1 = response.data.data;
            that.setState({
                list:list1
            })
           console.log(id)
        })
        .catch(function(err){
         console.log(err)
        })
    } 




   
   
    render(){
       
        const { confirm } = Modal;
        function showConfirm(e) {
            var id=e.target.getAttribute("data-id");

            confirm({
              title: '你确定要删除?',
              content: '删除之后将不可恢复',
              onOk() {
                return new Promise((resolve, reject) => {
                  setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                })
                .catch(() =>
                    axios({
                        method: 'post',
                        url: 'api/people/jilu_delete',
                        data: {
                            id:id,
                          //  lid:linkid
                        }
                    })
                    .then(function (response) {
                        
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                 );
              },
              onCancel() {},
            });
          }
          


          const columns = [
              {
                title: '时间',
                dataIndex: 'data',
                key: 'data',
            }, 
            {
                title: '地点',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '概要',
                dataIndex: 'gaiyao',
                key: 'gaiyao',
            },
            {
                title: '详情信息',
                dataIndex: 'detail',
                key: 'detail',
            },
            {
                title: '备注',
                dataIndex: 'beizhu',
                key: 'beizhu',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render: (text, record) => (
                    <span>
                      <a href={'./cim_communicationRecord_edit?id='+record.id}>修改</a> 
                      <Divider type="vertical" />
                      <a onClick={showConfirm} data-id={record.id}>删除</a>
                    </span>
                  ),
            }
        ];
        return(
            <div>
                 <Left></Left>
                 <div className="oa-common-right-box">
                    <Navigation></Navigation>
                    <div className="oa-crumbs-box">
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="">客户管理</Breadcrumb.Item>
                            <Breadcrumb.Item >客户信息管理</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-gm-topbox" style={{display:'flex',justifyContent:'space-between'}}>
                        {/* <div style={{display:'flex'}}>
                            <div className="oa-gm-topleft" style={{fontSize:'14px'}}>
                                <div style={{width:'7em'}}>客户名称：</div>
                                <Input size="small" placeholder="small size" style={{height:'32px!important'}}/>
                            </div>
                            <div className="oa-gm-topleft">
                            <div style={{width:'7em'}}>客户状态：</div>
                                <Input size="small" placeholder="small size" style={{height:'32px!important'}}/>
                            </div>
                        </div> */}
                        <div>
                            <Button href ={'./cim_communicationRecord_new?id='+this.state.ids}  style={{backgroundColor:'#1798DC',color:'#fff'}}>新建</Button>
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
export default Cim_communicationRecord