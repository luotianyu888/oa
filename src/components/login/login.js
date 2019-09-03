import React from "react";
import "../../assets/css/pc/login.css";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uname:'',
      upass: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let  uname= event.target.uname
    let  upass = event.target.upa
        this.setState({
            uname:uname,
            upass:upass
        })
  }

  render() {
    return (
      <div className="mainbox">
          <div className="sc-amlogin-nav">
              OA系统后台登录
          </div>
          <div className="sc-loginbox">
              <div className="sc-loginin">
                <div className="sc-login-cname">
                    陕西畅通网络科技有限公司      
                </div>
                <form>
                    <input className="sc-login-uname" name="uname" value={this.state.uname} onChange={this.handleInputChange.bind(this)} placeholder='用户名'/>
                    <input className="sc-login-upass" type='password' name="upass" value={this.state.upass} onChange={this.handleInputChange.bind(this)} placeholder='密码'></input>
                    <button className="login-in">登录</button>
                </form>
                <div className="sc-login-memorybox">
                    {/* <div className="sc-lsda">
                        <input type="checkbox"/>
                        <span>记住密码</span>
                    </div>
                    <Link className="lostupass">忘记密码？</Link> */}
                </div>
              </div>
          </div>
          <div className="sc-malogin-footer">
              copyright@ 2007-2019  陕西畅通网络科技有限公司  陕ICP备10235580号
          </div>
      </div>
    );
  }
}

export default Login;
