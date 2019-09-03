//客户信息管理 - 联系人
import React from 'react'
import { number } from 'prop-types';
import Left from './../../commonality/left'
import Navigation from './../../commonality/navigation'
import {  Menu, Dropdown,Button,Breadcrumb,Select,Table,Tag,Divider,Form,Input,Modal,message,unt} from 'antd';

import axios from 'axios';
const Option = Select.Option
class Cim_Linkman extends React.Component{
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
            url:'api/people/lianxiren_index?id='+id,
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
                    name:this.state.name,
             
                    
            }
       
            if(data){
                axios({
                    method: 'post',
                    url:'api/people/lianxiren_index',
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
                    message.error(error,1)
                })
            }else{
                message.error('请至少填写一项搜索词！',1)
            }
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
                        url: 'api/people/lianxiren_delete',
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

        const dataSource = [
            {
            key: '1',
            uname:'李洋',
            gender:'男',
            post:'客户经理',
            officePhone:'029-88912456',
            phonenumber: '13186424512',
            remark:'shjkdshajk=sdjskldjlskadj',
          },  
          {
            key: '2',
            uname:'李洋',
            gender:'男',
            post:'客户经理',
            officePhone:'029-88912456',
            phonenumber: '13186424512',
            remark:'shjkdshajk=sdjskldjlskadj',
          },  
          
        ];
          
          const columns = [
              {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            }, 
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
            },
            {
                title: '职位',
                dataIndex: 'work',
                key: 'work',
            },
            {
                title: '办公电话',
                dataIndex: 'tel',
                key: 'tel',
            },
            {
                title: '手机号',
                dataIndex: 'phone',
                key: 'phone',
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
                        
                        <a href={'./cim_contacts_new_edit?id='+record.id}>修改</a> <Divider type="vertical" />
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
                    <div className="oa-crumbs-box" style={{padding:'10px 0 10px 10px',boxSizing:'border-box'}}>
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="">客户管理</Breadcrumb.Item>
                            <Breadcrumb.Item href="">客户信息管理</Breadcrumb.Item>
                            <Breadcrumb.Item >历史订单</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-gm-topbox" style={{display:'flex',justifyContent:'space-between'}}>
                        <div style={{display:'flex'}}>
                            {/* <div className="oa-gm-topleft" style={{fontSize:'14px'}}>
                                <div style={{width:'7em'}}>客户编号：</div>
                                <Input size="small" placeholder="small size" style={{height:'32px!important'}}/>
                            </div> */}
                            <div className="oa-gm-topleft">
                                <div style={{width:'7em'}}>客户名称：</div>
                                <Input  name="name" size="small" placeholder="" style={{height:'32px!important'}} onChange={this.getInput.bind(this)}/>
                                
                            </div>
                        </div>
                        <div>
                            <Button  style={{backgroundColor:'#1798DC'}}  onClick={this.submit.bind(this)}>查询</Button>
                            <Button href={'./cim_contacts_new?id='+this.state.ids}  style={{backgroundColor:'#1798DC',color:'#fff'}}>新建</Button>
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
export default Cim_Linkman