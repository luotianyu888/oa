//客户流失管理
import React from 'react'
import Left  from './../../commonality/left'
import Navigation from './../../commonality/navigation'
import {Link} from 'react-router-dom'
import {Button,Breadcrumb,Select,Table,Tag,Divider,message} from 'antd';
import axios from 'axios';
class customerChurn_management extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }





    //列表
    componentWillMount() {

        const query = this.props.location.search ;
        const arr = query.split('&')
        const id = arr[0].substr(4)
        this.setState({
            ids:id
        })
        var that=this;
        axios({
            method:'get',
            url:'api/people/liushi_index',
        })
        .then(function(response){
            var list1 = response.data.data;
            that.setState({
                list:list1
            })
           console.log(id)
        })
        .catch(function(err){
         console.log(err)
        })
    } 



    
    //获取Input的值
    getInput=(e)=>{
        let inputValue = e.target.value;
        let inputName = e.target.name;
        this.setState({
            [inputName] : inputValue
        })
    }

//获取下拉选择框的值
xuanze(e,at){
    this.setState({
        [at]:e
    })

}


    //搜索查询
    submit(){
        var that=this;
        var data = {
                username:this.state.username,
                peoplem:this.state.peoplem,
                
        }
       
        console.log(data)
        if(data){
            axios({
                method: 'post',
                url:'api/people/liushi_index',
                data: data
            })
            .then(function (response) {
                if(response.data.code == 1){
                    var list = response.data.data;
                    list.forEach(element => {
                        element.key=element.lid
                    });
                    that.setState({
                        list:list
                    })
                    console.log(list)
                }else{
                    message.error(response.data.msg,1)
                }
            
            })
            .catch(function (error) {
                message.error(error,1)
            })
        }else{
            message.error('请至少填写一项搜索词！',1)
        }
    }


    render(){
         // selcet
         const Option = Select.Option;

         function handleChange(value) {
             console.log(`selected ${value}`);
         }
         //table
        
        const columns = [
            {
                title: '编号',
                dataIndex: 'usernum',
                key: 'usernum',
            },  
            {
                title: '客户名称',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: '客户经理',
                dataIndex: 'peoplem',
                key: 'peoplem',
            },
            // {
            //     title:'上次下单时间',
            //     dataIndex:'xiadan_data',
            //     key:'xiadan_data'
            // },
            {
                title:'确认流失时间',
                dataIndex:'liushi_data',
                key:'liushi_data'
            },
            { 
                title:'状态',
                dataIndex:'zhuangtai',
                key:'zhuangtai'
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render: (text, record) => (
                    <span>
                        
                        <a href={'./customerChurn_m_deferLoss?id='+record.lid} >暂缓流失</a> <Divider type="vertical" />
                        <a href={'./customerChurn_m_ConfirmLoss?id='+record.lid}>确定流失</a>
                    </span>
                  ),
            }
            // {
            //     title: '操作',
            //     key: 'tags',
            //     dataIndex: 'tags',
            //     render: tags => (
            //       <Link to=''>
            //         {tags.map(tag => {
            //           let color = tag.length > 5 ? 'geekblue' : 'green';
            //           if (tag === 'loser') {
            //             color = 'volcano';
            //           }
            //           return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
            //         })}
            //       </Link>
            //     ),
            // }
        ];
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
                            <input size="" name="username" placeholder="" style={{height:32}} onChange={this.getInput.bind(this)}/>
                        </div>
                        <div className="oa-cca-top-layer-left">
                            <span>客户经理</span>
                            <input size="" name="peoplem" placeholder="" style={{height:32}} onChange={this.getInput.bind(this)}/>
                        </div>
                        {/* <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled">Disabled</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select> */}
         
                        <Button style={{marginLeft:'50px',backgroundColor:'#1798DC',color:'#fff'}} onClick={this.submit.bind(this)}>查询</Button>
                    </div>
                    <div className="oa-cca-bodybox">
                    <Table columns={columns} dataSource={this.state.list} />
                    </div>
                </div>
            </div>
        )
    }
}
export default customerChurn_management