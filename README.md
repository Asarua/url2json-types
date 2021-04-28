# url2json-types

url2json的类型文件

> **要求：ts4.1及以上**

## 下载

使用npm

```bash
npm i url2json-types -D
```

使用yarn

```bash
yarn add url2json-types -D
```

## 例子

```typescript
import Url2Json from 'url2json-types'

type a = Url2Json<'baidu.com?a=1&b=2'>

/*
  type a === {
    "a": "1",
    "b": "2"
  }
*/
```

## License

[MIT](https://github.com/Asarua/url2json-types/blob/master/LICENSE)

## Keywords

`typescript` `url2json`
