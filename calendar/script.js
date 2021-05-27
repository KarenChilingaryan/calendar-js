var month = (new Date()).getMonth();
var year = (new Date()).getFullYear();
var lastday = function(y,m){
	return  new Date(y, m, 0).getDate();
}

foo(month, year)
function foo(m, y){
	month = m;
	year = y;
	let amisner = document.querySelectorAll("option");
	let arr = [];
	for (var i = 0; i < amisner.length; i++) {
		let a = amisner[i].value;
		a = a.split(",");
		arr.push(a[1]);
	}
	let mon;
	let num;
	for (var i = 0; i < arr.length; i++) {
		if(month == i){
			mon = arr[i];
			num = i;
		}
	}

	cur_month.innerHTML = mon;
	cur_year.innerHTML = year;
	document.querySelector('.days').innerHTML = '';;
	let nowDay = new Date(year+'-'+(month+1)+'-1');
	let week = nowDay.getDay();
	if (week == 0){
		week = 6;
	}else {
		week = week - 1;
	}
	for (var i = 0; i < week; i++) {
		datark = document.createElement("li");
		datark.className = "day1";
		datark.innerText = lastday(year, month) - (week - (i + 1));
		datark.style.opacity = 0.4;
		document.querySelector(".days").append(datark);
	}

	let day = new Date(year+'-'+(month+1)+'-1')
	console.log(day)
	while(num == day.getMonth()) {
		var day1 = day.getDate();
		var li1 = document.createElement("li");
		li1.innerHTML = day1;
		li1.className = "day1";
		document.querySelector(".days").append(li1);
		day.setDate(day1+1);
	}
	let elementSize = document.getElementsByClassName('days')[0].childNodes.length;
	if ((elementSize % 7) != 0 ) {
		for (var i = 0; i < 7 - elementSize % 7; i++){
			datark = document.createElement("li");
			datark.className = "day1";
			datark.innerText = i+1;
			datark.style.opacity = 0.4;
			document.querySelector(".days").append(datark);
		}
	}
}

function F() {
	let year = tari.value;
	let mount = amis.value.split(",");
	foo(Number(mount[0]),Number(year))
}

let prev = document.querySelector('#prev')
prev.addEventListener("click", function(e){
	let m;
	let y = year;
	if (month == 0){
		m = 11
		y = year - 1;
	} else {
		m = month - 1;
	}
	foo(m, y)
})
let next = document.querySelector('#next')
next.addEventListener("click", function(e){
	let m;
	let y = year;
	if (month == 11){
		m = 0
		y = year + 1;
	} else {
		m = month + 1;
	}
	foo(m, y)
})


