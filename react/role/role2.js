import React, { Component } from 'react';
import { Menu, Icon, Button, Divider, Avatar, Popover, Table } from 'choerodon-ui';

require('../style/role2.less')

class Role2 extends Component {
  render() {
    return (
      <div>
        {/* 创建角色的头部 */}
        <div id='Head'>
            <div id='HeadOne'>
              <Button funcType="flat" icon='arrow_back'/>
            </div>
            <span id='HeadTwo'>创建项目层角色</span>
            <div id='HeadThree'>
              <Button funcType="flat"><Icon type="refresh" />刷新</Button>
            </div>
          </div>
        
      </div>
    );
  }
}
export default Role2