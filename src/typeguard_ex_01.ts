// 타입 에러 발생
// function sum(a: number | string, b: number | string): number | string {
//   return a + b;
// }
// console.log(sum(10, 20));
// console.log(sum("A", "B"));

// 조건문을 달아주면 타입에러 발생X -> 타입 가드
// function sum(a: number | string, b: number | string): number | string {
//   if (typeof a === "number" && typeof b === "number") return a + b;
//   else if (typeof a === "string" && typeof b === "string") return `${a}${b}`;
//   return String(a) + String(b);
// }
// console.log(sum(10, 20));
// console.log(sum("A", "B"));

// 모든 경우의 수를 if문으로 작성
// 모두 if문으로 작성 시 반환값 타입에 오류
function sum(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") return a + b;
  if (typeof a === "string" && typeof b === "string") return a + b;
  if (typeof a === "number" && typeof b === "string") return a + b;
  if (typeof a === "string" && typeof b === "number") return a + b;
//   throw new Error("Invalid parameter Type");
}
console.log(sum(10, 20));
console.log(sum("A", "B"));

// 타입 에러 해결 방법
// 1. union타입으로 undefined를 작성. (void보단 undefined가 적절.)
// 2. 반환값 타입을 작성하지 않고 타입추론에 맡기기.
// 3. 외부에 모두 반환하는 경우의 수를 함수내부에 작성.
// 4. 함수 내부에서 에러를 던지기.