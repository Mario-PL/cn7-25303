import React, { Component } from 'react';
import { Menu, Icon, Button, Divider } from 'choerodon-ui';
const SubMenu = Menu.SubMenu;

require('../role/mastercss.less')

export default class Master extends Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const SubMenu = Menu.SubMenu;
    const { AutoRouter } = this.props;

    return (
      <div>
        {/*头部*/}
        <div style={{height:'48px',width:'100%',backgroundColor:'#3F51B5'}}>
          <Icon type="dehaze" style={{marginTop: '1%',marginLeft:'1%'}}/>
          <span style={{fontSize:'20px',marginTop:'5%',marginLeft:'0.5%'}}>Choerodon</span>
          <span style={{fontSize:'14px',marginTop:'5%',marginLeft:'12%'}}>测试项目</span>
          <span style={{fontSize:'14px',marginTop:'5%',marginLeft:'5%'}}>管理</span>
        </div>

        
          {/*左边下拉菜单*/}
          <div style={{ width: 250, height: 1533,backgroundColor:'#FAFAFA',float:'left'}}>
            <div id='MenuHead'>
              <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 0, height: 48 }}>
                <Icon type={this.state.collapsed ? 'dehaze' : 'dehaze'} />
              </Button>
              <span>平台设置</span>
            </div>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              inlineCollapsed={this.state.collapsed}
            >
              <Menu.Item key="1">
                <Icon type="pie_chart_outlined" />
                <span>组织管理</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop_windows" />
                <span>角色管理</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="inbox" />
                <span>角色标签</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="inbox" />
                <span>平台角色分配</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="inbox" />
                <span>Root用户设置</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="inbox" />
                <span>菜单配置</span>
              </Menu.Item>
              <Menu.Item key="7">
                <Icon type="inbox" />
                <span>组织类型</span>
              </Menu.Item>
              <Menu.Item key="8">
                <Icon type="inbox" />
                <span>项目类型</span>
              </Menu.Item>
              <Menu.Item key="9">
                <Icon type="inbox" />
                <span>仪表盘配置</span>
              </Menu.Item>
              <Menu.Item key="10">
                <Icon type="inbox" />
                <span>系统配置</span>
              </Menu.Item>
            </Menu>
          </div>
          {/*右边router*/}
          <div>
            <AutoRouter /> 
          </div>
        
      </div>

    );
  }
}

