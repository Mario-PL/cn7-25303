import React, { Component } from 'react';
import { Menu, Icon, Button, Divider, Avatar, Popover, Table, Form,  Input } from 'choerodon-ui';
import {BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import Role2form1 from './role2form1'

require('../style/role2.less')

class Role2 extends Component {
  render() {
    return (
      <div>
        {/* 创建角色的头部 */}
        <div id='Head'>
            <div id='HeadOne'>
              <NavLink to='/test/role1'>
                <Button funcType="flat" icon='arrow_back'/>
              </NavLink>
            </div>
            <span id='HeadTwo'>创建项目层角色</span>
            <div id='HeadThree'>
              <Button funcType="flat"><Icon type="refresh" />刷新</Button>
            </div>
          </div>
        {/* 表单 */}
        <div>
          <Role2form1 />
        </div>
      </div>
    );
  }
}
export default Role2