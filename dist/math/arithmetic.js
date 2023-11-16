"use strict";
/**
 * Arithmetic functions used by Uniswap v3 contracts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unsafeDivCeil = exports.safeMulDivCeil = exports.safeMulDivFloor = exports.safeMul = exports.safeSub = exports.safeAdd = void 0;
const evm_js_1 = require("./evm.js");
const errors_js_1 = require("../utils/errors.js");
/**
 * Add two uint256 integers and check for overflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/LowGasSafeMath.sol
 * @param x Addend
 * @param y Addend
 * @returns Sum x + y
 */
function safeAdd(x, y) {
    const sum = x + y;
    if (!(0, evm_js_1.isUint256)(sum)) {
        throw new errors_js_1.MathError("sum overflows uint256");
    }
    return sum;
}
exports.safeAdd = safeAdd;
/**
 * Subtract one uint256 integer from another and check for underflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/LowGasSafeMath.sol
 * @param x Minuend
 * @param y Subtrahend
 * @returns Difference x - y
 */
function safeSub(x, y) {
    const difference = x - y;
    if (!(0, evm_js_1.isUint256)(difference)) {
        throw new errors_js_1.MathError("difference underflows uint256");
    }
    return difference;
}
exports.safeSub = safeSub;
/**
 * Multiply two uint256 integers and check for overflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/LowGasSafeMath.sol
 * @param x Multiplicand
 * @param y Multiplier
 * @returns Product x * y
 */
function safeMul(x, y) {
    const product = x * y;
    if (!(0, evm_js_1.isUint256)(product)) {
        throw new errors_js_1.MathError("product overflows uint256");
    }
    return product;
}
exports.safeMul = safeMul;
/**
 * Multiply and divide an uint256 integer, rounding down the result and checking it for overflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/FullMath.sol
 * @param x Multiplicand
 * @param y Multiplier
 * @param z Divisor
 * @returns Quotient floor(x * y / z)
 */
function safeMulDivFloor(x, y, z) {
    if (!z) {
        throw new errors_js_1.MathError("division by zero");
    }
    const quotient = (x * y) / z;
    if (!(0, evm_js_1.isUint256)(quotient)) {
        throw new errors_js_1.MathError("quotient overflows uint256");
    }
    return quotient;
}
exports.safeMulDivFloor = safeMulDivFloor;
/**
 * Multiply and divide an uint256 integer, rounding up the result and checking it for overflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/FullMath.sol
 * @param x Multiplicand
 * @param y Multiplier
 * @param z Divisor
 * @returns Quotient ceil(x * y / z)
 */
function safeMulDivCeil(x, y, z) {
    if (!z) {
        throw new errors_js_1.MathError("division by zero");
    }
    const product = x * y;
    const quotient = product / z;
    if (!(0, evm_js_1.isUint256)(quotient)) {
        throw new errors_js_1.MathError("quotient overflows uint256");
    }
    return quotient + (product % z ? 1n : 0n);
}
exports.safeMulDivCeil = safeMulDivCeil;
/**
 * Divide an uint256 integer by another without checking for overflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/UnsafeMath.sol
 * @param x Divisible
 * @param y Divisor
 * @returns Quotient ceil(x / y)
 */
function unsafeDivCeil(x, y) {
    if (!y) {
        return 0n;
    }
    return x / y + (x % y ? 1n : 0n);
}
exports.unsafeDivCeil = unsafeDivCeil;
