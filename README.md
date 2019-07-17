<div align="center">
  <h1>
    <br/>
    <br/>
    🚀
    <br />
    C7N test
    <br />
    <br />
    <br />
    <br />
  </h1>
</div>

## 考题

1. 建立项目名为`c7n-test-${自己的工号}`
2. 在根目录下初始化npm
3. 安装@choerodon/boot，@choerodon/master，choerodon-ui库（其他依赖视情况安装）
4. 建立名为start的npm脚本，能够使用choerodon-front-boot启动服务，配置文件指向react目录下的config.js
```
"start": "choerodon-front-boot start --config ./react/config.js"
```
```js
// config.js
const config = {
  server: 'http://api.staging.saas.hand-china.com',
  master: '@choerodon/master',
  projectType: 'choerodon',
  buildType: 'single',
  dashboard: {},
  resourcesLevel: ['site', 'origanization', 'project', 'user'],
};

module.exports = config;
```
5. 在react目录下合理划分文件目录，一般为入口（RouteIndex.js）和以页面划分的目录
6. 用自己开发的master替换config.js中的master
7. 开发角色管理页面
8. 提交代码到自己的github，并有合理的commit记录

## 要求

1. 项目目录结构合理
2. 使用了自己开发的master替换@choerodon/master
3. master要有头部，左侧菜单，右侧内容区三个部分
4. 左侧菜单显示自己开发的页面菜单，点击跳转到开发的角色管理页面
5. 左侧菜单可折叠
6. 头部样式大体相同，有弹出层的处理（内部具体样式可不完成）
7. 头部个人信息和菜单从接口获取内容并展示
8. 角色管理列表页与设计稿相同，考虑文本过长时如何显示
9. 可以通过层级，来源，名称，编码等对表格进行查询
```
url: `/iam/v1/roles/search?page=1&size=10&sort=id,desc`
method: 'post'
request payload: {
  code: '',
  level: '',
  params: [],
  name: '',
  level: '',
  enabled: 'true',
  buildIn: 'true,
}
```
10. 能够在头部切换层级
11. 点击创建角色进入新的路由
12. 创建角色默认为列表页选中的层级
13. 从请求中获取tab页列表数据并显示
`/iam/v1/menus/menu_config?code=choerodon.code.top.${level}`
site层，有两个tab页，分别是全局层和用户层
organization层一个，组织层
project层一个，项目层
14. 展示的内容可勾选
15. 可以通过点击全部收起和全部展开使表格默认展开和收起
16. 角色编码和角色名称有必输校验，且编码必须以字母开头，只能输入字母，数字，_，-，/，角色名称提交时去除首位空白
17. 当点击底部提交时，在控制台输出从页面上获取到的内容，将内容提交到本地的store中
18. 编辑新创建的角色，用store中的数据还原原来的界面，进行修改后保存继续保存到本地的store中
19. 编辑角色和创建角色时，弹窗内外勾选情况相互映射

## 分数标准

1. 项目可运行无报错，无页面crash情况
2. 进入页面后大体结构相似且有部分行为模拟（如弹出，层级切换），头部用户菜单显示正确
3. 角色管理列表页功能完整
4. 角色管理可创建
5. 角色管理可修改
6. 角色管理创建和修改中权限的关联和映射
7. 完整的提交记录和合理的commit
8. 样式使用less
9. 酌情给予时间分