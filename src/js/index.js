function Slider(id) {
	    //属性
		this.ele = getId(id); //获取大盒子
		//获取所有的大图
		this.oUllis = this.ele.children[0].children;
		//获取大图数量
		this.num = this.oUllis.length;
		
		this.createEle = function(){
			//创建ol
			let ol = getIdcreate('ol');
			//创建一个放li的数组
			let arr = [];
			for(let i = 0;i < this.num;i ++){
				let li = getIdcreate('li');
				ol.appendChild(li);
				arr.push(li);
			}
			this.ele.appendChild(ol);
			return arr;
		}
		//创建页面所需元素并返回所有的ol中的li
		this.oOllis = this.createEle();
		this.slide = function(){
			//大图轮播
			for(let i = 0;i < this.num;i ++){
				//所有大图隐藏
				this.oUllis[i].style.display = 'none';
				//所有小圆点红色
				this.oOllis[i].style.background = '#343434';
			}
			//当前大图显示
			this.oUllis[this.indexA].style.display = 'block';
			//当前小圆点蓝色
			this.oOllis[this.indexA].style.background = 'blue';
		}
		//设置当前轮播图片的下标 
		this.indexA = 0;
		this.slide();
		
		this.addEvent = function(){
			//给小圆点添加移入事件
			for(let i = 0;i < this.num;i ++){
				this.oOllis[i].onmouseenter = function(){
					this.indexA = i;
					this.slide();
				}.bind(this);
			}
		}
		//调用添加事件的方法
		this.addEvent(); 
		//计时器返回值
		this.timer = null;
		
		this.autoPlay = function(){
			this.timer = setInterval(()=>{
				this.indexA ++;
				if(this.indexA == this.num){
					this.indexA = 0;
				}
				this.slide();
			},3000)
			//给大盒子添加移入事件
			this.ele.onmouseenter = function(){
				clearInterval(this.timer);
			}.bind(this);
			//给大盒子添加移出事件
			this.ele.onmouseleave = function(){
				this.autoPlay();
			}.bind(this);
		}
		this.autoPlay();
}

//tools

function getIdcreate(tagName){
	return document.createElement(tagName);
}
function getId(id){
	return document.getElementById(id);
}
// var oGo = getId('gotop');
// window.onscroll = function(){
// 	var oTop = document.documentElement.scrollTop || document.body.scrollTop;
// 	if(oTop >= 1000){
// 		oGo.style.display = "block";
// 	}
// 	oGo.onclick = function(){
// 		oTop = 0;
// 	}
// }
// var oGo = getId('gotop');
// window.onscroll = function(){
// 	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
// 		if(scrollTop >= 500){
// 			oGo.style.display = "block";
// 		}
// 		if(scrollTop < 500){
// 			oGo.style.display = "none"
// 		};	
// }
// oGo.onclick = function(){
// 	if(document.body.scrollTop){
// 		document.body.scrollTop = 0			
// 	}else{
// 		document.documentElement.scrollTop = 0
// 	}
// }


























