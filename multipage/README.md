# wbepack multi-page seed

## feature

- [x] lang
  - [x] pug
  - [x] stylus
- [x] 按照业务/页面，生成资源目录
- [x] 多页面共享公用代码
- [x] 组件化，依赖注入，例子：
  ```js
  // login/html.js

  import layout from 'layout/stand/html.js'
  import component1 from 'components/component1'
  import component2 from 'components/component2'
  import login from './html.pug'

  export default layout.render(login, { component1, component2 ... })
  ```
  ```jade
  //- login/html.pug

  div.
    !{component1}
    !{component2}
    ...
  ```
- [x] 图像等资源引入，例子：
  ```js
  // login/html.js

  import layout from 'layout/stand/html.js'
  import component from 'components/component'
  import img from 'assets/images/img.jpg'
  import login from './html.pug'

  export default layout.render(login, { component }, { img }) // 组件与资源key不允许相同
  ```
  ```jade
  //- login/html.pug

  div.
    !{component}
    img(src=img)
  ```
- [ ] build
  - [x] hash缓存控制
  - [x] 代码压缩
- [ ] dev
  - [ ] 热加载
- [ ] dll
