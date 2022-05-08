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
- `sameSign(a: number, b: number):boolean` 判断 a 与 b 符号是否相同

### Vector2

- `new Vector2(x: number, y: number)` | `c(x: number, y: number):Vector2` 新建二维向量
- `subtraction(p1: Vector2, p2: Vector2)` 向量之间的减法 p1 - p2
- `dotProduct(v1: Vector2, v2: Vector2)` 点乘
- `multiplicationCross(v1: Vector2, v2: Vector2)` 叉乘
- `checkCross(p1: Vector2, p2: Vector2, p3: Vector2, p4: Vector2)` 检测两线段是否交叉
- `checkInTriangle(p: Vector2, p1: Vector2, p2: Vector2, p3: Vector2)` 检测 p 点是否在点 p1,p2,p3 组成的三角形内
- `checkInRectangle(p: Vector2, p1: Vector2, p2: Vector2, p3: Vector2, p4?: Vector2)` 检测 p 点是否在点 p1,p2,p3,p4 组成的矩形内
- `rotateAroundPoint(p: Vector2, o: Vector2, angle: number)` p 点绕 o 点旋转 angle°
- `distance(p1: Vector2, p2: Vector2): number;` 计算 p1 到 p2 两点之间的距离 保留 3 位小数
