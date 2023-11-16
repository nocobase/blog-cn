---
author: Lin Chen
pubDatetime: 2023-09-20T08:22:00Z
title: "NocoBase 0.17：Schema Settings"
postSlug: release-v0.17
# featured: true
draft: false
tags:
  - release
ogImage: ""
description: ""
---

## 不兼容的变化

### Schema Settings

以前 Schema Settings 是和 Designer 写在一起的，例如：

```tsx
const MyDesigner = props => {
  return (
    <div>
      {/* ... others */}
      <SchemaSettings
        title={
          <MenuOutlined
            role="button"
            aria-label={getAriaLabel("schema-settings")}
            style={{ cursor: "pointer", fontSize: 12 }}
          />
        }
      >
        <SchemaSettings.SwitchItem
          title={"Enable Header"}
          onClick={() => {}}
        ></SchemaSettings.SwitchItem>
        <SchemaSettings.Divider />
        <SchemaSettings.ModalItem
          title={"xxx"}
          schema={}
          onSubmit={props.onSubmit}
        ></SchemaSettings.ModalItem>
      </SchemaSettings>
      {/* ... others */}
    </div>
  );
};
```

现在需要通过 `new SchemaInitializer()` 的方式定义，例如：

```tsx
const mySettings = new SchemaInitializer({
  name: "MySettings",
  items: [
    {
      name: "enableHeader",
      type: "switch",
      componentProps: {
        title: "Enable Header",
        onClick: () => {},
      },
    },
    {
      name: "divider",
      type: "divider",
    },
    {
      name: "xxx",
      type: "modal",
      useComponentProps() {
        // useSchemaSettingsRender() 会传入 props
        const { designer } = useSchemaSettings();
        const { onSubmit } = designer;
        return {
          title: "xxx",
          schema: {},
          onSubmit,
        };
      },
    },
  ],
});
```

具体参数说明请参考 [Schema Settings](https://client.docs.nocobase.com/apis/schema-settings)。

然后需要将其注册到 App 中，例如：

```tsx
import { Plugin } from "@nocobase/client";

class MyPlugin extends Plugin {
  async load() {
    this.app.schemaSettingsManager.add(mySettings);
  }
}
```

最后到 Designer 中使用，例如：

```diff
import { useSchemaSettingsRender } from '@nocobase/client';

const MyDesigner = (props) => {
  const { render } = useSchemaSettingsRender(
    fieldSchema['x-settings'] || 'MySettings',
    fieldSchema['x-settings-props'],
  );
  return <div>
    {/* ... others */}
+    {render(props)}
-    <SchemaSettings title={
-      <MenuOutlined
-        role="button"
-        aria-label={getAriaLabel('schema-settings')}
-        style={{ cursor: 'pointer', fontSize: 12 }}
-      />
-    }>
-      <SchemaSettings.SwitchItem title={'Enable Header'} onClick={() => {}}></SchemaSettings.SwitchItem>
-      <SchemaSettings.Divider />
-      <SchemaSettings.ModalItem title={'xxx'} schema={} onSubmit></SchemaSettings.ModalItem>
-    </SchemaSettings>
    {/* ... others */}
  </div>
}
```

更多使用说明请参考 [Schema Settings](https://client.docs.nocobase.com/apis/schema-settings)。
