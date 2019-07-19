import { Tabs,Button,Table,Input, Row, Col,Tag } from 'choerodon-ui';
import { Modal } from 'choerodon-ui/pro';
import React, { Component } from 'react';

const TabPane = Tabs.TabPane;
//模态框
const modalKey = Modal.key();
function openModal() {
  Modal.open({
    key: modalKey,
    title: '配置菜单“开发流水线”的权限',
    drawer: true,
    okText:'保存',
    cancelText:'取消',
    children: (
      <div>
        <Table rowSelection={rowSelection2} columns={columns2} dataSource={data2} />,
      </div>
    ),
    style: {
      right: 0,
      top: 0,
      height:'100%',
    },
  });
}
//表格1
function callback(key) {
  console.log(key);
}
//标签
function log(e) {
    console.log(e);
  }
function preventDefault(e) {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
}

/* 表格1设置 */
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  }, {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },{
    title: 'Button',
    dataIndex: 'button',
    key: 'button',
    width: '10%',
  }];
  const data = [{
    key: 1,
    name: 'John Brown sr.',
    age: 70,
    address: 'New York No. 1 Lake Park',
    button:<Button onClick={openModal}>按钮</Button>,
    children: [{
      key: 11,
      name: 'John Brown',
      age: 42,
      address: 'New York No. 2 Lake Park',
    }, {
      key: 12,
      name: 'John Brown jr.',
      age: 30,
      address: 'New York No. 3 Lake Park',
      children: [{
        key: 121,
        name: 'Jimmy Brown',
        age: 16,
        address: 'New York No. 3 Lake Park',
      }],
    }, {
      key: 13,
      name: 'Jim Green sr.',
      age: 72,
      address: 'London No. 1 Lake Park',
      children: [{
        key: 131,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 2 Lake Park',
        children: [{
          key: 1311,
          name: 'Jim Green jr.',
          age: 25,
          address: 'London No. 3 Lake Park',
        }, {
          key: 1312,
          name: 'Jimmy Green sr.',
          age: 18,
          address: 'London No. 4 Lake Park',
        }],
      }],
    }],
  }, {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }];
  // rowSelection objects indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
/* 表格2设置 */
const columns2 = [{
  title: 'Name',
  dataIndex: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];
const data2 = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
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
const rowSelection2 = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    //disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
  selections: true,
};

export default class Master extends Component {
    render(){
        return(
            <div style={{marginTop:'20px',marginLeft:'20px'}}>
                {/* 头部 */}
                 <Row gutter={8}>
                    <Col span={6}>
                    <Input placeholder="角色名称" required label="Basic" />
                    </Col>
                    <Col span={6}>
                    <Input placeholder="项目编码" required label="Basic" />
                    </Col>
                </Row>
                {/* 标签 */}
                <div style={{marginTop:'20px'}}>
                  <Tag closable onClose={log} color="#E0E0E0">organization.owner</Tag>
                </div>
                {/* 表格1 */}
                <div style={{marginTop:'20px'}}>
                  <Tabs defaultActiveKey="1" onChange={callback}>
                      <TabPane tab="项目层" key="1">
                          <Table columns={columns} rowSelection={rowSelection} dataSource={data} />
                      </TabPane>
                      <TabPane tab="个人中心" key="2">
                          2
                      </TabPane>
                  </Tabs>
                </div>
            </div>
        )
    }
}