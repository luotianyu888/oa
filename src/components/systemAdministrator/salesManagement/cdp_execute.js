// 客户开发计划-执行

import React from 'react';
import Left from './../../commonality/left'
import {Link} from 'react-router-dom'
import { Menu, Dropdown, Button,Breadcrumb,Form,Select,Pagination} from 'antd';
import './../../../assets/css/pc/cdp_execute.css'

class cdp_execute extends React.Component{
    constructor(){
        super()
        this.state={
            data:[
                {
                    num:'001',
                    clientname:'睿智科技有限公司睿智科技有限公司',
                    synopsis:'有关服务器续费意向',
                    linkman:'王威武',
                    phonenumber:'13467984512',
                    creationtime:'2018-10-11',
                    designate:'张文文',
                    developmentstatus:'开发成功',
                },
                {
                    num:'001',
                    clientname:'睿智科技有限公司',
                    synopsis:'有关服务器续费意向',
                    linkman:'王威武',
                    phonenumber:'13467984512',
                    creationtime:'2018-10-11',
                    designate:'张文文',
                    developmentstatus:'开发成功',
                },
                {
                    num:'001',
                    clientname:'睿智科技有限公司',
                    synopsis:'有关服务器续费意向',
                    linkman:'王威武',
                    phonenumber:'13467984512',
                    creationtime:'2018-10-11',
                    designate:'张文文',
                    developmentstatus:'开发成功',
                },
                {
                    num:'001',
                    clientname:'睿智科技有限公司',
                    synopsis:'有关服务器续费意向',
                    linkman:'王威武',
                    phonenumber:'13467984512',
                    creationtime:'2018-10-11',
                    designate:'张文文',
                    developmentstatus:'开发成功',
                },
                {
                    num:'001',
                    clientname:'睿智科技有限公司',
                    synopsis:'有关服务器续费意向',
                    linkman:'王威武',
                    phonenumber:'13467984512',
                    creationtime:'2018-10-11',
                    designate:'张文文',
                    developmentstatus:'开发成功',
                }
            ],
            columns:[
                {
                    key:1,
                    name:'编号',
                    className:''
                },
                {
                  key:2,
                  name:'客户名称',
                  className:'oa-cdpe-table-client'
                },
                {
                    key:3,
                    name:'概要',
                    className:''
                },
                {
                    key:4,
                    name:'联系人',
                    className:''
                },
                {
                    key:5,
                    name:'联系电话',
                    className:''
                },
                {
                    key:6,
                    name:'创建时间',
                    className:''
                },
                {
                    key:7,
                    name:'已指派',
                    className:''
                },
                {
                    key:8,
                    name:'开发状态',
                    className:''
                },
                {
                    key:9,
                    name:'操作',
                    className:''
                },
            ]
        }
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
          function  handleChange(value) {
            console.log(`selected ${value}`);
          }

          //table
          
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
                            <Breadcrumb.Item href="">营销管理</Breadcrumb.Item>
                            <Breadcrumb.Item >客户开发计划</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-cdpe-groupselect">
                        <Form>
                            <ul className="oa-cdpe-groupselectin">
                                <li className="oa-cdpe-groupselectin-layer1">
                                    <div>客户名称:</div>
                                    <input></input>
                                </li>
                                <li className="oa-cdpe-groupselectin-layer2">
                                    <div>概要:</div>
                                    <input></input>
                                </li>
                                <li className="oa-cdpe-groupselectin-layer1">
                                    <div>联系人:</div>
                                    <input></input>
                                </li>
                                <li className="oa-cdpe-groupselectin-layer2">
                                    <div>概要:</div>
                                    <Select size="large" defaultValue="lucy" style={{ width: 160 }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="disabled" >Disabled</Option>
                                        <Option value="yiminghe">Yiminghe</Option>
                                    </Select>
                                </li>
                            </ul>    
                        </Form> 
                        <input type="submit" className="oa-cdpe-submit"></input>
                    </div>
                    <div className="oa-cdpe-outbox">
                        <table style={{width:'100%'}}>
                            <thead>
                                <tr style={{width:'100%',backgroundColor:'#1798DC',textAlign:'center',height:'40px',color:'#fff'}}>
                                    {this.state.columns.map(function(v,k){
                                        return(
                                                <th className={v.className}>
                                                            {v.name}
                                                    </th>
                                                )
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>
                               
                                    {this.state.data.map(function(valus,key){
                                        return(
                                            <tr className="oa-cdpe-databable">   
                                                <td>
                                                    {valus.num}
                                                </td>
                                                <td className="oa-cdpe-table-client dh" title={valus.clientname}>
                                                    {valus.clientname}
                                                </td>
                                                <td className="oa-cdpe-table-client dh" title={valus.synopsis}>
                                                    {valus.synopsis}
                                                </td>
                                                <td>
                                                    {valus.linkman}
                                                </td>
                                                <td>
                                                    {valus.phonenumber}
                                                </td>
                                                <td>
                                                    {valus.creationtime}
                                                </td>
                                                <td>
                                                    {valus.designate}
                                                </td>
                                                <td>
                                                    {valus.developmentstatus}
                                                </td>  
                                                <td>
                                                    <Link className='oa-ta-a' to='/cdp_formulate:id' key={key}>制定</Link>
                                                    <span style={{padding:'0 15px'}}>|</span>
                                                    <Link className='oa-ta-a' to='/'>执行</Link>
                                                </td>
                                            </tr> 
                                        )
                                    })}
    
                            </tbody>
                        </table>
                        <div className="oa-pagination">
                            <Pagination  defaultCurrent={1} total={50} />
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default cdp_execute