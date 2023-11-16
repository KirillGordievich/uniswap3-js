"use strict";
/**
 * Functions emulating native EVM functionality
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.uint256 = exports.uint160 = exports.uint128 = exports.isInt256 = exports.isInt128 = exports.isUint256 = exports.isUint160 = exports.isUint128 = exports.INT256_MAX = exports.INT256_MIN = exports.INT128_MAX = exports.INT128_MIN = exports.UINT256_MAX = exports.UINT256_MIN = exports.UINT160_MAX = exports.UINT160_MIN = exports.UINT128_MAX = exports.UINT128_MIN = void 0;
exports.UINT128_MIN = 0n;
exports.UINT128_MAX = 2n ** 128n - 1n;
exports.UINT160_MIN = 0n;
exports.UINT160_MAX = 2n ** 160n - 1n;
exports.UINT256_MIN = 0n;
exports.UINT256_MAX = 2n ** 256n - 1n;
exports.INT128_MIN = -(2n ** 127n);
exports.INT128_MAX = 2n ** 127n - 1n;
exports.INT256_MIN = -(2n ** 255n);
exports.INT256_MAX = 2n ** 255n - 1n;
/**
 * Check if value is an uint128 integer
 *
 * @param value Value to check
 * @returns True if value is an uint128 integer and false otherwise
 */
function isUint128(value) {
    return (typeof value === "bigint" && value >= exports.UINT128_MIN && value <= exports.UINT128_MAX);
}
exports.isUint128 = isUint128;
/**
 * Check if value is an uint160 integer
 *
 * @param value Value to check
 * @returns True if value is an uint160 integer and false otherwise
 */
function isUint160(value) {
    return (typeof value === "bigint" && value >= exports.UINT160_MIN && value <= exports.UINT160_MAX);
}
exports.isUint160 = isUint160;
/**
 * Check if value is an uint256 integer
 *
 * @param value Value to check
 * @returns True if value is an uint256 integer and false otherwise
 */
function isUint256(value) {
    return (typeof value === "bigint" && value >= exports.UINT256_MIN && value <= exports.UINT256_MAX);
}
exports.isUint256 = isUint256;
/**
 * Check if value is an int128 integer
 *
 * @param value Value to check
 * @returns True if value is an int128 integer and false otherwise
 */
function isInt128(value) {
    return (typeof value === "bigint" && value >= exports.INT128_MIN && value <= exports.INT128_MAX);
}
exports.isInt128 = isInt128;
/**
 * Check if value is an int256 integer
 *
 * @param value Value to check
 * @returns True if value is an int256 integer and false otherwise
 */
function isInt256(value) {
    return (typeof value === "bigint" && value >= exports.INT256_MIN && value <= exports.INT256_MAX);
}
exports.isInt256 = isInt256;
/**
 * Cast a value to an uint128 integer, using the wraparound method
 *
 * @param value Value to cast
 * @returns Cast uint128 integer
 */
function uint128(value) {
    return value & exports.UINT128_MAX;
}
exports.uint128 = uint128;
/**
 * Cast a value to an uint160 integer, using the wraparound method
 *
 * @param value Value to cast
 * @returns Cast uint160 integer
 */
function uint160(value) {
    return value & exports.UINT160_MAX;
}
exports.uint160 = uint160;
/**
 * Cast a value to an uint256 integer, using the wraparound method
 *
 * @param value Value to cast
 * @returns Cast uint256 integer
 */
function uint256(value) {
    return value & exports.UINT256_MAX;
}
exports.uint256 = uint256;
