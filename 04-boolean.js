//Boolean: 논리타입 
//비교/논리 연산의 결과  --T, F
//논리의 조합: and(&&), or(||), not(!)을 조합하여 논리값 추출

let v1;   // 선언은 했으나 초기화 되지 않은 변수  --undefined
let v2 = null;  //선언하고 null로 초기화한 변수   --개발자가 설정
console.log(typeof v1, typeof v2);

//개발자가 임의로 undefined 상태를 만들 수 있다. 
v2 = undefined;
console.log(v2, typeof v2, v2 === undefined);  //undefined의 체크 (중요)
//==: 타입과 무관하게 값 비교
//===: 타입과 함께 값 비교
console.log(123 == "123");   // --T
console.log(123 === "123");  // --F

//Boolean타입 함수로 논리값 반환
console.log(Boolean("String"), Boolean(""));   //if length > 0  -- T; 즉 출력값은 T, F
console.log(Boolean(2020), Boolean(0));        //if != 0  --T; 즉 출력값은 T, F

