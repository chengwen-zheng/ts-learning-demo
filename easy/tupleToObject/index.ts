const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const


type TupleToObject<T extends readonly (string | symbol | number)[]> = {
    [Key in T[number]]: Key
}

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
// const res: result = {
//     'model X': 'model X'
// }