//人员管理-岗位

import React from "react";
import Left from "./../../commonality/left";
import {
  Breadcrumb,
  Button,
  Table,
  Select,
  Input,
  Checkbox,
  Row,
  Col,
  Form
} from "antd";
import "./../../../assets/css/pc/peopleManagement_post.css";
import Navigation from "./../../commonality/navigation";
const Option = Select.Option;
class peopleManagement_post extends React.Component {
  constructor() {
    super();
    this.state = {
      stype: false
    };
  }
  //弹出层显示隐藏
  addpost = () => {
    this.setState({
      stype: !this.state.stype
    });
  };
  //提交表单
  submit = () => {};

  render() {
    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    const columns = [
      {
        title: "人员编号",
        dataIndex: "number",
        key: "number"
      },
      {
        title: "所属部门",
        dataIndex: "departmentName",
        key: "departmentName"
      },
      {
        title: "岗位名称",
        dataIndex: "postName",
        key: "postName"
      },
      {
        title: "操作",
        key: "action",
        render: (text, record) => (
          <span>
            <a href="./">删除</a>
          </span>
        )
      }
    ];
    const data = [
      {
        key: "1",
        number: "01",
        departmentName: "设计部",
        postName: "设计师",
        action: ["nice", "developer"]
      },
      {
        key: "2",
        number: "02",
        departmentName: "销售部",
        postName: "客户经理",
        action: ["nice", "developer"]
      },
      {
        key: "3",
        number: "03",
        departmentName: "人事部",
        postName: "人事经理",
        action: ["nice", "developer"]
      },
      {
        key: "4",
        number: "04",
        departmentName: "售后部",
        postName: "产品售后",
        action: ["nice", "developer"]
      },
      {
        key: "5",
        number: "05",
        departmentName: "策划部",
        postName: "策划设计师",
        action: ["nice", "developer"]
      }
    ];
    //
    function onChange(checkedValues) {
      console.log("checked = ", checkedValues);
    }
    return (
      <div>
        <Left />
        <div className="oa-common-right-box">
          <Navigation />
          <div className="oa-crumbs-box">
            <Breadcrumb separator=">">
              <Breadcrumb.Item href="">权限管理</Breadcrumb.Item>
              <Breadcrumb.Item>密码维护</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="oa-pmp-topbox">
            <Button type="primary" onClick={this.addpost.bind(this)}>
              添加岗位
            </Button>
            <Button type="primary">返回</Button>
          </div>
          <div className="oa-pmpp-tablelist">
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
        <div className={this.state.stype ? "oa-pmp-adddpost" : "unshow"}>
          <Form>
            <div className="oa-pmp-post-title">岗位添加</div>
            <ul className="oa-pmp-popupbox">
              <li className="oa-pmp-popupbox-layer">
                <div className="oa-pmp-popupbox-layer-left">部门编号</div>
                <div className="oa-pmp-popupbox-layer-right">001</div>
              </li>
              <li className="oa-pmp-popupbox-layer">
                <div className="oa-pmp-popupbox-layer-left">部门编号</div>
                <div className="oa-pmp-popupbox-layer-right csal">
                  <Select
                    defaultValue="jack"
                    style={{ width: "100%" }}
                    onChange={handleChange}
                  >
                    <Option value="jack">设计部</Option>
                    <Option value="lucy">项目部</Option>
                    <Option value="lick">电商部</Option>
                    <Option value="Yiminghe">人事部</Option>
                  </Select>
                </div>
              </li>
              <li className="oa-pmp-popupbox-layer">
                <div className="oa-pmp-popupbox-layer-left">部门编号</div>
                <div className="oa-pmp-popupbox-layer-right">
                  <Input />
                </div>
              </li>
              <li className="oa-pmp-popupbox-layer">
                <div className="oa-pmp-popupbox-layer-left">权限设置</div>
                <div className="oa-pmp-popupbox-layer-right-li">
                  <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
                    <Row>
                      <Col span={8}>
                        <Checkbox value="A">营销管理</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="B">服务管理</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="C">客户管理</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="D">统计报表</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="E">基础数据</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="F">权限管理</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </div>
              </li>
            </ul>
            <div className="submit-box">
              <input type="submit" onClick={this.submit.bind(this)} />
              <input type="reset" />
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
export default peopleManagement_post;
