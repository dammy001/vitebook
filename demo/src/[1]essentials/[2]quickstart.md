---
title: Quickstart
---

## Install

```bash
# Install Vant 3 for Vue 3
npm i vant@next -S
```

## CDN

The easiest way to use Vant is to include a CDN link in the html file, after which you can access
all components via the global variable `vant`.

```html
<!-- import style -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/vant@2.12/lib/index.css"
/>

<!-- import script -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vant@2.12/lib/vant.min.js"></script>

<script>
  // Render the Button component
  new Vue({
    el: '#app',
    template: `<van-button>Button</van-button>`,
  });

  // Call function component
  vant.Toast('Message');

  // Register Lazyload directive
  Vue.use(vant.Lazyload);
</script>
```

You can use Vant through these free CDN services:

- [jsdelivr](https://www.jsdelivr.com/package/npm/vant)
- [cdnjs](https://cdnjs.com/libraries/vant)

## CLI

We recommend to use [Vue Cli](https://cli.vuejs.org) to create a new project.

```bash
# Install Vue Cli
npm install -g @vue/cli

# Create a project
vue create hello-world

# Open GUI
vue ui
```

<img src="../images/vue-cli-demo.png" style="max-width: 100%;" />

In the GUI, click on 'Dependencies' -> `Install Dependencies` and add `vant` to the dependencies.

## Usage

### Vite

If you are using vite, please install
[`vite-plugin-style-import`](https://github.com/anncwb/vite-plugin-style-import).

```bash
npm i vite-plugin-style-import@1.2.0 -D
```

Configure the plugin in the `vite.config.js` file:

```js
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

export default {
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style/index`,
        },
      ],
    }),
  ],
};
```

Then you can import components from Vant:

```js
import { createApp } from 'vue';
import { Button } from 'vant';

const app = createApp();
app.use(Button);
```

:::info
Vant supports Tree Shaking by default.
:::

### Import on Demand

Use [`babel-plugin-import`](https://github.com/ant-design/babel-plugin-import) to import components
on demand.

```bash
# Install plugin
npm i babel-plugin-import -D
```

```js
// set babel config in .babelrc or babel-loader
// Note: Don't set libraryDirectory if you are using webpack 1.
{
  "plugins": [
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// For users who use babel7, that can be configured in babel.config.js
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};
```

```js
// Then you can import components from vant
import { Button } from 'vant';
```

:::info
If you are using TypeScript，please use [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin)
instead.
:::

### Manually Import

```js
import Button from 'vant/lib/button';
import 'vant/lib/button/style';
```

### Import All

```js
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
```

:::warning
If you configured `babel-plugin-import`, you won't be allowed to import all components.
:::
