/**
 * Liquidity library functions used by Uniswap v3 contracts
 */
/**
 * Add liquidity delta and check the result for overflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/LiquidityMath.sol
 * @param x Liquidity
 * @param y Liquidity delta
 * @returns Sum
 */
export declare function addDelta(x: bigint, y: bigint): bigint;
