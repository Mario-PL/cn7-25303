import { Tabs,Table,Input, Row, Col,Tag, Icon } from 'choerodon-ui';
import { Select } from 'choerodon-ui';
import classNames from 'classnames';
import { Button } from 'choerodon-ui/pro'
import { Modal } from 'choerodon-ui/pro';
import React, { Component } from 'react';
import Store from './role1store';
import Store2 from './rele2form1store';
import { axios } from '@choerodon/boot';
import { observer } from 'mobx-react';

const TabPane = Tabs.TabPane;

//标签
const Option = Select.Option;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
function handleChange(value) {
  console.log(`selected ${value}`);
}
function handleRender(liNode, value) {
  console.log(value);
  return React.cloneElement(liNode, {
    className: classNames(liNode.props.className, 'choice-render'),
  });
}


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
    title: '菜单',
    dataIndex: 'name',
    key: 'name',
    width:'50%'
  }, {
    title: '页面入口',
    dataIndex: 'route',
    key: 'route',
    width: '45%',
  }, {
    render:(text,record)=>{
      if(record.type){
        return (
          <Button onClick={openModal}><Icon type="add_circle" /></Button>
        )
      }
    }
    
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

@observer
export default class Master extends Component {
   componentDidMount(){
    axios
    .get(`/iam/v1/menus/menu_config?code=choerodon.code.top.${Store.getLevelvalue}`)
    .then(function (response) {
      Store2.setMenuinfo(response.subMenus);
      console.log('1',Store2.Menuinfo)
    }) 
    .catch(function (error) {
      console.log(error);
  });
  } 


    render(){
        return(
            <div style={{marginTop:'20px',marginLeft:'20px'}}>
                {/* 头部 */}
                  <Row gutter={8}>
                    <Col span={6}> 
                    <Input placeholder="角色名称" required label="Basic" size="5"/>
                     </Col>
                    <Col span={6}> 
                    <Input placeholder="项目编码" required label="Basic" />
                     </Col>
                  </Row>
                  <div style={{height:'20px'}}></div>
                  <Row>
                    <Col span={8}>
                      <Select
                        mode="tags"
                        style={{ width: '100%' }}
                        label="标签用例"
                        placeholder="tags"
                        onChange={handleChange}
                        choiceRender={handleRender}
                        allowClear
                      >
                        {children}
                      </Select>
                    </Col>
                  </Row>

                {/* 表格1 */}
                <div style={{marginTop:'20px'}}>
                  <Tabs defaultActiveKey="1" onChange={callback}>
                      <TabPane tab="项目层" key="1">
                          <Table columns={columns} rowSelection={rowSelection} dataSource={Store2.getMenuinfo} />
                      </TabPane>
                      <TabPane tab="个人中心" key="2">
                      <Table columns={columns} rowSelection={rowSelection} dataSource={data2} />
                      </TabPane>
                  </Tabs>
                </div>
                <div>
                  <Button funcType="raised" color="blue">创建</Button>
                  <Button funcType="raised">取消</Button>
                </div>
            </div>
        )
    }
}