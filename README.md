# Ru.Toolkit 工具包

 ![Git Actions](https://img.shields.io/github/workflow/status/LINYISONGER/RU.Toolkit/npm%20packages%20publish?style=for-the-badge)![MIT](https://img.shields.io/github/license/linyisonger/Ru.Toolkit?style=for-the-badge)![Stars](https://img.shields.io/github/stars/linyisonger/Ru.Toolkit?style=for-the-badge)

 This is a small js toolkit.

 一个简单的js工具包
 
 ## ru-toolkit-mathematics 常用数学库

 ![npm](https://img.shields.io/npm/v/ru-toolkit-mathematics?style=for-the-badge)![npm](https://img.shields.io/npm/dw/ru-toolkit-mathematics?style=for-the-badge)
 
 ### Mathematics

### Mathematics

- `getFactors(x: number): { a: number; b: number; }[]` 获取整数的所有因数 [1~x/2]
- `getFactorsByApproach(x: number): { a: number; b: number; }[]` 获取整数的所有因数通过接近程度排序
- `getRandomInt(min: number, max: number): number` 获取随机数(整数) [min,max)
- `getDisorganizeArray<T>(array: T[]): T[]` 打乱数组
- `sum(array: number[]): number` 求和
- `getRandomStr(len: number, str: GetRandomStrEnum | string = GetRandomStrEnum.LargeSmallNumber, ignore = ''):string` 获取随机字符串
- `uuid(): string` 全局唯一标识符

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
