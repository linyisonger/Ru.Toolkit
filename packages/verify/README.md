### ru-toolkit-verify

这是一个关于“验证”的类，提供一些“常用”的方法~ 💃

### Verify

- `likeUsci(usci: string): boolean` 像是社会统一信用代码
- `isNullOrEmpty(str: string): boolean` 是否是 null 或者""
- `isPhoneNumber(phoneNumber: string): boolean` 校验是否是 11 位手机号码
- `isTellPhoneNumber(tellPhoneNumber: string): boolean` 校验是否是固定电话
- `isEmail(email: string): boolean` 是否是邮箱
- `isUnifiedSocialCreditIdentifier(usci: string): boolean` 是否是统一社会信用代码 
- `isVehicleNumber(vehicleNumber: string): boolean` 是否是车牌号
- `likeIDCardNumber(num: string): boolean` 像身份证号
- `isCitizenIdentificationNumber(num: string): boolean` 是否是身份证号码
- `passwordRules(password: string, rule: PasswordRuleEnum = PasswordRuleEnum.LargeSmallNumber, minLength = 6, maxLength = 20)` 密码规则校验
- `inMicroMessenger()` 判断是不是在微信浏览器中
- `inMiniprogramWebView()` 判断是不是在微信小程序中web-view中