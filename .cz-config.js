module.exports = {
  types: [
    { value: 'init', name: 'init: 初始提交' },
    { value: 'feat', name: 'feat: 增加新功能' },
    { value: 'fix', name: 'fix: 修复bug' },
    { value: 'improvement', name: 'improvement: 对当前特性的改进' },
    { value: 'docs', name: 'docs:修改文档' },
    { value: 'style', name: 'style: 样式修改不影响逻辑' },
    { value: 'refactor', name: 'refactor: 代码重构(既不修复bug也不添加特性的代码更改)' },
    { value: 'perf', name: 'perf: 代码重构(改进性能的代码更改)' },
    { value: 'test', name: 'test: 添加缺失的测试或修改现有的测试' },
    { value: 'build', name: 'build: 影响构建系统或外部依赖项的更改(例如作用域:gulp、broccoli、npm)' },
    { value: 'ci', name: 'ci: 对CI配置文件和脚本的更改(示例范围:Travis、Circle、BrowserStack、SauceLabs)' },
    { value: 'chore', name: 'chore: 不修改src或测试文件的其他更改' },
    { value: 'revert', name: 'revert: 版本回退' },
    { value: 'ui', name: 'ui: 更新UI' },
    { value: 'release', name: 'release: 发布' },
    { value: 'deploy', name: 'deploy: 部署' },
    { value: 'chore', name: 'chore: 更改配置文件' },
    { value: 'add', name: 'add: 添加依赖' },
    { value: 'minus', name: 'minus: 版本回退' },
    { value: 'del', name: 'del: 删除代码/文件' }
  ],
  scopes: [],
  messages: {
    type: '选择更改类型:\n',
    scope: '更改的范围:\n',
    // 如果allowcustomscopes为true，则使用
    customScope: '此更改的范围(例如组件或文件名称)',
    subject: '简短描述:',
    body: '详细描述. 使用"|"换行:',
    breaking: '变化文件的列表:',
    footer: '关闭的issues列表. E.g.: #31, #34:',
    confirmCommit: '确认提交?'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"]
};
