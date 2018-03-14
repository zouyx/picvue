# picvue

一个简单的图片选择工具

背景：mac上的图片选择工具太贵


## 快速入门

直接运行 

```bash
$ npm i
$ npm run dev
```

可以开始玩啦 ~!

## 设计

[element-ui][element-ui] 用于界面

[egg][egg] 用于服务端控制操作文件

如需进一步了解，参见 [egg 文档][egg]。

### 本地开发

```bash
$ npm i
$ npm run dev
```

### 单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[egg]: https://eggjs.org
[element-ui]: http://element-cn.eleme.io/
