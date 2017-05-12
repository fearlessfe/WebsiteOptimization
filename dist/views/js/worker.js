
this.onmessage=function(e){
  //接受传入的数据
	var basicLefts=e.data.basicLefts;
	var scrollTop=e.data.scrollTop;

	var phases=[];
	var lefts=[];//保存每个节点的left属性的值
	var temp;
  //原线程属性的计算和复制都在一个循环里面，造成FLS，因此分为了两步
  //在worker线程中不会出现FLS，只是保持了原来的更改
  for (var i = 0; i < basicLefts.length; i++) {
    var phase = Math.sin(scrollTop/1250 + (i % 5));
    phases.push(phase);
    
  }

  basicLefts.forEach(function(elem,index,arr){
    temp=elem +100*phases[index]+'px';
    lefts.push(temp);

  })
  //将计算的属性值传回主线程中
	postMessage(lefts);
}