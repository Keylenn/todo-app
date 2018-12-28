import React,{ Component } from "react";
import { Menu, Icon } from 'antd';
import {
  HashRouter as Router,
  NavLink
} from "react-router-dom";

const MenuItem = Menu.Item;


const SliderMenu = () => (
  <Router>
      <Menu
        mode="inline"
        defaultSelectedKeys={['sub1']}
        style={{ width: 256 }}
      >
        <MenuItem key="sub1">
          <NavLink to="/" exact  replace>
            <Icon type="pie-chart" />
            <span>首页</span>
          </NavLink>
        </MenuItem>
        <MenuItem key="sub2">
          <NavLink to="/todo" exact replace>
            <Icon type="pie-chart" />
            <span>你的事项</span>
          </NavLink>
        </MenuItem>
        <MenuItem key="sub3">
          <NavLink to="/completion" exact replace>
            <Icon type="pie-chart" />
            <span>完成情况</span>
          </NavLink>
        </MenuItem>
      </Menu>
  </Router>
);

/*class SliderMenu extends Component{
  render() {
    return(
      <Menu
        mode="inline"
        defaultSelectedKeys={['sub1']}
        style={{ width: 256 }}
      >
        <MenuItem key="sub1">
          <NavLink to="/" exact>
            <Icon type="pie-chart" />
            <span>首页</span>
          </NavLink>
        </MenuItem>
        <MenuItem key="sub2">
          <Icon type="pie-chart" />
          <span>你的事项</span>
        </MenuItem>
        <MenuItem key="sub3">
          <Icon type="pie-chart" />
          <span>完成情况</span>
        </MenuItem>
      </Menu>
    );
  }
}*/

export default SliderMenu;