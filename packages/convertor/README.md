### ru-toolkit-convertor

这是一个关于“格式”的类，提供一些“常用”的方法~ 💃

### Convertor

- `usciToOibc(usci: string): string` 社会统一信用代码转换组织机构代码
- `timeFormat(date: Date, fmt: string = "yyyy-MM-dd hh:mm:ss"): string` 时间格式化
- `housands(num: number | string): string` 千分位处理
- `textToBase64(text: string): string` 文本转 base64
- `base64ToText(base64: string): string` base64 转文本
- `jsonToBase64<T>(json: T): string` json 对象转换 base64
- `base64ToJson<T>(base64: string): T` base64 转换 json 对象
