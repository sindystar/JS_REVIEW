/* 
연산자 : 특정값을 도출 하기 위해 연산을 처리하는 식별자 

산술 연산자 : ++, -- 연속해서 1씩 더하거나 빼는 것 **
+%
대입 연산자 : =등호가 아님 
a = b a와 ㅠ가ㅣ 같다는 뜻이 아님, a에 다가 bfmf 대입 하라는 뜻
a == a와 b가 같음을 의미
a === b a와 b가 같은데 어떤 수준까지? 자료형까지 완벽하게 같음을 의미

비교 연산자 : < > <= >= 불린 값을 반환 한다

전위 연산자 : ++num 변수 초기 값에서 연산을 먼저 하고 그뒤에 연산된 값을 활용한다 
후위 연산자 : num++ 변수 초기 값을 먼 저 활용하고 그뒤에 값을 연산 처리 한다 

*/

let num1 = 3;
let result = ++num1;
// num1 = num1 + 1
console.log(result);