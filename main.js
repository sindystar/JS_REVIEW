/* 
원시형 자료(primitive type) 특정값이 메모리에 바로 저장. 값만 저장 된것 
1. 문자열(string)
2. tntwk(number)
3. 불린형, 참거짓형(boolean) = true, false
4. underfined - 변수를 만들고 할당하지 않으면 underfined으로 저장됨, 에러상황
5. null(object) - 갑싱 비어있긴 하지만 일부러, 명시적으로 값을 비워둔경우 
- 메모리를 만들어야 하는데 값은 지금 없어서 넣지 않을때 일부러 비워둠 


참조형 자료 (reference type)값의 참조값, 주소값만 메모리에 저장 되는것
5. null(object) - 값이 비어있긴 하지만 일부러 , 명시적으로 값을 비워둔 경우 
- 메모리는 만들어야 하는데 값은 지금 없어서 넣지 않을때 일부러 비워둠 
1. 배열(array) = 여러개의 값들을 그룹으로 묶어서 저장된 형태 
(각 값들은 순서값으로 탐색 가능하다)
2. 객체(object) - 여러개의 값들을 그룹으로 묶어서 저장된 형태 
(각 값들 마다 고유의 key값을 넣어서 저장하고 탐색 할때도 key값으로 탐색)
*/



// let num1 = "2"; //문자 
// let num2 = 2; //숫자 
// let isOk = true; //boolean
// let error;
// let isBlank = null

// console.log(typeof num1);
// console.log(typeof num2);
// console.log(typeof isOk);
// console.log(typeof error);
// console.log(typeof isBlank);

// 같은 성격의 일련의 데이터들은 그룹 형태로 저장하면 -array
let colors = ["red", "yellow", "brown","blue"];
console.log(colors[0]);
console.log(colors[3]);

//let items = [{},{},{},{}];

let student1 = {
  name: "홍길동",
  age : 20,
  address: "Seoul",
  isMale:true
};
//성격이 다른 데이터들의 prop(erty)에 담아서 구조적으로 저장
console.log(student1.name);

//형변환 : 연산 되는 숫사 num2를 강제로 문자열로 변형 시켜서 두개의 문자로 인식하고 서로 이어 주는것 

let num1 = "2";
let num2 = 3;
let num3 = 5;
let result = num1 + num2;
let result2 = num2 + num1;
console.log(result);
console.log(result2);

let result3 = num1 + num2 + num3;  //235
let result4 = num3 + num2 + num1; //82
console.log(result3);
console.log(result4);


/*

*/