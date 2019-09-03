//客户贡献分析
import React from 'react'
import Left from './../../commonality/left'
import './../../../assets/css/pc/customerContributionAnalysis.css'
import Navigation from './../../commonality/navigation'
import {Button,Breadcrumb,Select,Table} from 'antd';
class customerContributionAnalysis extends React.Component{
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
            serverName: '北京铭科科技有限公司',
            money: '1231245'
          },   {
            key: '2',
            number: '2',
            serverName: '青岛无限数码科技有限公司',
            money: '1231245'
          } , 
          {
            key: '3',
            number: '3',
            serverName: '无锡斯威克网络科技有限公司',
            money: '1231245'
          },
          {
            key: '4',
            number: '1',
            serverName: '深圳优悦集团有限公司',
            money: '1231245'
          },   {
            key: '5',
            number: '2',
            serverName: '北京铭科科技有限公司',
            money: '1231245'
          } , 
          {
            key: '6',
            number: '3',
            serverName: '北京铭科科技有限公司',
            money: '1231245'
          },
          {
            key: '7',
            number: '1',
            serverName: '北京铭科科技有限公司',
            money: '1231245'
          },   {
            key: '8',
            number: '2',
            serverName: '北京铭科科技有限公司',
            money: '1231245'
          } , 
          {
            key: '9',
            number: '3',
            serverName: '北京铭科科技有限公司',
            money: '1231245'
          },
          {
            key: '10',
            number: '1',
            serverName: '北京铭科科技有限公司',
            money: '1231245'
          },   {
            key: '11',
            number: '2',
            serverName: '北京铭科科技有限公司',
            money: '1231245'
          } , 
          {
            key: '12',
            number: '3',
            serverName: '北京铭科科技有限公司',
            money: '1231245'
          }
        ];
          
          const columns = [
            {
                title: '编号',
                dataIndex: 'number',
                key: 'number',
              },  
            {
            title: '客户名称',
            dataIndex: 'serverName',
            key: 'serverName',
          }, {
            title: '订单金额（元）',
            dataIndex: 'money',
            key: 'money',
          }];
        return(
            <div>
                <Left></Left>
                <div className="oa-common-right-box">
                    <Navigation></Navigation>
                    <div className="oa-crumbs-box">
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="">统计报表</Breadcrumb.Item>
                            <Breadcrumb.Item >客户贡献分析</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className='oa-cca-top-layer'>
                        <div className="oa-cca-top-layer-left">
                            <span>客户名称</span>
                            <input></input>
                        </div>
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>Disabled</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                        <Button style={{marginLeft:'50px',backgroundColor:'#1798DC',color:'#fff'}}>查询</Button>
                    </div>
                    <div className="oa-cca-bodybox">
                        <Table dataSource={dataSource} columns={columns} />
                    </div>
                </div>
            </div>
        )
    }
}

export default customerContributionAnalysis