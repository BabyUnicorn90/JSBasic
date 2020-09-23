//배열의 생성: 객체를 이용한 생성
const a1 = new Array(10);    //10개짜리 빈 배열
const a2 = new Array();     //빈 배열 
const a3 = new Array(1, "ABC", true) //형식을 가리지 않는다! 

//배열 길이 알아보기: .length
console.log(a1.length, a2.length, a3.length);

//리터럴 생성: []   --객체를 이용하는 방법보다 리터럴생성 추천
const a4 = [];
const colors = ["red", "green", "blue"];

console.log(typeof a4, typeof colors);

//객체도 배열처럼 접근 可
const person = {
    name: "홍길동", 
    job: "도적"
};
console.log(person['name'], person['job']);  

//인덱스를 꼼꼼하게 체크하지 않는다. 
const arr = [];
console.log(arr, "length = ", arr.length);
arr[10] = "인덱스 범위 밖에 입력";
console.log(arr, "length = ", arr.length);

//메서드
//1. 배열합치기: concat
const veges = ["배추", "무", "대파"];
const sources = ["소금", "고춧가루", "새우젓"];
const ingrs = veges.concat(sources);   //veges와 source 배열 연결
console.log("김장재료: ", ingrs);

//2. 배열요소 연결: join
console.log("목록: ", ingrs.join(", "));

//3. 자료입출력: 
// 1) push: 맨 마지막에 요소 추가
// 2) pop: 맨 마지막의 요소 추출
// 3) shift: 맨 앞의 요소 추출
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("STACK: ", fruits);
fruits.push("Kiwi");
console.log("STACK: ", fruits);
console.log("POP: ", fruits.pop());
console.log("POP: ", fruits.pop());
console.log("STACK: ", fruits);

//push + shift -> Queue
console.log("QUEUE: ", fruits);
console.log("SHIFT: ", fruits.shift());
console.log("SHIFT: ", fruits.shift());
console.log("QUEUE: ", fruits);

//4. 반전하기: reverse
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("원본: ", fruits);

fruits.reverse();
console.log("REVERSE: ", fruits);

//5. 잘라내기: slice
let slices = fruits.slice(1,3);  //1번 인덱스 ~ 2번인덱스
console.log("SLICE: ", slices);

//6. 정렬하기: sort
console.log("원본: ", fruits);
fruits.sort();   //기본적으로는 오름차순 정렬
console.log("SORT: ", fruits);

//사용자 정의 기준으로 정렬하기:              <--------------[?]
fruits.sort(function(a, b) {
    //retrun이 0        -> 같다, 
    //        1 or -1   -> 대소비교
    if (a < b) {
        return 1;
    } else {
        return -1;
    }
});
console.log("CUSTOM SORT: ", fruits);

//7. 문자열 분리: split --특정 구분자를 기준으로 분리 후 배열
const str = " JavaScript is something more strange than other language.";
let words = str.toUpperCase().split(" ");  //대문자 변환 후 공백 기준으로 분리

console.log(words);

for(let i = 0; i < words.length; i++) {
    console.log("WORD: ", words[i]);
}

//8. 배열의 추출, 삽입, 삭제 한번에 하기: splice
fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("원본: ", fruits);

//인수가 1개일 때, 인덱스부터 끝까지 추출 후 제거
// console.log("SPLICE: ", fruits.splice(2));  
// console.log("원본: ", fruits);                       // ---banana, orange

//인수가 2개일 때, 인덱스부터 갯수 지정 추출 후 제거
// console.log("SPLICE: ", fruits.splice(1, 2));  
// console.log("원본: ", fruits);                       //--banana, mango

//인수가 3개일 때, 인덱스부터 갯수 지정 추출 후 제거 + 새 요소 삽입
console.log("SPLICE: ", fruits.splice(1, 2, "Kiwi", "Orange"));  
console.log("원본: ", fruits);                          //--banana, kiwi, orange, mango
