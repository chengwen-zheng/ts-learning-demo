


type Last<T extends any[]> =  T extends [] ? never : [any, ...T][T['length']];


/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '../../utils'

type cases = [
Expect<Equal<Last<[2]>, 2>>,
Expect<Equal<Last<[3, 2, 1]>, 1>>,
Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]
