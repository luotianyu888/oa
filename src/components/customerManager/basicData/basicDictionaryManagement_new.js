//数据字典管理-新建

import  React from 'react';
import Left from './../../commonality/left';
import { Menu, Dropdown, Button,Breadcrumb,Form,Input} from 'antd';
import './../../../assets/css/pc/basicDictionaryManagement_new.css';

 class basicDictionaryManagement_new extends React.Component{
     constructor(){
         super()
         this.state={

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
                            <Breadcrumb.Item href="">基础数据</Breadcrumb.Item>
                            <Breadcrumb.Item href="">数据字典管理</Breadcrumb.Item>
                            <Breadcrumb.Item >新建</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-bdm-top-laye">
                        <Button type="primary">保存</Button>
                        <Button type="primary" href="./" style={{marginLeft:'20px'}}>返回</Button>
                    </div>
                    <div className="oa-bdm-formbox">
                        <Form style={{width:'100%',height:'300px'}}>
                                <ul className="oa-bdm-inbox">
                                    <li className="oa-bdm-fromlist">
                                        <div>
                                            编号
                                        </div>
                                        <Input size="large" placeholder="" />
                                    </li>
                                    <li className="oa-bdm-fromlist">
                                        <div>
                                            类别
                                        </div>
                                        <Input size="large" placeholder="" />
                                    </li>
                                    <li className="oa-bdm-fromlist">
                                        <div>
                                            条目
                                        </div>
                                        <Input size="large" placeholder="" />
                                    </li>
                                    <li className="oa-bdm-fromlist">
                                        <div>
                                            值
                                        </div>
                                        <Input size="large" placeholder="" />
                                    </li>
                                    <li className="oa-bdm-fromlist">
                                        <div>
                                            是否编辑
                                        </div>
                                        <select>
                                            <option>是</option>
                                            <option>否</option>
                                        </select>
                                    </li>
                                   
                                </ul>
                        </Form>
                    </div>
                </div>
             </div>
         )
     }
 }

 export default basicDictionaryManagement_new = Form.create({})(basicDictionaryManagement_new);