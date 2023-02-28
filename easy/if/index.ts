type If<C extends Boolean, T, F> = C extends true ? T : F;

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'