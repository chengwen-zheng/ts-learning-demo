type Chainable<Result = {}> = {
    // Omit<Result, K> 先去掉之前的k。然后加上现在k
    option<K extends string, V extends any>(key: K extends keyof Result ? never : K, value: V):Chainable<Omit<Result, K> & Record<K, V>> ;
    get(): Result
  }
  
  /* _____________ 测试用例 _____________ */
  import type { Alike, Expect } from '../../utils/index';
  
  declare const a: Chainable
  
  const result1 = a
    .option('foo', 123)
    .option('bar', { value: 'Hello World' })
    .option('name', 'type-challenges')
    .get()
  
  const result2 = a
    .option('name', 'another name')
    // @ts-expect-error
    .option('name', 'last name')
    .get()
  
  const result3 = a
    .option('name', 'another name')
    // @ts-expect-error
    .option('name', 123)
    .get()
  
  type cases = [
    Expect<Alike<typeof result1, Expected1>>,
    Expect<Alike<typeof result2, Expected2>>,
    Expect<Alike<typeof result3, Expected3>>,
  ]
  
  type Expected1 = {
    foo: number
    bar: {
      value: string
    }
    name: string
  }
  
  type Expected2 = {
    name: string
  }
  
  type Expected3 = {
    name: number
  }