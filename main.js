/* 
배열
-인덱스
-길이


*/
// let arr = [1, 2, 3];
// console.log(arr.length);

// const fruits = ["apple", 'melon', 'banana'];

// fruits.push('melon');
// console.log(fruits); //push 배열의 마지막에 추가 하는 매서드

// fruits.pop(); //배열의 가장 마지막 값을 제거 
// console.log(fruits);

// fruits.unshift('grape'); //배열의 가장 앞쪽에 추가 하는 매서드
// console.log(fruits);

// fruits.shift(); //배열의 가장 앞쪽 값을 제거
// console.log(fruits);

//splice(인덱스, 삭제갯수, 삽입요소);
// fruits.splice(1, 1, "orange");  //인덱스 1에서 부터 1개만 삭제하고 그자리에 오렌지를 추가
// console.log(fruits);

// fruits.splice(1, 1); // 인덱스 1에서 부터 1개만 삭제 
// console.log(fruits);
// fruits.splice(2); //인덱스 2에서 부터 모두 삭제 
// console.log(fruits);

// const fruits1 = ['1', '2', '3'];
// const fruits2 = ['1', '2', '3'];

// const newFruit = fruits1.concat(fruits2); //두배열 합치기
// console.log(newFruit);

//배열의 검색
const fruits = ["apple", 'melon', 'banana', 'apple'];

console.log(fruits.indexOf('apple')); //배열에서 처음으로 발견된 값의 인덱스를 반환하고 처음으로 만난것만 찾고 종료 

console.log(fruits.indexOf('orange')); //찾는 값이 없으면 -1을 반환 한다

console.log(fruits.lastIndexOf("apple")); // 배열에서 마지막으로 발견된 값의 인덱스를 반환함 

console.log(fruits.includes("apple"));

console.log(fruits.includes("orange"));

//반복문
/*
반복문의 종류
for 기본 for문
for(let  반복하기 위한 변수 초기 순서값; 반복횟수 지정; 변수 값의 증감;) {
  반복하는 내용들
}
for of
for(let 반복하는 요소의 변수 of 배열이름){
}
for(let el of fruits){
}
forEach 배열에 특화된 반복문 형태 
배열 이름.forEach(()=>{}); 화살표 함수
배열 이름.forEach(function(){});

map =>리엑트 전용
배열 이름.map(()=>{});
*/