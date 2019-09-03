//服务分配

import React from 'react';
import  Left from './../../commonality/left'
import { Menu, Dropdown, Button,Breadcrumb,Table, Divider,Form,Select,Input,DatePicker,Modal,message} from 'antd';
import axios from 'axios';
import './../../../assets/css/pc/AM_PasswordMaintenance.css'
import unt from '../../../until/unt';
const { Option } = Select;
const { confirm } = Modal;
class serviceAllocation extends React.Component{
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
            url:'api/service/service_list',
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
           // console.log(list);
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
                url: 'api/service/service_list',
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
    //分配选择
    handleChange(value) {
        this.setState({
            assigned_id:value
        })
    }
    //提交分配
    fenpei(e){
        axios({
            method: 'post',
            url: 'api/service/service_assigned',
            data: {
                id:e.target.getAttribute("data-id"),
                assigned_id:this.state.assigned_id,
            }
        })
        .then(function (response) {
            if(response.data.code == 1){
                message.success(response.data.msg,1,function(){
                    //重新加载页面
                    window.location.reload();
                })
                
            }else{
                message.error(response.data.msg,1)
            }
           
        })
        .catch(function (error) {
             message.error(error,1)
        })
    }
     //删除操作
     showConfirm=(e)=>{
        let id=e.target.getAttribute("data-id");
        confirm({
            title: '你确定要删除?',
            content: '删除之后将不可恢复',
            onOk() {
                console.log(id)
            try{
                axios({
                    method: 'post',
                    url: 'api/service/service_del',
                    data: {
                        id:id,
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
            }
            catch(err){
                message.error('无效的ID',1)
            }
              
            }
          });
     }

    render(){
        
        //下拉菜单
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
          //table
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
                key: 'assignTo',
                render: (text, record) => (
                <span>
                    <Select defaultValue={record.assigned_id?record.fenpei_name:'请选择'} style={{ width: 120 }} onChange={this.handleChange.bind(this)} dropdownMatchSelectWidth >
                        {
                            record.fenpei_data.map(function(val,key){
                                return (<Option key={key} value={val.id} >{val.username}</Option>);
                            })
                        }
                    </Select>
                    <Divider type="vertical" />
                    <Button type="submit" data-id={record.id} onClick={this.fenpei.bind(this)}>分配</Button>
                </span>
                ),
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                <span>
                    <a href={'/serviceAllocation_examine?id='+record.id}>编辑</a>
                    <Divider type="vertical" />
                    <a onClick={this.showConfirm.bind(this)} data-id={record.id}>删除</a>
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
                            <Breadcrumb.Item >服务分配</Breadcrumb.Item>
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
                                    <input className='oa-input' name='gaiyao'   onChange={this.getInput.bind(this)}/>
                                </div>
                                <div>
                                    <span className="oa-nav-searchli-span">服务类型</span>
                                    <Select defaultValue="请选择" style={{ width: 120 }} onChange={e=>{this.xuanze(e,'fw')}}  dropdownMatchSelectWidth >
                                        <Option value="1">咨询</Option>
                                        <Option value="2">建议</Option>
                                        <Option value="3">投诉</Option>
                                    </Select>
                                </div>
                                <div>
                                    <span className="oa-nav-searchli-span">状态</span>
                                    <Select defaultValue="请选择" style={{ width: 120 }} onChange={e=>{this.xuanze(e,'zt')}} dropdownMatchSelectWidth >
                                        <Option value="1">新创建</Option>
                                        <Option value="2">已分配</Option>
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
                        {<Table columns={columns} dataSource={this.state.data} />}
                    </div>
                </div>
               
            </div>
        )
    }
}
export default serviceAllocation