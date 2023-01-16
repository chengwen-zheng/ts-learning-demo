type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string

type MyAwaited<T> = T extends PromiseLike<infer P> ? P extends Promise<any> ? MyAwaited<P> : P : never