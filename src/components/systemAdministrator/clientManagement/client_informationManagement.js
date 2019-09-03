//客户信息管理

import React from 'react'
import { number } from 'prop-types';
import Left from './../../commonality/left'
import Navigation from './../../commonality/navigation'
import { Menu, Dropdown,Button,Breadcrumb,Select,Table,Tag,Divider,Form,Input,Modal,message,unt} from 'antd';

import axios from 'axios';

const Option = Select.Option
class client_informationManagement extends React.Component{
    constructor(){
        super()
        this.state={
            data:[],
        }

    }


    //列表
    componentWillMount() {
        var that=this;
        axios({
            method:'get',
            url:'api/people/index',
            
        })
        .then(function(response){
            var list1 = response.data.data;
            that.setState({
                list:list1
            })
         //   console.log(that.state.list)
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

    //获取下拉选择框的值
    xuanze(e,at){
        this.setState({
            [at]:e
        })

    }


        //搜索查询
        submit(){
            var that=this;
            var data = {
                    username:this.state.username,
                    zhuangtai:this.state.zhuangtai,
                    
            }
            // if((data.start_time==undefined && data.end_time!=undefined) || (data.end_time==undefined && data.start_time!=undefined)){
            //     message.error('请完整填写时间段',1)
            // }
          
          
            if(data){
                axios({
                    method: 'post',
                    url:'api/people/index',
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
                        url: 'api/people/delete',
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
                title: '客户编号',
                dataIndex: 'usernum',
                key: 'usernum',
            }, 
            {
                title: '客户名称',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: '地区',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '客户经理',
                dataIndex: 'peoplem',
                key: 'peoplem',
            },
            {
                title: '客户状态',
                dataIndex: 'status',
                key: 'customerStatus',
            },
            {
                title: '客户满意度',
                dataIndex: 'star',
                key: 'star',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render: (text, record) => (
                    <span>
                      <a href={'./client_informationManagement_edit?id='+record.lid}>修改</a>
                      <Divider type="vertical" />
                    
                      <a onClick={showConfirm} data-id={record.id} >删除</a>
                    </span>
                  ),
            }

        //     {
        //         title: '操作',
        //         key: 'action',
        //         render: (text, record) => (
        //         <span>
        //             <a href="./">修改 {record.name}</a>
        //             <Divider type="vertical" />
              
        //             <a onClick={showConfirm} data-id={record.id} >删除</a>
        //         </span>
        //         ),
        //   }


          
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
                    <div className="oa-gm-topbox">
                        <div className="oa-gm-topleft">
                            客户名称：
                            <input size="" name="username" placeholder="small size" style={{height:32}} onChange={this.getInput.bind(this)}/>
                         
                        </div>
                        <div className="oa-gm-topleft">
                            客户状态：
                            <Select defaultValue="暂缓流失" style={{ width: 150 }} onChange={e=>{this.xuanze(e,'zhuangtai')}}>
                                    <Option value="1">暂缓流失</Option>
                                    <Option value="2">确认流失</Option>
                      
                            </Select>
                        </div>
                        <Button  style={{backgroundColor:'#1798DC'}}  onClick={this.submit.bind(this)}>查询</Button>
       
                    </div>
                    <div className="oa-gm-tableList">
                        {/* <Table dataSource={dataSource} columns={columns} /> */}
                        <Table columns={columns} dataSource={this.state.list} />
                    </div>
                </div>
            </div>
        )
    }
}

export default client_informationManagement