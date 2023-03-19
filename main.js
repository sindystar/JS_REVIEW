const link = document.querySelector("a");

link.addEventListener("click", e => {
  e.preventDefault();
  console.log("click");
})

//link.onclick = function(){}

/*
이벤트 대상.addEventlistener("이벤트명",(전달될값)=>{실행구문})
*/
const box = document.querySelector("#box");

box.addEventListener("mouseenter", () => {
  box.style.backgroundColor = "pink";
})
box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "aqua";
})

const list = document.querySelectorAll("ul li");

for (let el of list) {
  el.addEventListener("click", e => {
    e.preventDefault();
    console.log(e.currentTarget.innerText);
    //클릭한(클릭이라는 이벤트가 발생하는 그 대상)요소 안에 있는 텍스트를 콘솔로 찍게 하는 구문 
    e.currentTarget.innerText = "item";
    //클릭한(클릭이라는 이벤트가 발생하는 그대상)요소 안에 있는 텍스트를 item이라는 텍스트로 바꿔라 
    //클릭한 대상이 li이므로 안에 a태그 까지 통째로 텍스트 item으로 바뀌어 버려서 a태그 까지 사라진다 
  })
}
//for (let el of list) {
// => for(let i=0; i < list.length; i++){
  // list[i].addEventListener
//}
//}

const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");

let num = 0;

btnPlus.addEventListener("click", (e) => {
  console.log(num);
  e.preventDefault();
  num++;
  console.log(num);
})
btnMinus.addEventListener("click", (e) => {
  e.preventDefault();
  num--;
  console.log(num);
})