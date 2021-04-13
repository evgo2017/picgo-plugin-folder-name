## picgo-plugin-folder-name

[![version](https://img.shields.io/npm/v/picgo-plugin-folder-name)](https://npm.js) ![license](https://img.shields.io/github/license/evgo2017/picgo-plugin-folder-name) [![downloads](https://img.shields.io/npm/dt/picgo-plugin-folder-name)](<https://www.npmjs.com/package/picgo-plugin-folder-name> ) [![fork](https://img.shields.io/github/forks/evgo2017/picgo-plugin-folder-name?style=social)](https://github.com/evgo2017/picgo-plugin-folder-name)

Use part of the local path as part of the cloud path.

将部分本地路径，作为部分云端路径。便于分文件夹管理文件。

![picgo-plugin-folder-name](assets/picgo-plugin-folder-name.png)

上图通过配置，包含 PNG 图片的向上 1 层路径，但遇到 `assets` 时不计入已向上层数。其中 `imgs` 是云端路径， `picgo` 是本地路径。

## 一、示例

以下目录结构作为示例：

```
Repos
└─ picgo-plugin-folder-name
	└─ test
		│-README.md
		└─assets
    		*evgo2017.png
```

将图片拉入 md 文件，此时图片路径为 assets/evgo2017.png。修改插件相关参数，以下为图片路径变化的测试结果：

| 序号 | 向上层数 | 忽略名称    | 结果                                                  |
| ---- | -------- | ----------- | ----------------------------------------------------- |
| 1    | 空       | 空          | xxx/evgo2017.png                                      |
| 2    | 空       | assets      | xxx/evgo2017.png                                      |
| 3    | 空       | assets test | xxx/evgo2017.png                                      |
| 4    | 1        | 空          | xxx/assets/evgo2017.png                               |
| 5    | 2        | 空          | xxx/test/assets/evgo2017.png                          |
| 6    | 3        | 空          | xxx/picgo-plugin-folder-name/test/assets/evgo2017.png |
| 7    | 1        | assets      | xxx/test/evgo2017.png                                 |
| 8    | 2        | assets      | xxx/picgo-plugin-folder-name/test/evgo2017.png        |
| 9    | 3        | assets      | xxx/Repos/picgo-plugin-folder-name/test/evgo2017.png  |

## 二、安装

### 1. 命令行 CLI

```
picgo install folder-name
```

### 2. 界面 GUI

在 PicGo 插件设置内搜索 `folder-name`

### 3. 离线安装

命令行或者界面均可这样离线安装，会在对应 `node_modules` 内建立一个快捷方式到克隆的项目内。

需要注意 `npm` 命令的调用位置，[CLI 存储地址](https://picgo.github.io/PicGo-Core-Doc/zh/guide/config.html#默认配置文件)与 [GUI 存储地址](https://picgo.github.io/PicGo-Doc/zh/guide/config.html)不同。

```
git clone https://github.com/evgo2017/picgo-plugin-folder-name
// 到对应安装目录
npm install [clone后的本地项目地址]
```

## 三、配置

### 1. 配置项

| 配置项 | 类型   | 含义                       | 默认值 |
| ------ | ------ | -------------------------- | ------ |
| height | Number | 向上层数，包含几层父文件夹 | 1      |
| ignore | String | 忽略名称，空格隔开多个名称 | 空     |

###  2. 详细解释

若 `height` 为 0，则不会包含其父文件夹名称，插件此时不进行任何操作。

若文件路径中某文件夹的名称，存在于 `ignore` 配置项中，则会自动忽略，不加入 `height` 层数的计算，可查看示例。

### 3. 修改配置

#### ① 命令行修改

```
picgo set folder-name
```

#### ② GUI 修改

在 PicGo 的插件设置中，点击此插件的右下角，选择`配置plugin - folder-name`即可，可参考[插件设置](https://picgo.github.io/PicGo-Doc/zh/guide/config.html#配置)。

#### ③ 配置文件

修改配置文件。

```json
"picgoPlugins": {
  "picgo-plugin-folder-name": true
},
"picgo-plugin-folder-name": {
  "height": "1",
  "ignore": "assets"
}
```

## 四、最后

### 1） 开发此插件起始原因

我的每篇文章为独立文件夹，内部 `README.md` 为主内容，`assets` 用来存放图片，可参考 `test` 文件夹结构。为了便于管理每一篇文章图片，需要对应文章的图片在对应的文件夹下，但不需要 `assets` 这一层。

使用 Typora 书写 Markdown 文章，配置好图片上传服务后，移入的图片会通过 PicGo 自动上传至云端，地址随后改为云端地址，自己不想每次手动配置存储路径，所以开发了此插件。

### 2）我的 Typora 图像设置

![typora-image-setting](assets/typora-image-setting.png)

### 3）联系方式

若有问题，请先查阅以下相关文档，最后欢迎提 [issues](https://github.com/evgo2017/picgo-plugin-folder-name/issues)，或发邮件至 evgo2017@qq.com。

欢迎到我的个人网站 https://evgo2017.com/repo 浏览其他项目。也许你会对这款 Typora 主题 [typora-theme-orange-heart](https://evgo2017.com/repo/typora-theme-orange-heart) 感兴趣。

### 4）参考文档

* [PicGo-Core 文档](https://picgo.github.io/PicGo-Core-Doc/zh/)

* [PicGo](https://picgo.github.io/PicGo-Doc/)

* [插件搜集](https://github.com/PicGo/Awesome-PicGo)

MIT © Evgo2017