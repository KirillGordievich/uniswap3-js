/**
 * Functions for conversions between sqrt prices and ticks
 */
export declare const TICK_MIN = -887272;
export declare const TICK_MAX = 887272;
export declare const SQRT_RATIO_MIN = 4295128739n;
export declare const SQRT_RATIO_MAX = 1461446703485210103287273052203988822378723970342n;
/**
 * Calculate a sqrt price corresponding to the tick
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/TickMath.sol
 * @param tick Tick
 * @returns Sqrt price
 */
export declare function getSqrtPriceAtTick(tick: number): bigint;
/**
 * Calculate a tick corresponding to a sqrt price
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/TickMath.sol
 * @param sqrtPrice Sqrt price
 * @returns Tick
 */
export declare function getTickAtSqrtPrice(sqrtPrice: bigint): number;
