//Date 생성자
let now = new Date();     //현재
console.log("현재: ", now);

//1999-12-31 
let time = new Date(1999, 11, 31);   //월은 0부터! 
console.log("time: ", time);

time = new Date(2020, 8, 23, 10, 00, 08, 00);  //2020-09-23
console.log("강의시간: ", time);

//getter/setter                                                             ------출력값 요일 월 일 연도 시간 gmt 순으로 나오도록
console.log("오늘 날짜: ", now.getFullYear(), now.getMonth + 1, now.getDate);   //--출력 값 다름
console.log("오늘 요일: ", now.getDay);  //0이 일요일