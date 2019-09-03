import React from 'react';
import './../../assets/css/pc/left.css'
import {Link} from 'react-router-dom';
class Left extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div>
                <div className="oa-common-leftbox">
                    <div className="logo">
                            畅通OA管理系统
                    </div>
                    <ul className="">
                        <Link to='/index'>
                            <li className="oa-option-list-laye1">
                                <div className="oa-content-box">网站首页</div>
                                <div className="iconfont icon-xiangyou-copy" style={{color:'#fff'}}></div>
                            </li>
                        </Link>
                        <li className="oa-option-list-laye2">
                            <div className="oa-content-box">营销管理</div>
                            <div className="iconfont icon-xiangyou-copy" style={{color:'#fff'}}></div>
                        </li>
                        <li className="oa-option-list-laye2">
                            <div className="oa-content-box">服务管理</div>
                            <div className="iconfont icon-xiangyou-copy" style={{color:'#fff'}}></div>
                        </li>
                        <li className="oa-option-list-laye2">
                            <div className="oa-content-box">客户管理</div>
                            <div className="iconfont icon-xiangyou-copy" style={{color:'#fff'}}></div>
                        </li>
                        <li className="oa-option-list-laye2">
                            <div className="oa-content-box">统计报表</div>
                            <div className="iconfont icon-xiangyou-copy" style={{color:'#fff'}}></div>
                        </li>
                        <li className="oa-option-list-laye2">
                            <div className="oa-content-box">基础数据</div>
                            <div className="iconfont icon-xiangyou-copy" style={{color:'#fff'}}></div>
                        </li>
                        <li className="oa-option-list-laye2">
                            <div className="oa-content-box">邮件管理</div>
                            <div className="iconfont icon-xiangyou-copy" style={{color:'#fff'}}></div>
                        </li>
                        <li className="oa-option-list-laye2">
                            <div className="oa-content-box">权限管理</div>
                            <div className="iconfont icon-xiangyou-copy" style={{color:'#fff'}}></div>
                        </li>
                        <li className="oa-option-list-laye2">
                            <div className="oa-content-box">账户管理</div>
                            <div className="iconfont icon-xiangyou-copy" style={{color:'#fff'}}></div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Left;