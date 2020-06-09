const path = require('path')

const config = ctx => {
  let userConfig = ctx.getConfig('picgo-plugin-folder-name')
  if (!userConfig) {
    userConfig = {}
  }
  return [
    {
      name: 'height',
      type: 'input',
      alias: '向上层数',
      default: userConfig.height,
      message: '包含几层父文件夹，默认为 1',
      required: false
    },
    {
      name: 'ignore',
      type: 'input',
      alias: '忽略名称',
      default: userConfig.ignore || "",
      message: '层数忽略的文件夹名称，空格隔开',
      required: false
    }
  ]
}

/*
 * 前缀加上 'xxx/' 即可实现云端文件夹新建或分类
 */
module.exports = (ctx) => {
  const register = () => {
    // uploader 是将来自转换器的输出上传到指定的地方，所以需要在转换器之后，在上传之前对这个地方（地址）进行修改
    ctx.helper.beforeUploadPlugins.register('folder-name', {
      async handle(ctx) {
        let userConfig = ctx.getConfig('picgo-plugin-folder-name')
        if (!userConfig) {
          userConfig = {
            height: "1",
            ignore: ""
          }
        }
        const height = Number.parseInt(userConfig.height)
        if (!height) return
        // 路径名称:[]
        const dirs = ctx.input.map(input => path.dirname(input).split(path.sep))
        // 忽略名称:[]
        const ignores = userConfig.ignore ? userConfig.ignore.split(" ") : []
        // 路径忽略名称:[]
        const names = ignores.length === 0 ? dirs : dirs.map(dir => dir.filter(name => ignores.indexOf(name) === -1))
        // 添加前缀
        for (let i = ctx.output.length - 1; i === 0; i--) {
          const { fileName } = ctx.output[i]
          const prefix = names[i].slice(names[i].length - height).reduce((a, b) => `${a}/${b}`) + '/'
          ctx.output[i].fileName = prefix + fileName
        }
      },
      config
    })
  }
  return {
    register,
    config
  }
}
