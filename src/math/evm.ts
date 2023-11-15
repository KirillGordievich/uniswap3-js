/**
 * Functions emulating native EVM functionality
 */

export const UINT128_MIN = 0n;
export const UINT128_MAX = 2n ** 128n - 1n;
export const UINT160_MIN = 0n;
export const UINT160_MAX = 2n ** 160n - 1n;
export const UINT256_MIN = 0n;
export const UINT256_MAX = 2n ** 256n - 1n;

export const INT128_MIN = -(2n ** 127n);
export const INT128_MAX = 2n ** 127n - 1n;
export const INT256_MIN = -(2n ** 255n);
export const INT256_MAX = 2n ** 255n - 1n;

/**
 * Check if value is an uint128 integer
 *
 * @param value Value to check
 * @returns True if value is an uint128 integer and false otherwise
 */
export function isUint128(value: unknown): value is bigint {
  return (
    typeof value === "bigint" && value >= UINT128_MIN && value <= UINT128_MAX
  );
}

/**
 * Check if value is an uint160 integer
 *
 * @param value Value to check
 * @returns True if value is an uint160 integer and false otherwise
 */
export function isUint160(value: unknown): value is bigint {
  return (
    typeof value === "bigint" && value >= UINT160_MIN && value <= UINT160_MAX
  );
}

/**
 * Check if value is an uint256 integer
 *
 * @param value Value to check
 * @returns True if value is an uint256 integer and false otherwise
 */
export function isUint256(value: unknown): value is bigint {
  return (
    typeof value === "bigint" && value >= UINT256_MIN && value <= UINT256_MAX
  );
}

/**
 * Check if value is an int128 integer
 *
 * @param value Value to check
 * @returns True if value is an int128 integer and false otherwise
 */
export function isInt128(value: unknown): value is bigint {
  return (
    typeof value === "bigint" && value >= INT128_MIN && value <= INT128_MAX
  );
}

/**
 * Check if value is an int256 integer
 *
 * @param value Value to check
 * @returns True if value is an int256 integer and false otherwise
 */
export function isInt256(value: unknown): value is bigint {
  return (
    typeof value === "bigint" && value >= INT256_MIN && value <= INT256_MAX
  );
}

/**
 * Cast a value to an uint128 integer, using the wraparound method
 *
 * @param value Value to cast
 * @returns Cast uint128 integer
 */
export function uint128(value: bigint): bigint {
  return value & UINT128_MAX;
}

/**
 * Cast a value to an uint160 integer, using the wraparound method
 *
 * @param value Value to cast
 * @returns Cast uint160 integer
 */
export function uint160(value: bigint): bigint {
  return value & UINT160_MAX;
}

/**
 * Cast a value to an uint256 integer, using the wraparound method
 *
 * @param value Value to cast
 * @returns Cast uint256 integer
 */
export function uint256(value: bigint): bigint {
  return value & UINT256_MAX;
}
