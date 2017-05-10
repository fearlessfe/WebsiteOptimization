
this.onmessage=function(e){
	var basicLefts=e.data.basicLefts;
	var scrollTop=e.data.scrollTop;
	var phases=[];
	var lefts=[];//保存每个节点的left属性的值
	var temp;
  for (var i = 0; i < basicLefts.length; i++) {
    var phase = Math.sin(scrollTop + (i % 5));
    phases.push(phase);
    
  }
  basicLefts.forEach(function(elem,index,arr){
    temp=elem +100*phases[index]+'px';
    lefts.push(temp);

  })
	postMessage(lefts);
}