import React,{ Component } from "react";
import { Menu, Icon } from 'antd';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

class SliderMenu extends Component{

  render() {
    return(
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub2']}
        style={{ width: 256 }}
      >
        <MenuItem key="sub1">
          <Icon type="pie-chart" />
          <span>首页</span>
        </MenuItem>
        <SubMenu key="sub2" title={<span><Icon type="mail" /><span>你的事项</span></span>}>
          <MenuItem key="1">全部</MenuItem>
          <MenuItem key="2">已完成</MenuItem>
          <MenuItem key="3">未完成</MenuItem>
        </SubMenu>
        <MenuItem key="sub3">
          <Icon type="pie-chart" />
          <span>完成情况</span>
        </MenuItem>
      </Menu>

    );
  }
}

export default SliderMenu;