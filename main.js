var txt = "hello World World";
//이런것이 문자열

// var result = txt.length; //띄어쓰기도 문자열에 포함 된다 

// var result = txt.indexOf("Wo"); //처음 나오는 부분을 찾고 종료, 첫 시작 인덱스를 반환한다 

// var result = txt.indexOf("Wo", 8); //두번째 인수로 받은 인덱스 번째 부터 찾는다 

// var result = txt.lastIndexOf("Wo"); //마지막 부분을 찾고 종료 

// var result = txt.search("Wo"); 


// var txt1 = "banana, apple, melon";

// var result = txt1.slice(8, 13); //8이상부터 13미만까지

// var result = txt1.substring(8, 13); //8이상 부터 13미만까지 

// var result = txt1.substr(8, 5); //8인덱스부터 5개, 문자열에서 특정 인덱스부터 특정 갯수만큼 문자열 자름 

// var result = txt1.replace("world", "Everyone"); //특정 문자열을 원하는 문자열로 대체 한다, 처음 만나는 한번만 대체 하고 종료 한다 

// var result = txt1.toUpperCase();
// var result = txt1.toLowerCase();

var txt2 = "안녕하세요";
var name = "홍길동님";

var result = txt2.concat(" ", name); //안녕하세요 홍길동님 
// var result = txt2.concat(name); //안녕하세요 홍길동님 

var txt1 = "banana1apple1melon";

var result = txt1.split("1"); // ""안에는 구분점으로, 구분점을 기준으로 문자열을 분리해서 배열로 반환해 준다 중요한 것은 배열로 반환 한다는것 

var yy = "2023.03.22.수요일.스터디종료";
var result = yy.split("수");
var tit = ['2023.03.22.', '요일.스터디','종료'];

//앞의 날짜가 필요하다면 tit[0] => 2023.03.22.