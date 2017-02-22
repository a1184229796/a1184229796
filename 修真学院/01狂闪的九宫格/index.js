var div=document.getElementsByTagName('div');
var colors=['red','plum','blue','green','cyan','black','pink','gray','brown'];
btnone.onclick=function(){
	c=setInterval(function(){
	
		start();
	},1000)
	
}
btntwo.onclick=function(){
	for(i=0;i<div.length;i++){
		div[i].style.background="#FFA600";
	}
	clearInterval(c);
}
function  start(){
	for(var i=0;i<div.length;i++){
		div[i].style.background="#FFA600";
	}
	var arr=new Array(3);
	var arr1=new Array(3);
	for(var i=0;i<arr.length;i++){
		var a=parseInt(Math.random()*9);	
		console.log(a);
		if(i==0){
			arr[i]=a;
		}else{
			for(var j=0;j<i;j++){
				if(a==arr[j]){
					i--
				}else{
					arr[i]=a;
				}
			}
		}
	}
	for(var i=0;i<arr1.length;i++){
		var a=parseInt(Math.random()*9);	
		console.log(a);
		if(i==0){
			arr1[i]=a;
		}else{
			for(var j=0;j<i;j++){
				if(a==arr1[j]){
					i--
				}else{
					arr1[i]=a;
				}
			}
		}
	}
	for(var i=0;i<arr.length;i++){
		console.log('a')
		div[arr[i]].style.background=colors[arr1[i]];
	}
	console.log(arr);
}