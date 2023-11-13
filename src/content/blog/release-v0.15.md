---
pubDatetime: 2023-11-13T02:36:25.037Z
title: "NocoBase 0.15：全新的插件设置中心"
postSlug: release-v0.15
# featured: true
draft: false
tags:
  - release
ogImage: ""
description: ""
---

## 新特性

![Plugin settings manager](/content-static/psm.png)

## 不兼容的变化

### 插件配置页面注册方式

以前使用 `SettingsCenterProvider` 注册插件配置页面，例如：

```tsx | pure
const HelloProvider = React.memo(props => {
  return (
    <SettingsCenterProvider
      settings={{
        hello: {
          title: "Hello",
          icon: "ApiOutlined",
          tabs: {
            tab1: {
              title: "Hello tab",
              component: HelloPluginSettingPage,
            },
          },
        },
      }}
    >
      {props.children}
    </SettingsCenterProvider>
  );
});
```

现在需要改为：

```tsx | pure
class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add("hello", {
      title: "Hello", // 原 title
      icon: "ApiOutlined", // 原 icon
      Component: HelloPluginSettingPage, // 原 tab component
      aclSnippet: "pm.hello.tab1", // 权限片段，保证权限的 code 和之前的一致，如果是新插件，不需要传这个参数
    });
  }
}
```

获取 pluginSettingsManager 对应的路由信息

```tsx
const baseName = app.pluginSettingsManager.getRouteName('hello');
// admin.settings.hello
const basePath = app.pluginSettingsManager.getRoutePath('hello');
// /admin/settings/hello
```

如果插件配置页面内部有链接跳转的话，需要进行相应的更改，例如：

```tsx | pure
navigate('/admin/settings/hello/1');
navigate('/admin/settings/hello/2');

// 可以更改为
const basePath = app.pluginSettingsManager.getRoutePath('hello');
navigate(`${basePath}/1`);
navigate(`${basePath}/2`);
```

更多信息，请参考 [插件配置页面](https://docs-cn.nocobase.com/development/client/plugin-settings)。

## 更新记录
完整的更新记录，请参考 [更新记录](https://github.com/nocobase/nocobase/blob/main/CHANGELOG.md)。
