//服务归档

import React from 'react';
import  Left from './../../commonality/left'
import { Menu, Dropdown, Button,Breadcrumb,Table, Divider,Form,Select,Input,DatePicker,message} from 'antd';
import './../../../assets/css/pc/AM_PasswordMaintenance.css'
import unt from '../../../until/unt';
import axios from 'axios';
const { Option } = Select;

class serviceArchive extends React.Component{
    constructor(){
        super()
        this.state={
            data:[],
        }
    }
    //初始化数据
    componentWillMount() {
        var that=this;
        axios({
            method:'get',
            url:'api/service/service_file',
        })
        .then(function(response){
            if(response.data.code==1){
                var list = response.data.data;
                list.forEach(element => {
                    element.key=element.id
                });
                that.setState({
                    data:list
                })
            }else{
                message.error('暂无数据',1)
            }
        })
        .catch(function(err){
            message.error(err,1)
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
    //获取时间输入框的值
    shijian(date,string){
        this.setState({
            [string]:date.format('YYYY-MM-DD'),
        })
    }
    //搜索查询
    submit(){
        var that=this;
        var data = {
                kehu:this.state.kehu_name,
                gaiyao:this.state.gaiyao,
                fuwu_type:this.state.fw,
                status:this.state.zt,
                start_time:this.state.start_time,
                end_time:this.state.end_time,
        }
        if((data.start_time==undefined && data.end_time!=undefined) || (data.end_time==undefined && data.start_time!=undefined)){
            message.error('请完整填写时间段',1)
        }
        var arr = unt.check_obj(data);
        if(arr > -1){
            axios({
                method: 'post',
                url: 'api/service/service_file',
                data: data
            })
            .then(function (response) {
                if(response.data.code == 1){
                    var list = response.data.data;
                    list.forEach(element => {
                        element.key=element.id
                    });
                    that.setState({
                        data:list
                    })
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
          
        //下来菜单
        const menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">个人信息</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">切换账号</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">退出</a>
              </Menu.Item>
            </Menu>
          );
        

        const columns = [
            {
                title: '客户编号',
                dataIndex: 'number',
                key: 'number'
            }, 
            {
                title: '客户名称',
                dataIndex: 'kehu',
                key: 'kehu',
            }, 
            {
                title: '概要',
                dataIndex: 'gaiyao',
                key: 'gaiyao',
            }, 
            {
                title: '服务类型',
                dataIndex: 'fuwu_type',
                key: 'fuwu_type',
            },
            {
                title: '创建人',
                dataIndex: 'creat_name',
                key: 'creat_name',
            },
            {
                title: '创建日期',
                dataIndex: 'creat_time',
                key: 'creat_time',
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
            },
            {
                title: '分配给',
                dataIndex:'fenpei_name',
                key: 'fenpei_name',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                <span>
                    <a href={'/serviceArchive_examine?id='+record.id}>查看</a>
                </span>
                ),
            }
        ];
        
       
        return(
            <div>
                <Left></Left>
                <div className="oa-common-right-box">
                    <div className="oa-cright-header">
                        <div>12313</div>
                        <Dropdown overlay={menu} placement="bottomCenter">
                            <Button>admin</Button>
                        </Dropdown>
                    </div>
                    <div className="oa-crumbs-box" style={{padding:'10px'}}>
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="">服务管理</Breadcrumb.Item>
                            <Breadcrumb.Item >服务归档</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <ul className="oa-nav-searchBox">
                        <li className="oa-nav-searchLi">
                            <div className="oa-nav-searchli-left">
                                <div>
                                    <span className="oa-nav-searchli-span">客户名称</span>
                                    <input className='oa-input' name='kehu_name'  onChange={this.getInput.bind(this)}/>
                                </div>
                                <div>
                                    <span className="oa-nav-searchli-span">概要</span>
                                    <input className='oa-input' name='gaiyao'  onChange={this.getInput.bind(this)}/>
                                </div>
                                <div>
                                    <span className="oa-nav-searchli-span">服务类型</span>
                                    <Select defaultValue="请选择" style={{ width: 120 }} onChange={e=>{this.xuanze(e,'fw')}}  dropdownMatchSelectWidth >
                                        <Option value="1">咨询</Option>
                                        <Option value="2">建议</Option>
                                        <Option value="3">投诉</Option>
                                    </Select>
                                </div>
                            </div>
                            <Button type="primary" onClick={this.submit.bind(this)}>查询</Button>
                        </li>
                        <li style={{marginTop:'15px',paddingLeft:'30px',display:'flex',alignItems:'center'}}>
                            <span style={{width:'4rem',display:'block'}}>创建时间</span>
                            <DatePicker onChange={e=>{this.shijian(e,'start_time')}} style={{height:'32px'}} /> - 
                            <DatePicker onChange={e=>{this.shijian(e,'end_time')}} style={{height:'32px'}} />
                        </li>
                    </ul>
                    <div className="oa-ampm-tabledata">
                        <Table columns={columns} dataSource={this.state.data} />
                    </div>
                </div>
               
            </div>
        )
    }
}
export default serviceArchive