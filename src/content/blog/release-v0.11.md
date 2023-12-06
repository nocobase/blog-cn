---
author: Lin Chen
pubDatetime: 2023-07-08T06:19:10Z
title: "NocoBase 0.11：全新的客户端 Application、Plugin 和 Router"
postSlug: release-v0.11
# featured: true
draft: false
tags:
  - 发布
ogImage: ""
description: ""
---

## 新特性

- 全新的客户端 Application、Plugin 和 Router
- antd 升级到 v5
- 新插件
  - 数据可视化
  - API 秘钥
  - Google 地图

## 不兼容的变化

### 全新的客户端 Application、Plugin 和 Router

#### 插件的变化

以前必须传递一个组件，并且组件需要透传 `props.children`，例如：

```tsx | pure
const HelloProvider = (props) => {
  // do something logic
  return <div>
    {props.children}
  </div>;
}

export default HelloProvider
```

现在需要改为插件的方式，例如：

```diff | pure
+import { Plugin } from '@nocobase/client'

const HelloProvider = (props) => {
  // do something logic
  return <div>
    {props.children}
  </div>;
}

+ export class HelloPlugin extends Plugin {
+   async load() {
+     this.app.addProvider(HelloProvider);
+   }
+ }

- export default HelloProvider;
+ export default HelloPlugin;
```

插件的功能很强大，可以在 `load` 阶段做很多事情：

- 修改路由
- 增加 Components
- 增加 Providers
- 增加 Scopes
- 加载其他插件

#### 路由的变化

如果之前使用了 `RouteSwitchContext` 进行路由修改，现在需要通过插件替换：

```tsx | pure
import { RouteSwitchContext } from '@nocobase/client';

const HelloProvider = () => {
  const { routes, ...others } = useContext(RouteSwitchContext);
  routes[1].routes.unshift({
    path: '/hello',
    component: Hello,
  });

  return <div>
    <RouteSwitchContext.Provider value={{ ...others, routes }}>
      {props.children}
    </RouteSwitchContext.Provider>
  </div>
}
```

需要改为：

```diff | pure
- import { RouteSwitchContext } from '@nocobase/client';
+ import { Plugin } from '@nocobase/client';

const HelloProvider = (props) => {
-  const { routes, ...others } = useContext(RouteSwitchContext);
-  routes[1].routes.unshift({
-    path: '/hello',
-    component: Hello,
-  });

  return <div>
-   <RouteSwitchContext.Provider value={{ ...others, routes }}>
      {props.children}
-   </RouteSwitchContext.Provider>
  </div>
}

+ export class HelloPlugin extends Plugin {
+  async load() {
+    this.app.router.add('admin.hello', {
+       path: '/hello',
+       Component: Hello,
+    });
+    this.app.addProvider(HelloProvider);
+  }
+ }
+ export default HelloPlugin;
```

更多文档和示例见 [packages/core/client/src/application/index.md](https://github.com/nocobase/nocobase/blob/main/packages/core/client/src/application/index.md)
