/**
 * 数学拓展类
 */
export class Mathematics {
    /**
     * 获取整数的所有因数
     * @param x 未知正整数
     * @returns  所有因数
     */
    static getFactors(x: number): { a: number; b: number; }[] {
        // 所有因数对应组
        let factors = [];
        // 循环得到因数
        for (let i = 1; i <= x / 2; i++) {
            if (x % i == 0) factors.push({ a: i, b: x / i })
        }
        return factors;
    }
    /**
     * 获取整数的所有因数通过接近程度排序
     * @param x 未知正整数
     * @returns 所有因数
     */
    static getFactorsByApproach(x: number): { a: number; b: number; }[] {
        // 根据接近度排序
        return Mathematics.getFactors(x).sort((a, b) => {
            return Math.abs(a.a - a.b) - Math.abs(b.a - b.b);
        })
    }
    /**
     * 获取随机数(整数)
     * @param min 最小值
     * @param max 最大值
     * @returns 随机数 [min,max)
     */
    static getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * max) - min;
    }
    /**
     * 打乱数组
     * @param array 数组
     * @returns 打乱后的数组 
     */
    static getDisorganizeArray<T>(array: T[]): T[] {
        let tempArray = [...array];
        for (let i = 0; i < array.length; i++) {
            let j = this.getRandomInt(0, array.length);
            let temp = tempArray[i];
            tempArray[i] = tempArray[j];
            tempArray[j] = temp;
        }
        return tempArray;
    }
    /**
     * 求和
     * @param array 数组
     */
    static sum(array: number[]): number {
        let sum = 0;
        for (let item of array) sum += item;
        return sum;
    }
    /**
     * 获取随机字符串
     * @param len 长度
     * @param str 字符串或者枚举
     * @param ignore 忽略
     */
    static getRandomStr(len: number, str: GetRandomStrEnum | string = GetRandomStrEnum.LargeSmallNumber, ignore = '') {
        let tmpStr = "";
        let resStr = "";
        if (typeof (str) == "string") tmpStr = str;
        else {
            if ((str & GetRandomStrEnum.Large) != 0) tmpStr += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            if ((str & GetRandomStrEnum.Small) != 0) tmpStr += "abcdefghijklmnopqrstuvwxyz"
            if ((str & GetRandomStrEnum.Number) != 0) tmpStr += "0123456789"
        }
        // 剔除忽略字符串
        tmpStr.replace(ignore, "");
        for (let i = 0; i < len; i++)  resStr += tmpStr[this.getRandomInt(0, tmpStr.length)]
        return resStr;
    }
    /**
     * 全局唯一标识符
     */
    static uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    /**
     * 判断a与b符号是否相同
     * @param a 
     * @param b 
     * @returns 
     */
    static sameSign(a: number, b: number): boolean {
        return (a ^ b) >= 0;
    }
}

/**
 * 二维向量
 */
export class Vector2 {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    /**
     * 创建
     * @param x 
     * @param y 
     */
    static c(x: number, y: number) {
        return new Vector2(x, y);
    }

    /**
     * 减法 p1 - p2
     * @param p1 点1
     * @param p2 点2
     * @returns 向量
     */
    static subtraction(p1: Vector2, p2: Vector2) {
        return Vector2.c(p1.x - p2.x, p1.y - p2.y);
    }
    /**
     * 叉乘
     * @param v1 向量1
     * @param v2 向量2
     * @returns 
     */
    static multiplicationCross(v1: Vector2, v2: Vector2) {
        return v1.x * v2.y - v1.y * v2.x;
    }
    /**
     * 点乘
     * @param v1 向量1
     * @param v2 向量2
     * @returns 
     */
    static dotProduct(v1: Vector2, v2: Vector2) {
        return v1.x * v2.x + v1.y * v2.y;
    }
    /**
     * 检测两线段是否交叉
     * @param p1 点1
     * @param p2 点2
     * @param p3 点3
     * @param p4 点4
     */
    static checkCross(p1: Vector2, p2: Vector2, p3: Vector2, p4: Vector2) {
        let p3p1 = Vector2.subtraction(p1, p3);
        let p3p2 = Vector2.subtraction(p2, p3);
        let p3p4 = Vector2.subtraction(p4, p3);

        let p1p2 = Vector2.subtraction(p2, p1);
        let p1p3 = Vector2.subtraction(p3, p1);
        let p1p4 = Vector2.subtraction(p4, p1);

        return Vector2.multiplicationCross(p3p1, p3p4) * Vector2.multiplicationCross(p3p2, p3p4) <= 0 &&
            Vector2.multiplicationCross(p1p2, p1p3) * Vector2.multiplicationCross(p1p2, p1p4) <= 0
    }

    /**
     * 检测p点是否在点p1,p2,p3组成的三角形内
     * @param p 
     * @param p1 
     * @param p2 
     * @param p3 
     */
    static checkInTriangle(p: Vector2, p1: Vector2, p2: Vector2, p3: Vector2) {
        let pp1 = Vector2.subtraction(p1, p);
        let pp2 = Vector2.subtraction(p2, p);
        let pp3 = Vector2.subtraction(p3, p);

        let d1 = Vector2.multiplicationCross(pp1, pp2);
        let d2 = Vector2.multiplicationCross(pp2, pp3);
        let d3 = Vector2.multiplicationCross(pp3, pp1);

        return Mathematics.sameSign(d1, d2) && Mathematics.sameSign(d2, d3);
    }
    /**
     * 检测p点是否在点p1,p2,p3,p4组成的矩形内
     * @param p 
     * @param p1 
     * @param p2 
     * @param p3 
     * @param p4 
     */
    static checkInRectangle(p: Vector2, p1: Vector2, p2: Vector2, p3: Vector2, p4?: Vector2) {
        let p1p2 = Vector2.subtraction(p2, p1);
        let p1p = Vector2.subtraction(p, p1)
        let p2p3 = Vector2.subtraction(p3, p2);
        let p2p = Vector2.subtraction(p, p2);

        let d1 = Vector2.dotProduct(p1p2, p1p);
        let d2 = Vector2.dotProduct(p1p2, p1p2);
        let d3 = Vector2.dotProduct(p2p3, p2p);
        let d4 = Vector2.dotProduct(p2p3, p2p3);

        return 0 <= d1 && d1 <= d2 && 0 <= d3 && d3 <= d4;
    }
    /**
     * p点绕o点旋转angle°
     * @param p 当前点
     * @param o 源点
     * @param angle 角度
     */
    static rotateAroundPoint(p: Vector2, o: Vector2, angle: number) {
        let tp = Vector2.subtraction(p, o);
        let cos = +Math.cos(Math.PI / 180 * angle).toFixed(3);
        let sin = +Math.sin(Math.PI / 180 * angle).toFixed(3);
        let x = tp.x * cos + tp.y * sin;
        let y = tp.y * cos - tp.x * sin;
        return Vector2.c(x, y)
    }

    /**
     * 计算p1到p2两点之间的距离 保留3位小数
     * @param p1 
     * @param p2 
     */
    static distance(p1: Vector2, p2: Vector2) {
        return +Math.sqrt(Math.pow(p2.y - p1.y, 2) + Math.pow(p2.x - p1.x, 2)).toFixed(3)
    }
}


export enum GetRandomStrEnum {
    Large = 1,
    Small = 2,
    LargeSmall = 3,
    Number = 4,
    LargeNumber = 5,
    SmallNumber = 6,
    LargeSmallNumber = 7
}