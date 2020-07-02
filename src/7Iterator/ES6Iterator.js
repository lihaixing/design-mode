/**
 * 场景 
 * 1. 有序集合：Array Map Set String TypedArray arguments NodeList
 * 2. Object 不是有序集合 需要用Map代替
 * 3. 一个迭代器可以遍历各种有序数据
 * 4. for of 就是迭代器
 */

// Array.prototype[Symbol.iterator] 是一个迭代器函数

const arr = [1, 2, 3, 4];
const iter = arr[Symbol.iterator]();
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

// 也返回迭代器
const iter2 = arr.values()
console.log(iter2.next())
console.log(iter2.next())
