/**
 * Casting library functions used by Uniswap v3 contracts
 */
/**
 * Check that a value fits an uint160 integer and return it
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/SafeCast.sol
 * @param x Integer
 * @returns Unmodified integer
 */
export declare function toUint160(x: bigint): bigint;
/**
 * Check that a value fits an int160 integer and return it
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/SafeCast.sol
 * @param x Integer
 * @returns Unmodified integer
 */
export declare function toInt128(x: bigint): bigint;
/**
 * Check that a value fits an int256 integer and return it
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/SafeCast.sol
 * @param x Integer
 * @returns Unmodified integer
 */
export declare function toInt256(x: bigint): bigint;
