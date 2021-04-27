type GetQueryKeys<S extends string, D = ''> = S extends `${infer T}=${any}`
  ? S extends `${string}&${infer P}`
    ? GetQueryKeys<P, D | T>
    : D | T
  : D
type GetQueryString<S extends string> = S extends `${string}?${infer R}` ? GetQueryKeys<R> : never
type GetValue<Params, URL extends string> = {
  [P in keyof Params & string]: URL extends `${any}${'?' | '&'}${P}=${infer R}`
    ? R extends `${infer K}&${any}`
      ? K
      : R
    : Params[P]
}
type QueryParams<S extends string> = Record<GetQueryString<S>, unknown>
type Url2Json<S extends string> = Omit<GetValue<QueryParams<S>, S> ,''>

export default Url2Json
