/**
 * Arithmetic functions used by Uniswap v3 contracts
 */
/**
 * Add two uint256 integers and check for overflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/LowGasSafeMath.sol
 * @param x Addend
 * @param y Addend
 * @returns Sum x + y
 */
export declare function safeAdd(x: bigint, y: bigint): bigint;
/**
 * Subtract one uint256 integer from another and check for underflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/LowGasSafeMath.sol
 * @param x Minuend
 * @param y Subtrahend
 * @returns Difference x - y
 */
export declare function safeSub(x: bigint, y: bigint): bigint;
/**
 * Multiply two uint256 integers and check for overflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/LowGasSafeMath.sol
 * @param x Multiplicand
 * @param y Multiplier
 * @returns Product x * y
 */
export declare function safeMul(x: bigint, y: bigint): bigint;
/**
 * Multiply and divide an uint256 integer, rounding down the result and checking it for overflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/FullMath.sol
 * @param x Multiplicand
 * @param y Multiplier
 * @param z Divisor
 * @returns Quotient floor(x * y / z)
 */
export declare function safeMulDivFloor(x: bigint, y: bigint, z: bigint): bigint;
/**
 * Multiply and divide an uint256 integer, rounding up the result and checking it for overflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/FullMath.sol
 * @param x Multiplicand
 * @param y Multiplier
 * @param z Divisor
 * @returns Quotient ceil(x * y / z)
 */
export declare function safeMulDivCeil(x: bigint, y: bigint, z: bigint): bigint;
/**
 * Divide an uint256 integer by another without checking for overflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/UnsafeMath.sol
 * @param x Divisible
 * @param y Divisor
 * @returns Quotient ceil(x / y)
 */
export declare function unsafeDivCeil(x: bigint, y: bigint): bigint;
