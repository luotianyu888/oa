//组管理
import React from 'react'
import Left from './../../commonality/left'
import Navigation from './../../commonality/navigation'
import { Button,Breadcrumb,Select,Table,Tag,Divider} from 'antd';
import './../../../assets/css/pc/groupManagement.css'
const Option = Select.Option
class groupManagement extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    handleChange=(value)=> {
        console.log(`selected ${value}`);
    }
    update=()=>{
        console.log('updata')
        this.setState({
           
        })
    }
    delete=()=>{
        console.log('delete')
    }
    render(){
        const dataSource = [
            {
            key: '1',
            number:'001',
            groupName: '设计组',
            groupMembers:[
                '张扬',
                '张辽',
                '孙乾',
                '夏侯渊'
            ],
            address: '西湖区湖底公园1号'
          },  
          {
            key: '1',
            number:'001',
            groupName: '设计组',
            groupMembers:[
                '张扬',
                '张辽',
                '孙乾',
                '夏侯渊'
            ],
            address: '西湖区湖底公园1号'
          },
          {
            key: '1',
            number:'001',
            groupName: '设计组',
            groupMembers:[
                '张扬',
                '张辽',
                '孙乾',
                '夏侯渊'
            ],
            address: '西湖区湖底公园1号'
          },
          {
            key: '1',
            number:'001',
            groupName: '设计组',
            groupMembers:[
                '张扬',
                '张辽',
                '孙乾',
                '夏侯渊'
            ],
            address: '西湖区湖底公园1号'
          },
          {
            key: '2',
            number:'001',
            groupName: '设计组',
            groupMembers:[
                '张扬',
                '张辽',
                '孙乾',
                '夏侯渊',
                '张扬',
                '张辽',
                '孙乾',
                '夏侯渊',
                '张扬',
                '张辽',
                '孙乾',
                '夏侯渊',
                '张扬',
                '张辽',
                '孙乾',
                '夏侯渊'
              
            ],
            address: '西湖区湖底公园1号'
          }
        ];
          
          const columns = [
              {
                title: '编号',
                dataIndex: 'number',
                key: 'number',
            }, 
            {
                title: '组名',
                dataIndex: 'groupName',
                key: 'groupName',
            },
            {
                title: '组成员',
                dataIndex: 'groupMembers',
                key: 'groupMembers',
                groupMembers:'groupMembers',
                render: groupMembers =>(
                <span className="oa-gm-span">
                        {groupMembers.map(groupMembers => {
                        return <Tag  key={groupMembers}>{groupMembers}</Tag>;
                    })}
                </span>
            ),
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render: () => (
                    <span>
                      <a onClick={this.update.bind(this)}>修改</a>
                      <Divider type="vertical" />
                      <a onClick={this.delete.bind(this)}>删除</a>
                    </span>
                  ),
            }
        ];
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
                    <div className="oa-gm-topbox">
                        <div className="oa-gm-topleft">
                            组名：
                            <Select defaultValue="lucy" style={{ width: 150 }} onChange={this.handleChange.bind(this)}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled">Disabled</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </div>
                        <Button  style={{backgroundColor:'#1798DC'}}>查询</Button>
                        <Button href="./peopleManagement" style={{backgroundColor:'#1798DC'}}>新建</Button>
                    </div>
                    <div className="oa-gm-tableList">
                        <Table dataSource={dataSource} columns={columns} />
                    </div>
                </div>
            </div>
        )
    }
}
export default groupManagement