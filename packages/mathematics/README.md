### ru-toolkit-mathematics

这是一个关于“数学”的类，提供一些“常用”的方法~ 💃

### Mathematics

- `getFactors(x: number): { a: number; b: number; }[]` 获取整数的所有因数 [1~x/2]
- `getFactorsByApproach(x: number): { a: number; b: number; }[]` 获取整数的所有因数通过接近程度排序
- `getRandomInt(min: number, max: number): number` 获取随机数(整数) [min,max)
- `getDisorganizeArray<T>(array: T[]): T[]` 打乱数组
- `sum(array: number[]): number` 求和
- `getRandomStr(len: number, str: GetRandomStrEnum | string = GetRandomStrEnum.LargeSmallNumber, ignore = ''):string` 获取随机字符串
- `uuid(): string` 全局唯一标识符
