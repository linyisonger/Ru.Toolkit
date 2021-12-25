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
    static getRandomInt(min: number, max: number) {
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
}   
