const numTap = document.querySelectorAll(".numTap")
	regBtn = document.querySelector(".inpbtn")
	regInp = document.querySelector(".inpRes")
	modal = document.querySelector(".modal")
	numc=document.querySelector(".numc")
	numerUl=document.querySelector(".numer ul")
	checkItemUl=document.querySelector(".checkItem ul")
	checkItem=document.querySelector(".checkItem")
	numer=document.querySelector(".numer")
	start = document.querySelector(".start")
	stop = document.querySelector(".stop")
	timer = document.querySelector(".timer h2")
	check = document.querySelector(".check")
	checkh = document.querySelector(".check h1")
	numBtn = document.querySelector(".sat")
	numh = document.querySelector(".sat h1")
	checkAll = document.querySelector(".checkAll")
	result=0
let d=0;

function olish(n) {
  let sonlar = [];

  for (let i = 1; i <= n; i++) {
    sonlar.push(tasodifiySon = Math.floor(Math.random() * n) + 1)
  }
  return sonlar
}


regBtn.addEventListener("click", ()=>{
	d=olish(regInp.value)
	if (regInp.value!=0){
		modal.classList.remove("none")
	}
	numc.textContent=regInp.value

	for (var i = 0;  i<regInp.value; i++) {
		tabli= document.createElement("li")
		tabli.classList.add("tabli")

		tabli.innerHTML=`
			<span class="id">${i+1}</span>
			<span>.</span>
			<span class="raq">${d[i]}</span>

		`
		numerUl.appendChild(tabli)


	}

	for (var i = 0;  i<regInp.value; i++) {
		tabli1= document.createElement("li")
		tabli1.classList.add("tabli")
		tabli1.innerHTML=`
			<input class='tabin' type="number" min="1" placeholder=${i+1}>

		`
		checkItemUl.appendChild(tabli1)

		
	}
})
modal.addEventListener("click", (e)=>{
	if (e.srcElement.id=="modal"){
		modal.classList.add("none")
		let litab=document.querySelectorAll('.tabli')

	litab.forEach(item=>{
		item.remove()
	})
	result=0
	}
	
})

numer.addEventListener("click", (a)=>{
	if (a.srcElement.nodeName=="LI" ){
		a.target.classList.toggle("tapgr")
	}else if (a.srcElement.nodeName=="SPAN"){
		a.target.parentElement.classList.toggle("tapgr")
	}
})

function nol(n) {
	if (n==60){
		return "00"
	}else if (n < 10){
		return `0${n}`
	}else{
		return n
	}
}


let i=0, 
	clear;

start.addEventListener("click",()=>{
	clear = setInterval(intersad, 1000)
	stop.classList.remove("none")
	start.classList.add("none")

})
stop.addEventListener("click", ()=>{
	clearInterval(clear)
	start.classList.remove("none")
	stop.classList.add("none")
})
function intersad(){
	i++;
	sec=i%60
	min=(i-sec)/60
	timer.innerHTML=`${nol(min)}:${nol(sec)}`
}


check.addEventListener("click", ()=>{
	numer.classList.add("none")
	checkItem.classList.remove("none")
	numh.classList.remove("active")
	checkh.classList.add("active")
})
numBtn.addEventListener("click", ()=>{
	numer.classList.remove("none")
	checkItem.classList.add("none")
	numh.classList.add("active")
	checkh.classList.remove("active")
})
checkAll.addEventListener("click", ()=>{
	let tabinput=document.querySelectorAll(".tabin")
	for (var i = 0 ; i < tabinput.length; i++) {
			if (d[i] == tabinput[i].value){
				tabinput[i].classList.add("green")
				result+=1
			}else{
				tabinput[i].classList.add("red")
			}
	}
	document.querySelector("h1.res").textContent=result
})
