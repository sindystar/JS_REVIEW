/* 
함수 정의 : 미리 function 키워드로 자주 쓰는 코드 들을 묶어주는 행위 
- 함수가 선언된 위 치와 상관없이 호출만 하면 사용이 가능함 
함수 호출 : 미리 정의 되어 있는 함수를 호출해서 사용함. 호출 해야지만 비로소 실행됨 

함수의 인수 (매개변수, 파라미터)
-

*/


plus(rr, dssf);
function mmm(파라미터) {
  실제 사용될 코드들 
};
function plus(num1, num2) {
  let result = num1 + num2;
}
calc(44, 12, "+")


! ==

calc(123, dsafg, sg);
function calc(num1, num2, type) {
  let typeNum1 = typeof num1;
  let typeNum2 = typeof num2;
  let typeType = typeof type;
  if (typeNum1 !== "number" || typeNum2 !== "number" || typeType !== "string") {

    console.error("첫번째, 두번째 인수로는 숫자만 입력하고, 세번째 인수는 문자기호를 문자 형태로 입력 하세요");
    
  } else {
    if (type === "+") num1 + num2;
    if (type === "-") num1 - num2;
  }

}