/* 
조건문
특정 조건마다의 분기를 설정해서 코드 흐름에 변화를 주는것

1. 조건식 하나에 참인 경우에만 사용할 경우 
if(조건식) {
  조건식이 참이면 이곳의 구문이 실행이 됨 
  조건식이 거짓이면 이곳의 구문은 무시 
} => 중괄호를 생략 가능, 거의 생략함 

2. 조건식 하나에 참인 경우와 거짓인 경우를 모두 사용할 경우 
if(조건식){
  조건식이 참이면 이곳의 구문이 실행이 됨 
  조건식이 거짓이면 이곳의 구문은 무시 
}else{
  조건식이 거짓 이면 이곳의 구문을 실행
}
3. 조건식이 2개인 경우

fi(조건식1){
  조건식이 참이면 이곳의 구문이 실행이됨
  조건식이 거짓이면 이곳의 구문은 무시 
}else if(조건식2){
  조건식2이 참이면 이곳의 구문이 실행이 됨 
  조건식2이 거짓이면 이곳의 구문은 무시
}else{
  위의 조건1,2가 모두 거짓일때 무조건 이곳의 구문을 실행하고 종료 
}

*/

let now = new Date();
now = now.getHours();
console.log(now);

const main = document.querySelector("main");

if (now >= 0 && now < 9) {
  main.style.backgroundColor = "lightblue"
}
if (now >= 9 && now <16) {
  main.style.backgroundColor = "pink";
}
if (now >= 16 && now < 24) {
  main.style.backgroundColor = "red";
}