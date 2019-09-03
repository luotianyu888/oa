//客户流失分析

import React from 'react'
import Left from './../../commonality/left'
import './../../../assets/css/pc/customerContributionAnalysis.css'
import Navigation from './../../commonality/navigation'
import {Button,Breadcrumb,Select,Table,Form} from 'antd';
class customerChurnAnalysis extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        // selcet
            const Option = Select.Option;

            function handleChange(value) {
                console.log(`selected ${value}`);
            }
        //table
        const dataSource = [
            {
            key: '1',
            number: '1',
            year:'2006',
            serverName: '莱阳新媒体科技有限公司',
            serverManager:'张文',
            drainCauses: '客户迁移'
          },
          {
            key: '2',
            number: '2',
            year:'2006',
            serverName: '来宾新阳对外贸易出口有限公司',
            serverManager:'张文',
            drainCauses: '公司被收购'
          },
          {
            key: '3',
            number: '3',
            year:'2006',
            serverName: '北京铭科科技有限公司',
            serverManager:'张文',
            drainCauses: '客户无采购需求'
          },
          {
            key: '4',
            number: '4',
            year:'2006',
            serverName: '北京铭科科技有限公司',
            serverManager:'张文',
            drainCauses: '客户迁移'
          }
          ,
          {
            key: '5',
            number: '5',
            year:'2006',
            serverName: '北京铭科科技有限公司',
            serverManager:'张文',
            drainCauses: '客户迁移'
          }
          ,
          {
            key: '6',
            number: '6',
            year:'2006',
            serverName: '北京铭科科技有限公司',
            serverManager:'张文',
            drainCauses: '客户迁移'
          }
          ,
          {
            key: '7',
            number: '7',
            year:'2006',
            serverName: '北京铭科科技有限公司',
            serverManager:'张文',
            drainCauses: '客户迁移'
          }
          ,
          {
            key: '8',
            number: '8',
            year:'2006',
            serverName: '北京铭科科技有限公司',
            serverManager:'张文',
            drainCauses: '客户迁移'
          }
          ,
          {
            key: '9',
            number: '9',
            year:'2006',
            serverName: '北京铭科科技有限公司',
            serverManager:'张文',
            drainCauses: '客户迁移'
          }
          ,
          {
            key: '10',
            number: '10',
            year:'2006',
            serverName: '北京铭科科技有限公司',
            serverManager:'张文',
            drainCauses: '客户迁移'
          }
          ,
          {
            key: '11',
            number: '11',
            year:'2006',
            serverName: '北京铭科科技有限公司',
            serverManager:'张文',
            drainCauses: '客户迁移'
          }
        ];
          
        const columns = [
            {
                title: '编号',
                dataIndex: 'number',
                key: 'number',
            },
            {
                title: '年份',
                dataIndex: 'year',
                key: 'year',
            },  
            {
                title: '客户名称',
                dataIndex: 'serverName',
                key: 'serverName',
            }, 
            {
                title: '客户经理',
                dataIndex: 'serverManager',
                key: 'serverManager',
            },
            {
                title: '流失原因',    
                dataIndex: 'drainCauses',
                key: 'drainCauses',
            }
        ];
        return(
            <div>
                <Left></Left>
                <div className="oa-common-right-box">
                    <Navigation></Navigation>
                    <div className="oa-crumbs-box">
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="">统计报表</Breadcrumb.Item>
                            <Breadcrumb.Item >客户流失分析</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className='oa-cca-top-layer'>
                        <Form style={{display:'flex'}}>
                            <div className="oa-cca-top-layer-left">
                                <span>客户名称</span>
                                <input></input>
                            </div>
                            <div className="oa-cca-top-layer-left">
                                <span>客户经理</span>
                                <input></input>
                            </div>
                            <Button style={{marginLeft:'50px',backgroundColor:'#1798DC',color:'#fff'}}>查询</Button>
                        </Form>
                    </div>
                    <div className="oa-cca-bodybox">
                        <Table dataSource={dataSource} columns={columns} />
                    </div>
                </div>
            </div>
        )
    }
}

export default customerChurnAnalysis