// 1. tuple 转 union 

// 第一种解法
type ElementOf<T> = T extends Array<infer E> ? E : never;

type TTuple = [string, number];

type ToUnion = ElementOf<TTuple>; // string | number

// 第二种更牛逼 https://stackoverflow.com/questions/44480644/string-union-to-string-array/45486495#45486495
type TTuple1 = [string, number];
type Res = TTuple[number]; // string | number

// 2. 这个可能要稍微麻烦一点，需要 infer 配合「 Distributive conditional types 」使用。

// 在相关链接中，我们可以了解到「Distributive conditional types」是由「naked type parameter」构成的条件类型。而「naked type parameter」表示没有被 Wrapped 的类型（如：Array<T>、[T]、Promise<T> 等都是不是「naked type parameter」）。「Distributive conditional types」主要用于拆分 extends 左边部分的联合类型，举个例子：在条件类型 T extends U ? X : Y 中，当 T 是 A | B 时，会拆分成 A extends U ? X : Y | B extends U ? X : Y；

// 有了这个前提，再利用在逆变位置上，同一类型变量的多个候选类型将会被推断为交叉类型的特性，即
type T1 = { name: string };
type T2 = { age: number };

type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void } ? U : never;
type T20 = Bar<{ a: (x: string) => void; b: (x: string) => void }>; // string
type T21 = Bar<{ a: (x: T1) => void; b: (x: T2) => void }>; // T1 & T2

// 综上所述
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

type Result = UnionToIntersection<T1 | T2>; // T1 & T2

// 当传入 T1 | T2 时：

// 第一步：(U extends any ? (k: U) => void : never) 会把 union 拆分成 (T1 extends any ? (k: T1) => void : never) | (T2 extends any ? (k: T2)=> void : never)，即是得到 (k: T1) => void | (k: T2) => void；

// 第二步：(k: T1) => void | (k: T2) => void extends ((k: infer I) => void) ? I : never，根据上文，可以推断出 I 为 T1 & T2

export {}