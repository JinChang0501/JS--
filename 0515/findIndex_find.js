findIndex / find範例;
const arr1 = [
  { name: "Jin", age: 18 },
  { name: "Jane", age: 28 },
];

const a = arr1.findIndex((o) => o.age === 18); //return 0 => 索引值
const b = arr1.findIndex((o) => o.age === 33); //return -1 => 索引值
const c = arr1.find((o) => o.age === 18); //return 0 => 索引值
const d = arr1.find((o) => o.age === 33); //return -1 => 索引值

console.log(a);
console.log(b);
console.log(c);
console.log(d);
