//创建cookie
function createCookie(key,value,expires){
	var cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';path=/';
	if(typeof expires === 'number' && expires >= 0){
		var date = new Date();
		date.setDate(date.getDate()+expires);
		cookieText += ';expires='+ date;
	}
	document.cookie = cookieText;
}
//获取cookie
function getCookie(key){
	var arr = document.cookie.split('; ');
	for(var i = 0,len = arr.length;i < len;i++){
		var list = arr[i].split('=');
		if(encodeURIComponent(key) === list[0]){
			return decodeURIComponent(list[1]);
		}
	}
}
//删除cookie
function removeCookie(key){
	document.cookie = encodeURIComponent(key) + '=;expires=' + new Date(0)+';path=/';
}
//将cookie字符串转为对象
function convertCookieStrToObj(str){
	if(!str){
		return {};
	}
	var arr = str.split(',');  
	console.log(arr);
	var obj = {};
	for(var i = 0;i < arr.length;i ++){
		var list = arr[i].split(':');
		obj[list[0]] = list[1];
	}
	return obj;
}
//将对象转为cookie字符串
function convertObjToCookieStr(obj){
	var str = '';
	for(var i in obj){
		var pass = obj[i];
		if(str){
			str += ',';
		}
		str += i + ':' + pass;
	}
	return str;
}