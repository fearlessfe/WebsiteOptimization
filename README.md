# WebsiteOptimization

#### Part 1: 优化 index.html 的 PageSpeed Insights 得分

在线测试地址：https://fearlessfe.github.io/WebsiteOptimization/index.html

其中的src中为未优化文件，dist中为优化后的文件，与打包工具无关

#### 优化点

1. css优化

* 为print.css设置media='print'属性，使其不在阻塞CRP过程
* 将style.css内联在HTML中，减少请求次数

2. js优化

* 将analytics.js下载到本地，并设置async属性，使其不在阻塞CRP过程
* 删除perfmatters.js中的空格、注释等，引入压缩后的perfmatters-min.js


3. 图片优化

* 将网络上的图片下载到本地，加快加载速度
* 将所有图片压缩，引入压缩后的版本。

4. 网络字体优化

*  采用WebFontLoader异步加载网络字体





#### Part 2: 优化 pizza.html 的 FPS（每秒帧数）

#### 优化点

1. FLS优化

* main.js421行触发FLS，重写changePizzaSizes（），删掉了determineDx（），注释掉的代码就是删掉的代码。
* main.js522行updatePositions触发FLS，将for循环内的语句分开集中计算，避免FLS

2. Web Worker

* 第二处FLS优化后，由于计算量较大，因此采用Web Worker线程。由于Web Worker不能接受DOM节点作为传入的数据，因此只能将需要参加计算节点属性的值传入进去，再将计算的结果传递出来，然后再将结果赋给节点的属性。
* 将css选择器(querySelect)改为getElementById和getElementsByClassName
* 用到了requestAnimationFrame函数处理动画
* 动态计算背景图片中所需披萨的个数


