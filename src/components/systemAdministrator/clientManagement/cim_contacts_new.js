//客户管理-联系人-新建
import React from 'react';
import Left from './../../commonality/left'
import {Button,Breadcrumb,Form,Select,message} from 'antd';
import './../../../assets/css/pc/salesLeads_newConstruction.css'
import Navigation from './../../commonality/navigation'
import axios from 'axios';
const { Option } = Select;

// const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
class Cim_contacts_new extends React.Component{
    constructor(){
        super()
        this.state={
            jurisdiction:true,
         
        }
    }
    
    getInput=(e)=>{
        let inputValue = e.target.value;
        let inputName = e.target.name;
        this.setState({
            [inputName] : inputValue
        })     
    }
    handleChange(value){
        this.setState({
            sex:value,
        })
     }

    //提交表单
    snc_submit(){
        const query = this.props.location.search ;
        const arr = query.split('&')
        const id = arr[0].substr(4)
        

     

        var body = {
            id: id,
            name:this.state.name,
            sex:this.state.sex,
            work:this.state.work,
            tel:this.state.tel,
            phone:this.state.phone,
            beizhu:this.state.beizhu,
          
        }

        if(body.name==undefined  ){
            message.error('请填写姓名',1)
        }
        if(body.sex==undefined  ){
            message.error('请填写性别',1)
        }
        if(body.work==undefined  ){
            message.error('请填写职位',1)
        }
        if(body.tel==undefined  ){
            message.error('请填写办公电话',1)
        }
        if(body.phone==undefined  ){
            message.error('请填写手机号',1)
        }
        if(body.beizhu==undefined  ){
            message.error('请填写备注',1)
        }

        var that=this;
          axios({
            method: 'post',
            url: 'api/people/lianxiren_add',
            data: body
           })
           .then(function (response) {
            if(response.data.code==1){
                message.success(response.data.msg ,0.5,function(){
                    that.props.history.push('/cim_Linkman')
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
                            <Breadcrumb.Item href="">服务管理</Breadcrumb.Item>
                            <Breadcrumb.Item href="">服务处理</Breadcrumb.Item>
                            <Breadcrumb.Item >处理</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-snc-buttongroup">
                        <Button className='' onClick={this.snc_submit.bind(this)}>确认</Button>
                        <Button href="">返回</Button>
                    </div>
                    <div className="oa-snc-outbox">
                        <Form>
                            <div className="oa-snc-inbox">
                                <ul className="oa-snc-formbox">
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">姓名</div>
                                            <input name='name'   defaultValue={this.state.number} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">性别</div>
                                            <Select name='sex' defaultValue="请选择" style={{border:'1px solid #ccc',lineHeight:'35px',flex:'1'}} onChange={e=>{this.handleChange(e)}}>
                                            <Option value="男">男</Option>
                                            <Option value="女">女</Option>
                                            </Select>
                                        </div>
                                       
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">职位</div>
                                            <input name='work'   defaultValue={this.state.number} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">办公电话</div>
                                            <input name='tel'   defaultValue={this.state.number} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">手机号</div>
                                            <input name='phone'   defaultValue={this.state.number} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">备注</div>
                                            <input name='beizhu'   defaultValue={this.state.number} onChange={e=>{this.getInput(e)}}></input>
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
export default Cim_contacts_new