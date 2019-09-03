//人员管理-部门

import React from 'react';
import Left from './../../commonality/left'
import { Button,Breadcrumb,Table,Form,Input} from 'antd';
import './../../../assets/css/pc/peopleManagement_section.css'
import Navigation from './../../commonality/navigation'
class peopleManagement_section  extends React.Component{
    constructor(){
        super()
        this.state={
            popupsState:false
        }
    }
    add_section(){
        console.log('ok')
        this.setState({
            popupsState:!this.state.popupsState
        })
    }
    render(){
        
          const columns = [
            {
                title: '人员编号',
                dataIndex: 'number',
                key: 'number',
            }, 
            {
                title: '部门名称',
                dataIndex: 'departmentName',
                key: 'departmentName',
            }, 
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                <span>
                    <a href="./">删除</a>
                </span>
                ),
          }
        ];
          const data = [
            {
                key: '1',
                number: '01',
                departmentName: '设计部',
                action: ['nice', 'developer'],
            },
            {
                key: '2',
                number: '02',
                departmentName: '销售部',
                action: ['nice', 'developer'],
            },
            {
                key: '3',
                number: '03',
                departmentName: '人事部',
                action: ['nice', 'developer'],
            },
            {
                key: '4',
                number: '05',
                departmentName: '售后部',
                action: ['nice', 'developer'],
            },
            {
                key: '5',
                number: '06',
                departmentName: '策划部',
                action: ['nice', 'developer'],
            },
        ]
        return(
            <div>
                <Left></Left>
                <div className="oa-common-right-box">
                    <Navigation></Navigation>
                    <div className="oa-crumbs-box">
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="">权限管理</Breadcrumb.Item>
                            <Breadcrumb.Item href="">人员管理</Breadcrumb.Item>
                            <Breadcrumb.Item >部门管理</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-pmp-topbox">
                        <Button type="primary" onClick={this.add_section.bind(this)}>添加部门</Button>
                        <Button type="primary" >返回</Button>
                    </div>
                    <div className="oa-pmp-tablelist">
                        <Table columns={columns} dataSource={data} />
                    </div>
                </div>
                <div className={this.state.popupsState?'oa-pmp-popups':'unshow'}>
                    <Form>
                        <ul className="oa-pmp-popups-box">
                            <li className="oa-pmp-popups-layer1">
                                添加部门
                            </li>
                            <li className="oa-pmp-popups-layer2">
                                <div>部门名称</div>
                                <Input/>
                            </li>
                            <li className="oa-pmp-popups-layer3">
                                <input type="submit"/>
                                <input type="reset"/>
                            </li>
                        </ul>
                    </Form>
                </div>
            </div>
        )
    }
}
export default peopleManagement_section