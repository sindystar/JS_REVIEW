const ul = document.getElementsByTagName("ul")[0];
console.log(ul);

const item = document.getElementsByClassName("item1")[1];
console.log(item);

const item3 = document.getElementById("item3");
console.log(item3);

const _ul = document.querySelector("ul");
console.log(_ul);

const _item = document.querySelectorAll(".item1");
console.log(_item);
const _li = document.querySelectorAll("ul li");
console.log(_li);   //여기 이해 안된다 

const _item3 = document.querySelector("main ul #item3");
console.log(_item3);

for (let el of _li) {
  el.addEventListener("click", () => {
    consol.log("click");
  })
}

for (let i = 0; i < _li.length; i++) {
  _li[i].addEventListener("click", () => {
    console.log('u');
  })
}

//직계부모 요소 선택 하기 
console.log(item3.parentElement);

//가장 가까운 상위 부모 요소 선택하기
const li = document.querySelector("li");
//consol.log(li); //첫번째 요소만 찾아줌 여기까지만 하면 
//consol.log(_li[4].closest("#item3")); // 뒤에 closet("부모태그")

//현제 요소 찾기 
consol.log(_item3.previousElementSibling); //이전에 오는 형제 

console.log(_item3.nextElementSibling); // 다음에 오는 형제 요소 

let me = document.querySelector('.me')

// let hi = me.closest(".hi");
console.log(me.closest(".hi"));
