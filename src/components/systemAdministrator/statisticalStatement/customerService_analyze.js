//客户服务分析

import React from 'react';
import Left from './../../commonality/left'
import Navigation from './../../commonality/navigation'
import {Button,Breadcrumb,Select} from 'antd';
import './../../../assets/css/pc/customerService_analyze.css'
const axios = require('axios');
class customerService_analyze extends React.Component{
    constructor(){
        super()
        this.state={
            data:[
                {
                    year:'2015',
                    serialNumber:'01',
                    classification:'投诉',
                    number:20
                },
                {   year:'2016',
                    serialNumber:'02',
                    classification:'建议',
                    number:20
                },
                {   year:'2016',
                    serialNumber:'03',
                    classification:'咨询',
                    number:20
                }
            ],
            year:[
                {
                    years:2015
                },
                {
                    years:2016
                },
                {
                    years:2017
                },
                {
                    years:2018
                },
                {
                    years:2019
                }
            ]

        }
    }
    componentWilMount(){
        
    }
    render(){
        //selcet选项卡
        const Option = Select.Option;

        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        //query
        function clickQuery(value){
            console.log(value)
             axios.get('http://a.itying.com/api/productlist')
             .then(function(response){
                  console.log(response);
            })
            .catch(function(err){
                  console.log(err);
            });  
        }
        return(
            <div>
                <Left></Left>
                <div className="oa-common-right-box">
                    <Navigation></Navigation>
                    <div className="oa-crumbs-box">
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="">统计报表</Breadcrumb.Item>
                            <Breadcrumb.Item >客户服务分析</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="oa-csa-top-layer">
                        <span style={{paddingRight:'15px'}}>年份</span>
                        <Select defaultValue={this.state.year[0].years} style={{ width: 120 }} onChange={handleChange}>
                            {
                                this.state.year.map((y,index)=>{
                                    return(
                                        <Option value={y.years}>{y.years}</Option>
                                    )
                                })
                            }
                        </Select>
                        <Button  onClick={clickQuery} style={{marginLeft:'105px',backgroundColor:'#1798DC',color:'#fff'}}>提交</Button>
                    </div>
                    <div className="oa-csa-bodybox">
                        <table width='100%'>
                            <tr className="oa-csa-table-heade">
                                <td  style={{width:'33%'}}>编号</td>
                                <td  style={{width:'33%'}}>服务类型</td>
                                <td  style={{width:'33%'}}>服务数量</td>
                            </tr>
                            {
                                this.state.data.map((v,k)=>{
                                    return(
                                        <tr className="oa-csa-table-body" key={k} data-key={k}>
                                            <td style={{width:'33%'}}>{v.serialNumber}</td>
                                            <td style={{width:'33%'}}>{v.classification}</td>
                                            <td style={{width:'33%'}}>{v.number}</td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default customerService_analyze