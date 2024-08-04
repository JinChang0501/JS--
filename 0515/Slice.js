// const arr = [1, 2, 3, 4, 5];

// // arr.splice(1, 0, 8, 9, 11);
// arr.splice(2, 1, "a", "b");

// console.log(arr);

//findIndex / find範例
// const arr1 = [
//   { name: "Jin", age: 18 },
//   { name: "Jane", age: 28 },
// ];

// const a = arr1.findIndex((o) => o.age === 18); //return 0 => 索引值
// const b = arr1.findIndex((o) => o.age === 33); //return -1 => 索引值
// const c = arr1.find((o) => o.age === 18); //return 0 => 索引值
// const d = arr1.find((o) => o.age === 33); //return -1 => 索引值

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

const cart = [
  { name: "Jin", age: 18 },
  { name: "Jane", age: 28 },
];

cart.map((v, i) => {
  console.log(v.name);
});
