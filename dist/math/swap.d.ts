/**
 * Functions used to calculate swap step results
 */
/**
 * Calculate results of a swap step, given the input parameters
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/SwapMath.sol
 * @param sqrtPriceCurrent Current sqrt price
 * @param sqrtPriceTarget Target sqrt price
 * @param liquidity Liquidity level
 * @param quantitySellRemaining Remaining sold quantity
 * @param fee Pool fee in pips
 * @returns Swap step results
 */
export declare function computeSwapStepBuy(sqrtPriceCurrent: bigint, sqrtPriceTarget: bigint, liquidity: bigint, quantitySellRemaining: bigint, fee: bigint): {
    sqrtPrice: bigint;
    quantitySell: bigint;
    quantityBuy: bigint;
    quantityFee: bigint;
};
/**
 * Calculate results of a swap step, given the output parameters
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/SwapMath.sol
 * @param sqrtPriceCurrent Current sqrt price
 * @param sqrtPriceTarget Target sqrt price
 * @param liquidity Liquidity level
 * @param quantityBuyRemaining Remaining purchased quantity
 * @param fee Pool fee in pips
 * @returns Swap step results
 */
export declare function computeSwapStepSell(sqrtPriceCurrent: bigint, sqrtPriceTarget: bigint, liquidity: bigint, quantityBuyRemaining: bigint, fee: bigint): {
    sqrtPrice: bigint;
    quantitySell: bigint;
    quantityBuy: bigint;
    quantityFee: bigint;
};
