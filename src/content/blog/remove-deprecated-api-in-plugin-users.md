---
pubDatetime: 2023-12-04T08:55:00Z
title: "移除：用户插件中已废弃的用户认证接口"
postSlug: remove-deprecated-api-in-plugin-users 
# featured: true
draft: false
tags:
  - 移除
  - 用户认证
ogImage: ""
description: ""
---

在6月份发布的 v0.10 版本中，用户插件 (`@nocobase/plugin-users`) 提供的用户认证功能已经由认证插件 (`@nocobase/plugin-auth`) 取代，用户插件提供的登录、注册等接口也被废弃，参考 [NocoBase 0.10：第二季度的新特性#登录、注册接口的变更](/posts/release-v010#登录注册接口的变更)。

```bash
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

现在用户插件中的用户认证相关接口已经被**移除**，参考 <a href="https://github.com/nocobase/nocobase/pull/3122" target="_blank">PR-3122</a>.
