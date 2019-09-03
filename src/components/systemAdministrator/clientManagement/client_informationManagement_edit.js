//客户信息管理-编辑
import React from 'react';
import Left from './../../commonality/left'
import {Button,Breadcrumb,Form, DatePicker, Select, message} from 'antd';
import './../../../assets/css/pc/salesLeads_newConstruction.css'
import Navigation from './../../commonality/navigation'
import { now } from 'moment';
import axios from 'axios';
const { Option } = Select;

// const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
class Client_informationManagement_edit extends React.Component{

    constructor(props){
        super(props)
        this.state={
            jurisdiction:true,
            newsdate:new Date(now()).toLocaleString(),
            zhipai:[],zhipai_name:'',zhipai_time:'',jihui_desc:'',abstract:'',usernum:'',jihui_from:'',
            kehu_name:'',success_jilv:'',lianxi_name:'',lianxi_tel:'',creat_name:'',creatTime:'',datall:'',
        }
        
    }
 
    //查询
    componentWillMount () {
        const query = this.props.location.search ;
        const arr = query.split('&')
        const sid = arr[0].substr(4)
       // console.log(sid)
        var that=this;
        axios({
            method:'get',
            url:'api/people/edit?sid='+sid,
            
        })
        .then(function(response){
            var datall = response.data.data; 
            var list = response.data.data.zhipai;
         
            that.setState({
                zhipai:list,
                datall:datall,
                usernum:datall.usernum,
                username:datall.username,
                address:datall.address,
                peoplem:datall.peoplem,
                dizhi:datall.dizhi,
                lianxi_name:datall.lianxi_name,
                lianxi_tel:datall.lianxi_tel,
                email:datall.email,
                phone:datall.phone,
                wangzhi:datall.wangzhi,
                chuanzhen:datall.chuanzhen,
                dengji:datall.dengji,
                manyidu:datall.manyidu,
                xinyongdu:datall.xinyongdu,
                zhuangtai:datall.zhuangtai,

                
            })
          //  console.log(datall)
             
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
 
 
    // handleChange(value,els){
    //     this.setState({
    //         [els]:value,
    //     })
    //  }
     handleChange(value){
        this.setState({
            dengji:value,
        })
     }
     handleChange2(value){
        this.setState({
            manyidu:value,
        })
     }
     handleChange3(value){
        this.setState({
            xinyongdu:value,
        })
     }
     handleChange4(value){
        this.setState({
            zhuangtai:value,
        })
     }
   //提交表单
    snc_submit(){
        
        var body = {
            lid:this.state.datall.lid,
            username:this.state.username,
            address:this.state.address,
            lianxi_name:this.state.lianxi_name,
            lianxi_tel:this.state.lianxi_tel,
            peoplem:this.state.peoplem,
            dizhi:this.state.dizhi,
            email:this.state.email,
            phone:this.state.phone,
            wangzhi:this.state.wangzhi,
            chuanzhen:this.state.chuanzhen,
            dengji:this.state.dengji,
            manyidu:this.state.manyidu,
            xinyongdu:this.state.xinyongdu,
            zhuangtai:this.state.zhuangtai,
            
            
        }
        
       console.log(body)
        var that=this;
        axios({
         method: 'post',
         url: 'api/people/edit',
         data: body
        })
        .then(function (response) {
           //console.log(response);
           if(response.data.code==1){
            message.success(response.data.msg ,0.5,function(){
                that.props.history.push('/client_informationManagement')
               })
           }else{
            message.error(response.data.msg,1)
           }
        })
        .catch(function (error) {
            message.error(error,1)
        });
        
    }

      render(){
      
        const dengji =  this.state.datall.dengji
        ?   <Select name='dengji' defaultValue={this.state.datall.dengji} style={{border:'1px solid #ccc',lineHeight:'35px',flex:'1'}} onChange={e=>{this.handleChange(e)}}>
                <Option value="1">普通客户</Option>
                <Option value="2">重点开发客户</Option>
                <Option value="3" > 大客户  </Option>
                <Option value="4">合作伙伴</Option>
                <Option value="5">站略合作伙伴</Option>
        </Select>
        :'';


        const manyidu =  this.state.datall.manyidu
            ?<Select name='manyidu' defaultValue={this.state.datall.manyidu} style={{border:'1px solid #ccc',lineHeight:'35px',flex:'1'}} onChange={e=>{this.handleChange2(e)}}>
                <Option value="1">一般</Option>
                <Option value="2">良好</Option>
                <Option value="3"> 满意</Option>
                <Option value="4">不满意</Option>
            </Select>
            :'';

            const xinyongdu =  this.state.datall.xinyongdu
            ?<Select name='xinyongdu' defaultValue={this.state.datall.xinyongdu} style={{border:'1px solid #ccc',lineHeight:'35px',flex:'1'}} onChange={e=>{this.handleChange3(e)}}>
                    <Option value="1" >一般</Option>
                     <Option value="2">良好</Option>
                     <Option value="3" > 优秀</Option>
            </Select>
            :'';
 

            const zhuangtai =  this.state.datall.zhuangtai
            ?<Select name='zhuangtai' defaultValue={this.state.datall.zhuangtai} style={{border:'1px solid #ccc',lineHeight:'35px',flex:'1'}} onChange={e=>{this.handleChange4(e)}}>
                     <Option value="暂缓流失">暂缓流失</Option>
                      <Option value="确认流失">确认流失</Option>
            </Select>
            :'';
 


      
        return(
            <div>
                <Left></Left>
                <div className="oa-common-right-box">
                    <Navigation></Navigation>
                    <div className="oa-crumbs-box" style={{padding:'10px'}}>
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="">营销管理</Breadcrumb.Item>
                            <Breadcrumb.Item href="">销售机会管理</Breadcrumb.Item>
                            <Breadcrumb.Item >新建销售机会</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-snc-buttongroup">
                    <Button href={'./cim_Linkman?id='+this.state.datall.lid}>联系人</Button>
                    <Button href={'./cim_communicationRecord?id='+this.state.datall.lid}>交往记录</Button>
                    <Button href={'./cim_orderHistory?id='+this.state.datall.lid}>历史订单</Button>
                        <Button style={{marginLeft:20}} type="submit" onClick={this.snc_submit.bind(this)}>保存</Button>
                        <Button href="">返回</Button>
                    </div>
                    <div className="oa-snc-outbox">
                        <Form>
                            <div className="oa-snc-inbox">
                                <ul className="oa-snc-formbox">
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">客户编号</div>
                                            {/* <input name='number'   defaultValue={this.state.number} onChange={this.getmes.bind(this)}></input> */}
                                            <input readOnly value={this.state.usernum}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">客户名称</div>
                                
                                            <input onChange={e=>{this.getInput(e)}} name="username" defaultValue={this.state.username}></input>
                                        </div>
                                       
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                        <div className="oa-snc-ginput-left">地区</div>
                                         
                                            <input  name='address'  defaultValue={this.state.address} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">客户等级</div>
                                 

                                            {dengji}

                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">客户经理</div>
                                            <input  name='peoplem'  defaultValue={this.state.peoplem} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">客户满意度</div>
                                            {manyidu}
                                        </div>
                                    </li>
                                    <li>  
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">客户信用度</div>
                                            {xinyongdu}
                                        </div>
                                    </li>
                                    <br></br>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">地址</div>
                                            <input name='dizhi'   defaultValue={this.state.dizhi} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">邮编</div>
                                            <input  name='email'  defaultValue={this.state.email} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">公司电话</div>
                                            <input name='phone'   defaultValue={this.state.phone} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">传真</div>
                                            <input  name='chuanzhen'  defaultValue={this.state.chuanzhen} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">公司网址</div>
                                            <input name='wangzhi'   defaultValue={this.state.wangzhi} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">联系人</div>
                                            <input  name='lianxi_name'  defaultValue={this.state.lianxi_name} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">联系电话</div>
                                            <input name='lianxi_tel'   defaultValue={this.state.lianxi_tel} onChange={e=>{this.getInput(e)}}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">客户状态</div>
                                            {zhuangtai}
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

export default Client_informationManagement_edit