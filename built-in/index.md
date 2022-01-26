infer 最早出现在此 [PR](https://github.com/Microsoft/TypeScript/pull/21496]) 中，表示在 extends 条件语句中待推断的类型变量。

```javascript
type ParamType<T> = T extends (...args: infer P) => any ? P : T;
type ReturnType<T> = T extends (...args: any[]) => infer P ? P : any;
// 获取参数类型
type ConstructorParameters<T extends new (...args: any[]) => any> = T extends new (...args: infer P) => any
  ? P
  : never;

// 获取实例类型
type InstanceType<T extends new (...args: any[]) => any> = T extends new (...args: any[]) => infer R ? R : any;

class TestClass {
  constructor(public name: string, public age: number) {}
}

type Params = ConstructorParameters<typeof TestClass>; // [string, number]

type Instance = InstanceType<typeof TestClass>; // TestClass
```
