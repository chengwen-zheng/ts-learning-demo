// Exclude<T, U> 表示从 T 中找出 U 中没有的元素, 换种更加贴近语义的说法其实就是从T 中排除 U
interface Todo {
    title: string
    description: string
    completed: boolean
}

type A = {
   a: string
} | {
    title: string
    description: string
    completed: boolean
};

interface T1 {
    title: string;
}

type MyExclude<T, K> = T extends K ? never : T;
type T0 = MyExclude<"a" | "b" | "c", "a">;
type T2 = MyExclude<A, Todo>;

const a:T2 = {
    title:'3'
}
