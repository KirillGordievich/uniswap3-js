/**
 * Functions emulating native EVM functionality
 */
export declare const UINT128_MIN = 0n;
export declare const UINT128_MAX: bigint;
export declare const UINT160_MIN = 0n;
export declare const UINT160_MAX: bigint;
export declare const UINT256_MIN = 0n;
export declare const UINT256_MAX: bigint;
export declare const INT128_MIN: bigint;
export declare const INT128_MAX: bigint;
export declare const INT256_MIN: bigint;
export declare const INT256_MAX: bigint;
/**
 * Check if value is an uint128 integer
 *
 * @param value Value to check
 * @returns True if value is an uint128 integer and false otherwise
 */
export declare function isUint128(value: unknown): value is bigint;
/**
 * Check if value is an uint160 integer
 *
 * @param value Value to check
 * @returns True if value is an uint160 integer and false otherwise
 */
export declare function isUint160(value: unknown): value is bigint;
/**
 * Check if value is an uint256 integer
 *
 * @param value Value to check
 * @returns True if value is an uint256 integer and false otherwise
 */
export declare function isUint256(value: unknown): value is bigint;
/**
 * Check if value is an int128 integer
 *
 * @param value Value to check
 * @returns True if value is an int128 integer and false otherwise
 */
export declare function isInt128(value: unknown): value is bigint;
/**
 * Check if value is an int256 integer
 *
 * @param value Value to check
 * @returns True if value is an int256 integer and false otherwise
 */
export declare function isInt256(value: unknown): value is bigint;
/**
 * Cast a value to an uint128 integer, using the wraparound method
 *
 * @param value Value to cast
 * @returns Cast uint128 integer
 */
export declare function uint128(value: bigint): bigint;
/**
 * Cast a value to an uint160 integer, using the wraparound method
 *
 * @param value Value to cast
 * @returns Cast uint160 integer
 */
export declare function uint160(value: bigint): bigint;
/**
 * Cast a value to an uint256 integer, using the wraparound method
 *
 * @param value Value to cast
 * @returns Cast uint256 integer
 */
export declare function uint256(value: bigint): bigint;
