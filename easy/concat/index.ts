
type Concat<T extends any[], F extends any[]> = [...T, ...F];
type Result = Concat<[1], [2]>; // expected to be [1, 2]
