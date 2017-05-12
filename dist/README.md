# WebsiteOptimization

####Part 1: 优化 index.html 的 PageSpeed Insights 得分

在线地址：https://fearlessfe.github.io/WebsiteOptimization/index.html

####优化点

一. css优化
   	1. 为print.css设置media='print'属性，使其不在阻塞CRP过程
   	2. 将style.css内联在HTML中，减少请求次数

二. js优化
   	1. 将analytics.js下载到本地，并设置async属性，使其不在阻塞CRP过程
  	2. 删除perfmatters.js中的空格、注释等，引入压缩后的perfmatters-min.js

三、图片优化
   	1. 将网络上的图片下载到本地，加快加载速度
   	2. 将所有图片压缩，引入压缩后的版本。

四、网络字体优化
   	1. 采用WebFontLoader异步加载网络字体

    经过以上四步的优化，PageSpeed Insights上的得分已经超过90分了。还可以改进的地方是将HTML和CSS中的空格、注释删掉，减小文件体积。上面图片优化都是PageSpeed Insights上压缩的，window上一般都有什么无损压缩图片的软件？js压缩也是PageSpeed Insights提供的。学完gulp打包工具后再进一步进行优化吧。




####Part 2: 优化 pizza.html 的 FPS（每秒帧数）

####优化点

一. FLS优化
	1. main.js421行触发FLS，重写changePizzaSizes（），删掉了determineDx（），注释掉的代码就是删掉的代码。
	2.main.js522行updatePositions触发FLS，将for循环内的语句分开集中计算，避免FLS

二、Web Worker
	1.第二处FLS优化后，由于计算量较大，因此采用Web Worker线程。由于Web Worker不能接受DOM节点作为传入的数据，因此只能将需要参加计算节点属性的值传入进去，再将计算的结果传递出来，然后再将结果赋给节点的属性。





第二次提交改动

####Part 1: 优化 index.html 的 PageSpeed Insights 得分
  1. 将js文件全部js文件移到了body的最底部


####Part 2: 优化 pizza.html 的 FPS（每秒帧数）
  1. 将css选择器改为getElementById和getElementsByClassName
  2. 用到了requestAnimationFrame函数
  3. 动态计算披萨的个数。由于要获取浏览器的高度，因此载入是会触发强制布局
