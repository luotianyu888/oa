//客户构成分析

import React from 'react'
import Left from './../../commonality/left'
import Navigation from './../../commonality/navigation'
import {Breadcrumb,Table} from 'antd';

class customerCompositionAnalysis extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        //table
        const dataSource = [
            {
            key: '1',
            number: '1',
            clientGrade: '普通客户',
            clientNumber: '20'
          },   {
            key: '2',
            number: '2',
            clientGrade: '大客户',
            clientNumber: '12'
          } , 
          {
            key: '3',
            number: '3',
            clientGrade: '重点客户',
            clientNumber: '145'
          },
          {
            key: '4',
            number: '1',
            clientGrade: '战略合作伙伴',
            clientNumber: '245'
          },   {
            key: '5',
            number: '2',
            clientGrade: '合作伙伴',
            clientNumber: '15'
          } 
          
        ];
          
          const columns = [
            {
                title: '编号',
                dataIndex: 'number',
                key: 'number',
              },  
            {
            title: '客户等级',
            dataIndex: 'clientGrade',
            key: 'clientGrade',
          }, {
            title: '客户数量（个）',
            dataIndex: 'clientNumber',
            key: 'clientNumber',
          }];
        return(
            <div>
                <Left></Left>
                <div className="oa-common-right-box">
                    <Navigation></Navigation>
                    <div className="oa-crumbs-box">
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="">统计报表</Breadcrumb.Item>
                            <Breadcrumb.Item >客户构成分析</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-cca-bodybox" style={{marginTop:'60px'}}>
                        <Table dataSource={dataSource} columns={columns} />
                    </div>
                </div>
            </div>
        )
    }
}
export default customerCompositionAnalysis