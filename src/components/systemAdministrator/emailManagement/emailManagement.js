// 邮件管理

import React from 'react';
import Left from './../../commonality/left';
import { Menu, Dropdown, Button,Breadcrumb,Select,Form} from 'antd';
import './../../../assets/css/pc/emailManagement.css'

class emailManagement extends React.Component{
    constructor(){
        super()
        this.state={
           
        }
    }
    //提交表单
    submit=(e)=>{
        e.preventDefault();//阻止浏览器默认提交。
        console.log('tijiao')
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
        //select
        const Option = Select.Option;

        function handleChange(value) {
        console.log(`selected ${value}`);
        }
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
                    <div className="oa-crumbs-box">
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="">邮件管理</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-em-outbox">
                            <Form onSubmit={this.submit.bind(this)}>
                                <ul>
                                    <li className="oa-em-in-layer1">
                                        <div className="oa-em-in-layer1-left">账号</div>
                                        <input className="oa-em-in-layer1-right" value=''></input>
                                    </li>
                                    <li className="oa-em-in-layer2">
                                        <div className="oa-em-in-layer1-left">邮箱</div>
                                        <div className="oa-em-in-layer2-right" value=''>
                                            <Select size="large" defaultValue="lucy" style={{ width: '100%',height:'35px',lineHeight:'35px' }} onChange={handleChange}>
                                                <Option value="wy163">@163.com</Option>
                                                <Option value="lucy">@126.com</Option>
                                                <Option value="disabled">@qq.com</Option>
                                                <Option value="yiminghe">@sina.com</Option>
                                                <Option value="skd">@sohoo.com</Option>
                                                <Option value="soal">@yahoo.com</Option>
                                            </Select>
                                        </div>
                                    </li>
                                    <li className="oa-em-in-layer3">
                                        <div className="oa-em-in-layer1-left">密码</div>
                                        <input className="oa-em-in-layer3-right" value=''></input>
                                    </li>
                                </ul>
                                <input className="oa-em-submit" type="submit"></input>
                            </Form>
                    </div>
                </div>
            </div>
        )
    }
}
export default emailManagement