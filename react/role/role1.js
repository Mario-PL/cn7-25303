import React, { Component } from 'react';
import { Icon,  Divider, Avatar, Popover, Table } from 'choerodon-ui';
import { Button } from 'choerodon-ui/pro'
import { Menu, Dropdown } from 'choerodon-ui/pro';
import {BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import { axios } from '@choerodon/boot';
import Store from './role1store';
import { observer } from 'mobx-react';

require('../style/role1.less')

@observer
class Role1 extends Component {

  componentDidMount(){
    Store.setLevelvalue('site')
    axios
    .post("http://api.staging.saas.hand-china.com/iam/v1/roles/search?page=1&size=50&sort=id,desc",{level:'site'})
    .then(function (response) {
      Store.setUserinfo(response.list)
    }) 
    .catch(function (error) {
      console.log(error);
  });
  }

  changelevelvalue=({key})=>{
    console.log(key);
    if(key==1){
      Store.setLevelvalue('site')
      Store.setLevelchinese('全局')
    }
    else if(key==2){
      Store.setLevelvalue('organization')
      Store.setLevelchinese('组织')
    }
    else if(key==3){
      Store.setLevelvalue('project')
      Store.setLevelchinese('项目')
    }
    
    axios
    .post("http://api.staging.saas.hand-china.com/iam/v1/roles/search?page=1&size=50&sort=id,desc",{level:Store.getLevelvalue})
    .then(function (response) {
        Store.setUserinfo(response.list)
      }) 
    .catch(function (error) {
        console.log(error);
    });
  }

  render() {
    //层级选项
    const menu = (
      <Menu onClick={this.changelevelvalue}>
        <Menu.Item key='1'>
          <p >全局</p>
        </Menu.Item>
        <Menu.Item key='2'>
          <p>组织</p>
        </Menu.Item>
        <Menu.Item key='3'>
          <p>项目</p>
        </Menu.Item>
      </Menu>
    );
    //表格头
    const columns = [{
      title: '角色名称',
      dataIndex: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '角色编码',
      dataIndex: 'code',
    }, {
      title: '层级',
      dataIndex: 'level',
      render:(text,record)=>{
        if(text=='site'){
          return(
            <div>全局</div>
          )
        }
        else if(text=='organization'){
          return(
            <div>组织</div>
          )
        }
        else if(text=='project'){
          return(
            <div>项目</div>
          )
        }
        
      }
    },{
      title: '角色来源',
      dataIndex: 'modified',
      render: text => <a href="#" >{text ? <div><Icon type="predefine" />自定义</div> : <div><Icon type="CI" />预定义</div>}</a>,
    }, {
      title: '启用状态',
      dataIndex: 'enabled',
      render: text => <a href="#" >{text ? <Button funcType="raised" color="green">启用</Button> : <Button funcType="raised" color="red">停用</Button>}</a>,
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
      <div>
        <div id='Right'>
          <div id='RightHead'>
            <div id='RightHeadBlockOne'>角色管理</div>
            <div id='RightHeadBlockTwo'>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Button id='Button1'>
                    {Store.levelchinese} <Icon type="arrow_drop_down" />
                  </Button>
                </Dropdown>
                <Button funcType="flat"><NavLink to='/test/role2'>创建角色<Icon type="baseline-arrow_drop_down" /></NavLink></Button>
                <Button funcType="flat">基于所选角色创建<Icon type="baseline-arrow_drop_down" /></Button>
                <Button funcType="flat">刷新<Icon type="baseline-arrow_drop_down" /></Button>
              </div>
          </div>
          <div id='textmid'>
            <div id='textmid1' style={{ fontWeight: 'bolder',fontSize:'18px'}}>组织“运营组织”的角色</div>
            <div id='textmid2'>角色时您可分配给成员的一项权限。您可以创建角色并为其添加权限，也可以复制现有角<br />色并调整其权限</div>
          </div>
          <br />
          <Table rowSelection={rowSelection} columns={columns} dataSource={Store.userinfo} /> 
        </div>
      </div>
    );
  }
}
export default Role1