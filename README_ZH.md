执行 build-script.sh 下的 github-demo.sh 脚本，可生成方便项目演示的 demo 页面。
依赖：npm run build:demo

执行 build-script.sh 下的 npm-dist.sh 脚本，可生成压缩后的 oltb.min.js 和 oltb.min.css 文件。
依赖：npm run build:lib


## OpenLayers Toolbar (NinesMap)
NinesMap 是一个用 JavaScript 编写的，简单的 GIS 工具栏，使用OpenLayers 10.0.0开发。工具栏可以填充任意数量的工具，可以在水平和垂直模式下使用，并且可以在浅色和深色主题下使用。

## CDN
examples\cdn\example-1 目录下有使用 CDN 引入 oltb.min.js 和 oltb.min.css 的示例。

```
https://cdn.jsdelivr.net/npm/oltb@v3.2.0/dist/oltb.min.js
https://cdn.jsdelivr.net/npm/oltb@v3.2.0/dist/oltb.min.css
```

## NPM
```
npm install oltb
```



## Examples
Examples for both the NPM and CDN version can be viewed in the **[Examples Directory 👀](https://github.com/qulle/oltb/tree/main/examples/)**.
- CDN
    - Vanilla JS (jsdelivr)
- NPM
    - Vanilla JS (Single OLTB module import)
    - Vanilla JS (Individual module import)
    - Angular 19
    - React 18

**Note:** To run Angular and React example, first run **npm install** in each of the example directories.

## Documentation
Have a look at the **[Internal Development Documentation 👓](https://github.com/qulle/oltb/blob/main/README_INTERNAL.md)**. Here you find detailed descriptions and code examples of how individual parts can be used.

## 主要功特点
- 可拖动图层
- 动态创建地图和要素图层
- 将状态存储在本地（浏览器）存储中
- 绘制包含交叉点的对象
- 测量长度和面积
- 使用剪切、复制、粘贴在要素图层之间移动矢量对象
- 快速互动
    - 捕捉线段和顶点
    - 捕捉鼠标和顶点之间的帮助线
- 将绘图和测量值与不同的形状操作合并
- 生成标记
- 生成风刺
- 将位置保存为书签
- 导出画布的 PNG 和其他 HTML 对象
- 光（暗）多主题切换
- 垂直和水平布局（工具栏）
- 可定制性参数
- 用于集成的回调函数
- 国际化
- Compare maps side by side
- Built in debugging help

## 工具
项目中实现了以下工具。
这些工具分为两个不同的类别：隐藏工具和非隐藏工具。不同之处在于隐藏工具不会显示在工具栏中，而仅在上下文菜单中添加功能。

### 隐藏工具
- HiddenMapNavigationTool 隐藏地图导航工具
- HiddenMarkerTool 隐藏标记工具

### 工具栏工具
- HomeTool  默认视图工具
- ZoomInTool  放大工具
- ZoomOutTool  缩小工具
- ZoomboxTool  缩放框工具
- FullscreenTool  全屏工具
- DrawTool  绘图工具
- MeasureTool  测量工具
- EditTool  编辑工具
- BookmarkTool  书签工具
- LayerTool  图层工具
- OverviewTool  缩略图工具
- GraticuleTool  标线工具
- ResetNorthTool  重置北向工具
- CoordinatesTool  坐标工具
- MyLocationTool  我的位置工具
- ScaleLineTool  比例线工具
- RefreshTool  刷新工具
- DirectionTool  方向工具
- 
- ExportPngTool  导出Png工具
- SplitViewTool  分割视图工具
- MagnifyTool  放大工具
- ImportVectorLayerTool  导入矢量图层工具
- ThemeTool  主题工具
- ScissorsTool  剪刀工具
- HelpTool  帮助工具
- InfoTool  信息工具
- SettingsTool  设置工具
- ToolboxTool  工具箱工具