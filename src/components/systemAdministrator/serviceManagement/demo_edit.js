//服务处理--去处理
import React from 'react';
import Left from './../../commonality/left'
import {Button,Breadcrumb,Form,Select} from 'antd';
import './../../../assets/css/pc/salesLeads_newConstruction.css'
import Navigation from './../../commonality/navigation'

const { Option } = Select;

// const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
class ServiceProcessing_goDispose extends React.Component{
    constructor(){
        super()
        this.state={
            jurisdiction:true,
            number:'',
            clientele :'',
            erviceRequest:'',
            creator:'',
            creationTime:'',
            handlingMethod:'',
            handlerTime:'',
            handler:''
        }
    }
    //提交表单
    snc_submit(){
        console.log('提交')
        console.log(this.state.jurisdiction);
    }
    getmes(e){
      var  number = e.target.number
      var  synopsis = e.target.synopsis
      var  clientele =e.target.clientele
      var  erviceRequest= e.target.serviceRequest
      var  creator= e.target.creator
      var  creationTime =e.target.creationTime
      var allocateTime= e.target.allocateTime
      var handlingMethod=e.target.handlingMethod
      var handler =e.target.handler
      var handlerTime =e.target.handlerTime
     this.setState({
            number : number,
            synopsis : synopsis,
            clientele:clientele,
            erviceRequest :  erviceRequest,
            creator:creator,
            creationTime:creationTime,
            allocateTime:allocateTime,
            handlingMethod:handlingMethod,
            handler:handler,
            handlerTime:handlerTime
        })
        
    }
    handleChange=(value)=> {
        console.log(`selected ${value}`);
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
                        <Button href="">返回</Button>
                    </div>
                    <div className="oa-snc-outbox">
                        <Form>
                            <div className="oa-snc-inbox">
                                <ul className="oa-snc-formbox">
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">编号</div>
                                            <input name='number'   defaultValue={this.state.number} onChange={this.getmes.bind(this)}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">服务类型</div>
                                            <Select defaultValue="lucy" style={{border:'1px solid #ccc',lineHeight:'35px',flex:'1'}} onChange={this.handleChange.bind(this)}>
                                                <Option value="jack">咨询</Option>
                                                <Option value="lucy">回购</Option>
                                                <Option value="disabled" disabled>
                                                    Disabled
                                                </Option>
                                                <Option value="Yiminghe">yiminghe</Option>
                                            </Select>
                                        </div>
                                       
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">概要</div>
                                            <input name='synopsis'   defaultValue={this.state.number} onChange={this.getmes.bind(this)}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">客户</div>
                                            <input name='clientele'   defaultValue={this.state.number} onChange={this.getmes.bind(this)}></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1" style={{width:'100%'}}>
                                            <div className="oa-snc-ginput-left" style={{height:'auto',display:'flex',alignItems:'center',justifyContent:'center'}}>服务请求</div>
                                            <textarea name='serviceRequest'style={{flex:'1',height:'100px'}}   defaultValue={this.state.number} onChange={this.getmes.bind(this)}></textarea>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">创建人</div>
                                            <input name='creator'   defaultValue={this.state.number} onChange={this.getmes.bind(this)}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">创建时间</div>
                                            <input name='creationTime'   defaultValue={this.state.number} onChange={this.getmes.bind(this)}></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">状态</div>
                                            <Select defaultValue="lucy" style={{border:'1px solid #ccc',lineHeight:'35px',flex:'1'}} onChange={this.handleChange.bind(this)}>
                                                <Option value="jack">已分配</Option>
                                                <Option value="lucy">未分配</Option>
                                                <Option value="disabled" disabled>
                                                    暂定
                                                </Option>
                                            </Select>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">分配给</div>
                                            <Select defaultValue="lucy" style={{border:'1px solid #ccc',lineHeight:'35px',flex:'1'}} onChange={this.handleChange.bind(this)}>
                                                <Option value="jack">张三</Option>
                                                <Option value="lucy">李四</Option>
                                                <Option value="disabled" disabled>
                                                    王五
                                                </Option>
                                            </Select>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">分配时间</div>
                                            <input name='allocateTime'   defaultValue={this.state.number} onChange={this.getmes.bind(this)}></input>
                                        </div>
                                        
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1" style={{width:'100%'}}>
                                            <div className="oa-snc-ginput-left" style={{height:'auto',display:'flex',alignItems:'center',justifyContent:'center'}}>处理方法</div>
                                            <textarea name='handlingMethod'style={{flex:'1',height:'100px'}}   defaultValue={this.state.number} onChange={this.getmes.bind(this)}></textarea>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">处理人</div>
                                            <input name='handler'   defaultValue={this.state.number} onChange={this.getmes.bind(this)}></input>
                                        </div>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">处理时间</div>
                                            <input name='handlerTime'   defaultValue={this.state.number} onChange={this.getmes.bind(this)}></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="oa-snc-groupinput1">
                                            <div className="oa-snc-ginput-left">单据状态</div>
                                            <Select defaultValue="lucy" style={{border:'1px solid #ccc',lineHeight:'35px',flex:'1'}} onChange={this.handleChange.bind(this)}>
                                                <Option value="jack">Jack</Option>
                                                <Option value="lucy">Lucy</Option>
                                                <Option value="disabled" disabled>
                                                    Disabled
                                                </Option>
                                                <Option value="Yiminghe">yiminghe</Option>
                                            </Select>
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
export default ServiceProcessing_goDispose