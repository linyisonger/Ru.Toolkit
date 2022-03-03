import { PasswordRuleEnum, Verify } from '../dist/index.js';
console.log("test start...");

console.log("likeUsci start...");
if (Verify.likeUsci('92362200QQAF1R7D6B'))
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("likeUsci end");

console.log("isNullOrEmpty start...");
if (Verify.isNullOrEmpty(''))
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("isNullOrEmpty end");

console.log("isPhoneNumber start...");
if (Verify.isPhoneNumber('18717151126'))
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("isPhoneNumber end");

console.log("isTellPhoneNumber start...");
if (Verify.isTellPhoneNumber('0773-4567891'))
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("isTellPhoneNumber end");


console.log("isEmail start...");
if (Verify.isEmail('linyisonger@qq.com'))
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("isEmail end");

console.log("isUnifiedSocialCreditIdentifier start...");
if (Verify.isUnifiedSocialCreditIdentifier('92520400WMMXENXA4U'))
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("isUnifiedSocialCreditIdentifier end");

console.log("isVehicleNumber start...");
if (Verify.isVehicleNumber('云F00009'))
    console.log('yes ~');
else throw new Error("cao !!!!")
if (Verify.isVehicleNumber('浙AD08885'))
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("isVehicleNumber end");

console.log("likeIDCardNumber start...");
if (Verify.likeIDCardNumber('432123198311104922'))
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("likeIDCardNumber end");

console.log("isCitizenIdentificationNumber start...");
if (Verify.isCitizenIdentificationNumber('432123198311104923') == false)
    console.log('yes ~');
else throw new Error("cao !!!!")
if (Verify.isCitizenIdentificationNumber('432123198311104922'))
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("isCitizenIdentificationNumber end");

console.log("test end");


console.log("passwordRules start...");
if (Verify.passwordRules('123456Aa', PasswordRuleEnum.LargeSmallNumber, 8))
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("passwordRules end");

console.log("inMicroMessenger start...");
if (Verify.inMicroMessenger("Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1 wechatdevtools/1.05.2111300 MicroMessenger/8.0.5 webview/16462719904886910 webdebugger port/39568 token/a07985f5ecd92ff79aaa364121026dc2"))
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("inMicroMessenger end");

console.log("inMiniprogramWebView start...");
if (Verify.inMiniprogramWebView("Mozilla/5.0 (iPhone; CPU iPhone OS 15_ 0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/1 5.0 Mobile/15E148 Safari/604.1 wechatdevtools/1.05.2111300 MicroMessenger/8.0.5 webview/3921 _4 webdebugger miniprogramhtmlwebview miniProqram port/49132"))
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("inMiniprogramWebView end");



