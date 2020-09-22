//콘솔출력 --console 내장 객체의 메서드 이용
console.info("정보메시지");
console.log("일반로그");
console.warn("경고메시지");
console.error("에러메시지");

//필요한 출력 객체를 ,로 구분하여 출력
console.log("ECMA Scripot", 2015);

//변수
//var, let, const

var testVar = 10;   //ES6이전에서 변수할당방법
                    //WEB환경에서는 var를 사용하도록 하자
let testlet = "let variable";   //재할당 가능 변수
const TEST_CONST = "constanat"; //재할당 불가 변수

console.log(testVar, testlet, TEST_CONST);

testVar = "var changed";
testlet = "let changed";
//TEST_CONST = "constant changed";  //에러 --재할당불가!
//const는 선언과 동시에 할당

//typeof: JS는 동적타이핑언어 -- 실제 객체타입을 확인해야함 
let v = "JavaScript"; //데이터 타입이 할당과 동시에 결정
console.log("v ->", v, "type ->", typeof v);
v = 2020;   //동적타이핑언어이기 때문에 다른 타입으로 할당 가능
console.log("v ->", v, "type ->", typeof v);

//JS의 기본 데이터타입: number, string, boolean, object