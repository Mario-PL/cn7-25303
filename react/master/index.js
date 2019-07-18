import React, { Component } from 'react';
import { Menu, Icon, Button, Divider, Avatar, Popover, Table } from 'choerodon-ui';
import { axios } from '@choerodon/boot';
import { Size } from 'choerodon-ui/lib/_util/enum';
const SubMenu = Menu.SubMenu;

require('../style/mastercss.less')

export default class Master extends Component {
  state = {
    collapsed: false,
    username:"",
    useremail:"",
  }

  //好像是左侧伸缩菜单相关
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  //设置axios获得值
  componentWillMount(){
    const _this=this;
    axios
    .get("http://api.staging.saas.hand-china.com/iam/v1/users/self")
    .then(function (response) {
      _this.setState({
        username:response.realName,
        useremail:response.email
      }) 
    })
    .catch(function (error) {
        console.log(error);
    });
  }
  render() {
    //获取用户姓名和邮箱
    const username = this.state.username;
    const useremail = this.state.useremail;

    const SubMenu = Menu.SubMenu;
    const { AutoRouter } = this.props;
    /* 定义点击头像时气泡卡片的信息 */
    const content = (
      <div>
        <p>
          <div style={{float:'left'}}><Avatar icon="person" size="large"/></div>
          <div style={{float:'left'}}>
            <div>{username}</div>
            <div>{useremail}</div>
          </div>
        </p>
        <div style={{clear:'both'}}>
          <p><Button icon='person'>个人信息</Button></p>
          <p><Button icon='vpn_key'>修改密码</Button></p>
          <p><Button icon=''>权限信息</Button></p>
          <p><Button icon=''>授权管理</Button></p>
          <p><Button icon='comment'>消息通知</Button></p>
          <p><Button icon=''>退出登录</Button></p>
        </div>
      </div>
    );

    /* 表定义 */
    const columns = [{
      title: '角色名称',
      dataIndex: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '角色编码',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }, {
      title: '启用状态',
      dataIndex: 'enabled',
    }];
    const data = [{
      key: '1',
      name: '文件管理员',
      age: 32,
      address: 'New York No. 1 Lake Park',
      enabled: <Button>按钮</Button>,
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    }];
    // rowSelection object indicates the need for row selection
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
      selections: true,
    };

    return (
      /* 头部 */
      <div>
        <div id='Head'>
          {/*头部左边*/}
          <div id='HeadLeft'>
            <img src={require('../pic/logo.png')}></img>
          </div>
          {/*头部中间*/}
          <div id='HeadMid'>
            <div id='HeadMidBlockOne'>
              <Button funcType="flat"><Icon type="project_line" />测试项目<Icon type="baseline-arrow_drop_down" /></Button>
            </div>
            <div id='HeadMidBlockTwo'>
              <Button funcType="flat">管理 <Icon type="settings" /> </Button>
            </div>
            
          </div>
          {/* 头部右边 */}
          <div id='HeadRight'>
            <div id='HeadRightBlock'>
                <Button funcType="flat" icon='apps'/>
                <Button funcType="flat" icon='local_airport'/>
                <Button funcType="flat" icon='local_bar'/>
                <Popover content={content} placement="bottom" trigger="click">
                  <Avatar icon="person" />
                </Popover>

              </div>
          </div>
        </div>
        {/*左边菜单*/}
        <div id='LeftMenu'>
          <div id='LeftMenuHead'>
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
            inlineIndent="3"
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
        <div id='rest'><AutoRouter /> </div>
      </div>
    );
  }
}