
type TupleToUnion<T extends readonly (string | symbol | number | boolean)[]> = T[number];

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '../../utils';

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]
