//人员管理-添加

import React from 'react'
import Left from './../../commonality/left'
import Navigation from './../../commonality/navigation'
import { Button,Breadcrumb,Form,DatePicker } from 'antd';
import './../../../assets/css/pc/peopleManagement_add.css'

// const { MonthPicker, RangePicker } = DatePicker;
class peopleManagement extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
   
    render(){
        function onChange(date, dateString) {
            console.log(date, dateString);
          }
        
        return(
            <div>
                <Left></Left>
                <div className="oa-common-right-box">
                    <Navigation></Navigation>
                    <div className="oa-crumbs-box">
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="">权限管理</Breadcrumb.Item>
                            <Breadcrumb.Item >人员管理</Breadcrumb.Item>
                            <Breadcrumb.Item >添加</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-pma-topbox">
                        <Button href="./peopleManagement" style={{backgroundColor:'#1798DC'}}>返回</Button>
                    </div>
                    <div className="oa-pma-frombox">
                        <Form>
                            <ul className="oa-pma-submitdata">
                                <li className="oa-pma-sdlayer1">
                                    <div>人员编号</div>
                                    <input></input>
                                </li>
                                <li  className="oa-pma-sdlayer1">
                                    <div>用户姓名</div>
                                    <input></input>
                                </li>
                                <li className="oa-pma-sdlayer1">
                                    <div>所属部门</div>
                                    <input></input>
                                </li>
                                <li className="oa-pma-sdlayer1">
                                    <div>岗位</div>
                                    <input></input>
                                </li>
                                <li className="oa-pma-sdlayer1">
                                    <div>联系电话</div>
                                    <input></input>
                                </li>
                                <li  className="oa-pma-sdlayer1">
                                    <div>邮箱</div>
                                    <input></input>
                                </li>
                                <li className="oa-pma-sdlayer1">
                                    <div>登录账号</div>
                                    <input></input>
                                </li>
                                <li className="oa-pma-sdlayer1">
                                    <div>登录密码</div>
                                    <input ></input>
                                </li>
                                <li className="oa-pma-sdlayer1">
                                    <div>添加时间</div>
                                    <div className="oa-pma-date">
                                        <DatePicker onChange={onChange}  style={{width:'100%',height:'40px'}}/>
                                    </div>
                                </li>
                            </ul>
                           <div className="oa-pma-submitbox">
                                <input className="oa-pma-submit" type="submit"></input>
                           </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
export default peopleManagement