//客户开发计划--制定

import React from 'react';
import Left from './../../commonality/left'
import Navigation from './../../commonality/navigation'
import {Button,Breadcrumb,Form, DatePicker} from 'antd';
import  './../../../assets/css/pc/cdp_formulate.css'
class cdp_formulate extends React.Component{
    constructor(){
        super()
        this.state={
            data:[
               {
                   time:'2018-11-19',
                   content:'期待一个赋值或函数调用，却看到了一个表达式'
               },
               {
                time:'2018-11-19',
                content:'期待一个赋值或函数调用，却看到了一个表达式'
              }   

            ]
        }
    }
    delete(e){
            const index= e.target.getAttribute('data-key')
            this.state.data.splice(index,1)
            this.setState({
                data:this.state.data
            })
    }
    render(){
        const Datas= this.state.data
            ?
        (this.state.data).map((v,k)=>{
            return(
                <div className='oa-cdpf-formbox-in' style={{width:'100%'}} key={k}>
                <div className="oa-cdpf-frombox-left">{v.time }</div>
                <div className="oa-cdpf-frombox-right">{v.content}</div>
                <div className="oa-cdpf-frombox-delete"  data-key={k} onClick={this.delete.bind(this)}>删除</div>   
                </div>
            )
            
        })
        :''
       //日期选择
        const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
        function onChange(date, dateString) {
            console.log('1111')
            console.log(date);
            console.log( dateString)
            console.log('222')
        }
        return(
            <div>
                <Left></Left>
                <div className="oa-common-right-box">
                    <Navigation></Navigation>
                    <div className="oa-crumbs-box">
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="">营销管理</Breadcrumb.Item>
                            <Breadcrumb.Item href="">客户开发计划</Breadcrumb.Item>
                            <Breadcrumb.Item >指定计划</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-snc-buttongroup">
                        <Button type="submit">执行计划</Button>
                        <Button href="">返回</Button>
                    </div>
                    <div className="oa-cdpf-outbox">
                        <div className="oa-cdpf-inbox">
                            <ul className="oa-cdpf-datalist">
                                <li>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">编号</div>
                                        <div className="oa-cdpf-liyer-right">001</div>
                                    </div>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">机会来源</div>
                                        <div className="oa-cdpf-liyer-right">朋友介绍</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">客户名称</div>
                                        <div className="oa-cdpf-liyer-right dh">陕西中科电子股份集团有限公司</div>
                                    </div>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">成功几率</div>
                                        <div className="oa-cdpf-liyer-right">50</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="oa-cdpf-lg-layer">
                                        <div className="oa-cdpf-groupbutton">概要</div>
                                        <div className="oa-cdpf-groupbutton-right">
                                            <p>
                                            有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">联系人</div>
                                        <div className="oa-cdpf-liyer-right dh">王阳</div>
                                    </div>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">联系电话</div>
                                        <div className="oa-cdpf-liyer-right">13679245120</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="oa-cdpf-lg-layer">
                                        <div className="oa-cdpf-groupbutton">机会描述</div>
                                        <div className="oa-cdpf-groupbutton-right">
                                            <p>
                                            有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......有关服务器续费意向......
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">创建人</div>
                                        <div className="oa-cdpf-liyer-right dh">王艳</div>
                                    </div>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">创建时间</div>
                                        <div className="oa-cdpf-liyer-right">2018-8-11</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">指派给</div>
                                        <div className="oa-cdpf-liyer-right dh">朝阳</div>
                                    </div>
                                    <div className="oa-cdpf-list-layer">
                                        <div className="oa-cdpf-liyer-left">创建时间</div>
                                        <div className="oa-cdpf-liyer-right">2018-8-12 8:11</div>
                                    </div>
                                </li>
                                <li style={{backgroundColor:'#ccc',height:'1px'}}></li>
                                <div className="oa-cdpf-frombox-out">
                                    <div className="oa-cdpf-frombox-left">日期</div>
                                    <div className="oa-cdpf-frombox-right">计划项</div>
                                </div>
                                <div className="oa-cdpf-fromdata-list">
                                    {
                                       Datas
                                    }
                                </div>
                                <Form>
                                    <ul className="oa-cdpf-formmenu">
                                       <div className="oa-cdpf-formmenu-left">
                                            <li className="oa-cdpf-formmenu-layer1">
                                                <div>日期</div>
                                                <DatePicker onChange={onChange} placeholder="请选择日期"/>
                                            </li>
                                            <li className="oa-cdpf-formmenu-layer2">
                                                <div>计划项</div>
                                                <input></input>
                                            </li>
                                       </div>
                                        <li className="oa-cdpf-formmenu-layer3">
                                            <input type="submit"></input>
                                        </li>
                                    </ul>
                                </Form>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default cdp_formulate