// //Find Duplicates
// const arrNum = [1, 2, 8, 2, 9, 8];
// const dup = arrNum.filter((ele, i, arr) => arr.indexOf(ele) !== i);
// console.log(dup);

// let arr = [1, 2, 4, 5, 3, 6, 3, 2, 5];
// let arr2 = [1, 4, 3, 2, 6, 88, 9, 3];
// let arrUni = [...arr, ...arr2];
// let uni = [...new Set(arrUni)];
// console.log(uni);

// let arrNum = [1, 2, 4, 5, 32, 63, 3, 2, 53];
// let newArr = arrNum.map((e) => e * 2);
// console.log(newArr);
// //console.log(Math.min(...arr))
// //console.log(Math.max(...arr))
// let maxVal = (arr) => {
//   return arr.reduce(function (pre, cur) {
//     return pre > cur ? pre : cur;
//   });
// };
// console.log(maxVal(arrNum));

// let minVal = (arr) => {
//   return arr.reduce(function (pre, cur) {
//     return pre < cur ? pre : cur;
//   });
// };
// console.log(minVal(arrNum));
// let maxVal = (arr) => {
//   fmaxVal = Math.max(...arr);
//   index = arr.indexOf(fmaxVal);
//   arr.splice(index, 1);
//   smaxVal = Math.max(...arr);
//   return smaxVal;
// };
// console.log(maxVal(arrNum));

// let arr = [1, 2, 4, 5, 3, 6, 3, 2, 5];
// console.log(arr.push(55));
// console.log(arr);

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i, "fizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log(i, "Fizz");
//   } else if (i % 5 === 0) {
//     console.log(i, "Buzz");
//   } else {
//     console.log(i);
//   }
// }

// let sttt = "Roshani Soni Sangam";
// function reverseStr(str) {
//   let rever = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     rever += str[i];
//   }
//   return rever;

//   // return str.split("").reverse().join("");
// }
// console.log(reverseStr(sttt));

// function palindrome(str) {
//   str = str.toLowerCase().replace(/\W/g, "");
//   let revStr = str.split("").reverse().join("");
//   return str === revStr ? true : false;
// }
// console.log(palindrome("man am"));

// let arrr = [1, 3, 2, 4, 2, 43, 5, 4, 36, 5];
// // function remDup(arr) {
// //     let uniEl = [];

// //     for (let i = 0; i < arr.length; i++) {
// //         if (uniEl.indexOf(arr[i]) === -1){
// //             uniEl.push(arr[i]);
// //         }
// //     }
// //     return uniEl;
// // }
// // console.log(remDup(arrr).sort((a,b)=>a-b))
// let uniEl = [...new Set(arrr)];
// console.log(uniEl);

// function anagrams(str1, str2) {
//   str1 = str1.split("").sort().join("");
//   str2 = str2.split("").sort().join("");

//   return str1 === str2;
// }
// console.log(anagrams("sam", "mas"));

// function prime(nume) {
//   for (let i = 2; i <= nume / 2; i++) {
//     if (nume % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(prime(4));

// function rmSpace(str) {
//   result = str.replace(/\s/g, "");
//   return result;
// }
// console.log(rmSpace("Ros      hani"));

// function outer() {
//   let a = 43;
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }
// outer();

// let arr = [2, 4, 3, 5];
// let even = arr.filter((item) => {
//   return item % 2 === 0;
// });
// console.log(even, "Even");
// let odd = arr.filter((item) => {
//   return item % 2 !== 0;
// });
// console.log(odd, "Odd");

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i], "Even");
//   } else {
//     console.log(arr[i], "Odd");
//   }
// }

// let sumArr = arr.reduce((pre, cur) => pre + cur);
// console.log(sumArr);

// function captial(sen) {
//   return sen
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
//   // return sen.split("").reverse().join("");
// }

// console.log(captial("good to know"));

// // Find Duplicate
// let nArr = [1, 2, 1, 3, 2, 4, 5, 4];
// function fDup(nArr) {
//   return nArr.filter((e, i, arr) => arr.indexOf(e) !== i);
// }
// console.log(fDup(nArr));

// //Factorial
// function fact(n) {
//   if (n == 0 || n == 1) {
//     return 1;
//   } else {
//     return n * fact(n - 1);
//   }
// }
// console.log(fact(5));

// function fact(num) {
//   if (num === 0) {
//     return 1;
//   }

//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact *= i;
//   }
//   return fact;
// }
// console.log(fact(1));

// //For sum of price
// const dummyData = [
//   { id: 1, name: "Product 1", price: 10 },
//   { id: 2, name: "Product 2", price: 20 },
//   { id: 3, name: "Product 3", price: 30 },
// ];

// let sumPrice = dummyData.reduce((sum, ele) => sum + ele.price, 0);
// console.log(sumPrice);

// let scnNnum = [2, 3, 4, 11, 55, 32, 22, 10, 62];
// function secLar(arr) {
//   arr.sort((a, b) => a - b).pop();
//   return Math.max(...arr);
// }
// console.log(secLar(num));

// // Find longest word
// function findlongest(str) {
//   let words = str.split(" ").sort((a, b) => b.length - a.length);
//   return words[0];
// }
// console.log(findlongest("i ammmmmmmm roshani for u."));

// const calAvr = (arr) => {
//   let total = arr.reduce((acc, cur) => acc + cur, 0);
//   return total / arr.length;
// };
// console.log(calAvr([10, 2, 5, 8]));

// const arrEqual = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   return arr1.every((curVal, i) => curVal === arr2[i]);
// };
// console.log(arrEqual([2, 22, 31], [2, 22, 31]));

// const countVow = (str) => {
//   let vowel = ["a", "e", "i", "o", "u"];
//   let arr = str.split("");
//   let count = 0;
//   for (let char of arr) {
//     if (vowel.includes(char.toLowerCase())) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(countVow("RoshANi"));

// //Appear times
// let arr = [2, 1, 3, 2, 4, 5, 6, 3, 6, 2, 2];
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//   if (!obj[arr[i]]) {
//     obj[arr[i]] = 1;
//   } else {
//     obj[arr[i]]++;
//   }
// }
// console.log(obj);

// // Apper times
// const numbers = [1, 2, 3, 1, 2, 4, 2, 5, 3, 2];
// let counts = {};

// for (let element of numbers) {
//   counts[element] = (counts[element] || 0) + 1;
// }
// console.log(counts);

// // Fibo series
// const fibo = (n) => {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibo(n - 1) + fibo(n - 2);
//   }
// };
// console.log(fibo(10));

// const fiboSeries = (n) => {
//   const series = [0, 1];
//   for (let i = 2; i < n; i++) {
//     series.push(series[i - 1] + series[i - 2]);
//   }
//   return series;
// };
// console.log(fiboSeries(10));

// const numRan = (a, b) => {
//   let arr = [];
//   while (a <= b) {
//     arr.push(a);
//     a++;
//   }
//   return arr;
// };
// console.log(numRan(5,19))

// //Sorting without sort
// let arr = [3, 4, 1, 2, 344, 5];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);

// //reverse without reverse method
// function rev(str) {
//   let revse = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revse += str[i];
//   }
//   return revse;
// }
// console.log(rev("ros hani"));

// //Callback function
// function greet(name, callback) {
//   console.log("Hello! " + name);
//   callback();
// }
// function afterGreet() {
//   console.log("Hello I am callback function.");
// }
// greet("Roshani", afterGreet);

// // Promise
// let promise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("opration successful");
//   } else {
//     reject("opration failed");
//   }
// });

// promise
//   .then((result) => {
//     console.log(result + ": Done");
//   })
//   .catch((error) => {
//     console.log(error + ": Error");
//   });

// let str = "ros hani";
// let reversedStr = str
//   .split(" ")
//   .map((word) => word.split("").reverse().join(""))
//   .join(" ");
// console.log(reversedStr);

// // Call, Apply And Bind === these method allow an object to use the method(function) of another object.
// let person1 = {
//     name: "ros",
//     lname: "chau",
//     fullName: function (town){
//         return this.name + " " + this.lname + " " + town;
//     }
// }

// let person2 = {
//     name: "shani",
//     lname: "siya"
// }

// console.log(person1.fullName.call(person2,"varanasi"));
// console.log(person1.fullName.apply(person2,["varanasi"]));
// let result = person1.fullName.bind(person2,"varanasi");
// console.log(result());

// //Async and Await
// async function fetchData() {
//     try {
//         let result = await new Promise((resolve, reject) => {
//             let success = false;
//             if (success) {
//                 resolve("successfully done");
//             } else {
//                 reject("something went wrong");
//             }
//         });
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchData();

// // Fetch Api
// let a = fetch('https://jsonplaceholder.typicode.com/todos');
// a.then((value1) => {
//     return value1.json();
// })
// .then((value2) => {
//     console.log(value2);
// })
// .catch((error) => {
//     console.error('Error:', error);
// });