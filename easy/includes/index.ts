

import { Equal } from "../../utils";

type Includes<T extends  readonly any[], F> = T extends [infer M, ...infer N]  ? Equal<M, F> extends true ? true: Includes<N,F > : false;
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
