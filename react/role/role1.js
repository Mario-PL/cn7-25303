import React, { Component } from 'react';
import { Menu, Icon, Button, Divider, Avatar, Popover, Table } from 'choerodon-ui';
require('../style/role1.less')

class Role1 extends Component {
  render() {

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
      <div>
         <div id='Right'>
           <div id='RightHead'>
            <span id='RightHeadBlockOne'>角色管理</span>
            <div id='RightHeadBlockTwo'>
              <Button funcType="flat">项目<Icon type="baseline-arrow_drop_down" /></Button>
            </div>
            <div id='RightHeadBlockTwo'>
              <Button funcType="flat">创建角色<Icon type="baseline-arrow_drop_down" /></Button>
            </div>
            <div id='RightHeadBlockTwo'>
              <Button funcType="flat">基于所选角色创建<Icon type="baseline-arrow_drop_down" /></Button>
            </div>
            <div id='RightHeadBlockTwo'>
              <Button funcType="flat">刷新<Icon type="baseline-arrow_drop_down" /></Button>
            </div>
          </div>

          <div>
            <span style={{ fontWeight: 'bolder',fontSize:'18px'}}>组织“运营组织”的角色</span>
            <br />
            <span>角色时您可分配给成员的一项权限。您可以创建角色并为其添加权限，也可以复制现有角<br />色并调整其权限</span>
           </div>
            <br />
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} /> 
        </div>
      </div>
    );
  }
}
export default Role1