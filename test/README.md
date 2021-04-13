# Test

![evgo2017](assets/evgo2017.png)

目录结构：

```
Repos
└─ picgo-plugin-folder-name
	└─ test
		│-README.md
		└─assets
    		*evgo2017.png
```

只将图片拉入 md 文件，则此时图片的的路径为 assets/evgo2017.png，此时修改参数，以下为测试结果：

| order | height | ingore      | 结果                                                  |
| ----- | ------ | ----------- | ----------------------------------------------------- |
| 1     | 空     | 空          | xxx/evgo2017.png                                      |
| 2     | 空     | assets      | xxx/evgo2017.png                                      |
| 3     | 空     | assets test | xxx/evgo2017.png                                      |
| 4     | 1      | 空          | xxx/assets/evgo2017.png                               |
| 5     | 2      | 空          | xxx/test/assets/evgo2017.png                          |
| 6     | 3      | 空          | xxx/picgo-plugin-folder-name/test/assets/evgo2017.png |
| 7     | 1      | assets      | xxx/test/evgo2017.png                                 |
| 8     | 2      | assets      | xxx/picgo-plugin-folder-name/test/evgo2017.png        |
| 9     | 3      | assets      | xxx/Repos/picgo-plugin-folder-name/test/evgo2017.png  |



