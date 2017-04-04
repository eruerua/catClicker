window.onload = function() {
	var catList = [],
	catDesList = [];
	var body = document.getElementsByTagName('body')[0];
	console.log(body);
	for(var i =0;i<=1;i++) {
		var name = document.createElement("p");
		name.innerHTML = "cat" + i;
		var cat = document.createElement("img");
		cat.setAttribute("id","cat"+i);
		cat.setAttribute("src","cat"+i+".jpg");
		cat.setAttribute("alt","cat");
		var description = document.createElement("p");
		description.setAttribute("id","catDes"+i);
		catList.push(cat);
		catDesList.push(description);
		body.appendChild(name);
		body.appendChild(cat);
		body.appendChild(description);
	}
	var num1 = 0,num2 = 0;
	var num = [num1,num2];
	catList[0].addEventListener('click',function() {
		num1 += 1;
		console.log(num1);
		catDesList[0].innerHTML = num1;
	},false);
	catList[1].addEventListener('click',function() {
		num2 += 1;
		console.log(num2);
		catDesList[1].innerHTML = num2;
	},false);
}
