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
} 
