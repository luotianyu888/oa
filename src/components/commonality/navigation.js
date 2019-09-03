import React from 'react'
import { Menu, Dropdown, Button} from 'antd';
class navigation extends React.Component{
    constructor(){
        super()
        this.state={
            stype:false
        }
    }
    clickstate=()=>{
        this.setState({
            stype:!this.state.stype
        })
        console.log(this.state.stype);
    }
    render(){
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
                <div className="oa-cright-header">
                    <div onClick={this.clickstate.bind(this)}>12313</div>
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <Button>admin</Button>
                    </Dropdown>
                </div>
            </div>
        )
    }
}
export default navigation