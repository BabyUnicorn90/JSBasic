//함수의 선언
function sum(a, b){
    return a + b;
}

console.log(sum(10, 20));



//함수표현식: 이름이 없는함수 -익명함수
const csum = function(a, b) {
    return a + b;
}

console.log(typeof csum, csum(10, 20));

//익명함수 활용: 즉시실행
//주로 프로그램의 초기화 과정에서 많이 활용

(function(number){
    console.log(`${number}를 이용하여 즉시 실행하였습니다.`);
})(2020);   //1회성 초기화




//함수의 매개변수
//자바스크립트는 매개변수를 선언하지 않아도  
//함수로 전달되는 모든 인수가 arguments배열로 전달됨      <--------[?]

function getTotal() {                                //매개변수 선언 없음
    let result = 0;
    //  모든 전달된 인수는 arguments로 전달
    for (let i = 0; i < arguments.length; i++) {
        //  동적 스크립트에서 타입체크는 꼼꼼히 해 주도록
        if (typeof arguments[i] == "number")
            result += arguments[i];
    }
    return result;
}
console.log("End of Code");
console.log("getTotal 1:", getTotal(1, 2, 3, 4, 5));    //결과값: 15
console.log("getTotal 2:", getTotal(1, 2, "3", 4, 5));  //결과값: 12



//자바스크립트의 함수는 그 자체로 객체다
//number, string 등 다른 객체와 마찬가지로 다른 함수의 인수로 전달 가능

//Callback: 외부에서 전달된 함수를 거꾸로 호출하는 함수 (중요)     <--------[?]
function calcUsingCallback(val1, val2, func) {
    if (typeof func == "function") {                 //넘겨받은 인수가 함수인지 확인
        func(val1, val2);
    }
}

calcUsingCallback(3, 4, function(v1, v2) {
    console.log(v1 + v2);
});

calcUsingCallback(3, 4, function(v1, v2) {
    console.log(v1 * v2);
})



//화살표 함수 =>                              <--------[?]
const f1 = function() { return "Hello" };
const f1Arrow = () => "Hello";                //단순 출력은 return 없이 可

console.log(f1(), f1Arrow());

const f2 = function(name) { return "Hello" + name };
const f2Arrow = name => "Hello, " + name;

console.log(f2("Bit"), f2Arrow("Bit"));



//callback 함수 전달시 유용                    <--------[?]
calcUsingCallback(3, 4, (v1, v2) => {
    console.log("화살표 콜백 함수:", v1 * v2);
});