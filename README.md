# Ru.Toolkit 工具包

 ![Git Actions](https://img.shields.io/github/workflow/status/LINYISONGER/RU.Toolkit/npm%20packages%20publish?style=for-the-badge)![MIT](https://img.shields.io/github/license/linyisonger/Ru.Toolkit?style=for-the-badge)![Stars](https://img.shields.io/github/stars/linyisonger/Ru.Toolkit?style=for-the-badge)

 This is a small js toolkit.

 一个简单的js工具包
 
 ## ru-toolkit-mathematics 常用数学库

 ![npm](https://img.shields.io/npm/v/ru-toolkit-mathematics?style=for-the-badge)![npm](https://img.shields.io/npm/dw/ru-toolkit-mathematics?style=for-the-badge)
  
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

 ## ru-toolkit-convertor 常用格式库

 ![npm](https://img.shields.io/npm/v/ru-toolkit-convertor?style=for-the-badge)![npm](https://img.shields.io/npm/dw/ru-toolkit-convertor?style=for-the-badge)
 
 ### Convertor

- `usciToOibc(usci: string): string` 社会统一信用代码转换组织机构代码
- `timeFormat(date: Date, fmt: string = "yyyy-MM-dd hh:mm:ss"): string` 时间格式化
- `housands(num: number | string): string` 千分位处理
- `textToBase64(text: string): string` 文本转 base64
- `base64ToText(base64: string): string` base64 转文本
- `jsonToBase64<T>(json: T): string` json 对象转换 base64
- `base64ToJson<T>(base64: string): T` base64 转换 json 对象

 ## ru-toolkit-verify 常用验证库

 ![npm](https://img.shields.io/npm/v/ru-toolkit-verify?style=for-the-badge)![npm](https://img.shields.io/npm/dw/ru-toolkit-verify?style=for-the-badge)
 
### Verify

- `likeUsci(usci: string): boolean` 像是社会统一信用代码
- `isNullOrEmpty(str: string): boolean` 是否是 null 或者""
- `isPhoneNumber(phoneNumber: string): boolean` 校验是否是 11 位手机号码
- `isEmail(email: string): boolean` 是否是邮箱
- `isUnifiedSocialCreditIdentifier(usci: string): boolean` 是否是统一社会信用代码 
- `isVehicleNumber(vehicleNumber: string): boolean` 是否是车牌号
- `likeIDCardNumber(num: string): boolean` 像身份证号
- `isCitizenIdentificationNumber(num: string): boolean` 是否是身份证号码
- `passwordRules(password: string, rule: PasswordRuleEnum = PasswordRuleEnum.LargeSmallNumber, minLength = 6, maxLength = 20)` 密码规则校验
- `inMicroMessenger()` 判断是不是在微信浏览器中
- `inMiniprogramWebView()` 判断是不是在微信小程序中web-view中
