//string
const s1 = "Modern JavaScript and Java";     //literal 생성
const s2 = String("Modern JavaScript and Java");  //String 객체로 생성
console.log(typeof s1, typeof s2);    //--string, string

//Property: .length
console.log(s1, "length = ", s1.length);

//문자열 추출 메서드: 
console.log(s1.charAt(7));     //7번 인덱스의 문자
console.log(s1[7]);   //문자열은 그자체로 배열처럼 사용가능

//문자열 부분추출 메서드: 
console.log(s1.substr(7, 10));  //7번 인덱스~10글자
console.log(s1.substr(7));     //7번 인덱스~끝
console.log(s1.substring(7,17));   //7번부터 17빈 바로 앞
console.log(s1.substring(7));    //7번부터 끝까지

//검색메서드 [중요]
let position = s1.indexOf("Java");  //  문자열 내 Java의 인덱스
console.log("1번째의 java의 인덱스:", position);
position = s1.indexOf("Java", position +1);     //  검색 범위의 제한
console.log("2번째 Java의 인덱스:", position);
position = s1.indexOf("Java", position +1);
console.log("3번째 Java의 인덱스:", position);  //  /찾을 수 없을 때 -1

//  문자열 치환
console.log(s1.replace("JavaScrip", "JS"));     //  JavaScripet -> 15
console.log("원본:", s1);       //  원본 변경하는 것은 아니다.

//  좌우 화이트 스페이스 제거
console.log("                   JavaScript      ".trim());

//  이스케이프 문자 -> 주의
//      \n : 개행
//      \t : 탭
//      \' : 작은 따옴표
//      \"": 큰 따옴표
//      \` : 백특(ES6)
//      \$ : 달러 기호(ES6)

let tmp = 24;
//  현재 온도는 temp 도입니다.
let message = "현재 온도는 " + tmp + "도입니다.";
console.log(message);

//  템플릿 문자열(ES6)
//  백틱(`)과 ${}로 손쉽게 문자열 포맷팅 가능
message = '현재 온도는 ${temp}도입니다.';
console.log(message);

// 여러 줄 문자열 생성에도 편리
message = "예전에는 여러 줄 문자을을 \n만드는 게 \n 쉽지 않았습니다."
console.log(message);
message = `하지만 ES6에서는
아주 쉽게
여러 줄 문자열을 만들 수 있습니다.`;

console.log(message);