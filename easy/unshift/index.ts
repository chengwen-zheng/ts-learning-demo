type Unshift<T extends Array<unknown>, F> = T extends unknown[] ? [F, ...T] : never;

type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
