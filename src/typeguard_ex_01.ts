// 타입 에러 발생
// function sum(a: number | string, b: number | string): number | string {
//   return a + b;
// }
// console.log(sum(10, 20));
// console.log(sum("A", "B"));

// 조건문을 달아주면 타입에러 발생X -> 타입 가드
function sum(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") return a + b;
  else if (typeof a === "string" && typeof b === "string") return `${a}${b}`;
  return String(a) + String(b);
}
console.log(sum(10, 20));
console.log(sum("A", "B"));
