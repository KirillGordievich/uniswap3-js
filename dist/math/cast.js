"use strict";
/**
 * Casting library functions used by Uniswap v3 contracts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toInt256 = exports.toInt128 = exports.toUint160 = void 0;
const evm_js_1 = require("./evm.js");
const errors_js_1 = require("../utils/errors.js");
/**
 * Check that a value fits an uint160 integer and return it
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/SafeCast.sol
 * @param x Integer
 * @returns Unmodified integer
 */
function toUint160(x) {
    if (!(0, evm_js_1.isUint160)(x)) {
        throw new errors_js_1.MathError("result overflows or underflows uint160");
    }
    return x;
}
exports.toUint160 = toUint160;
/**
 * Check that a value fits an int160 integer and return it
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/SafeCast.sol
 * @param x Integer
 * @returns Unmodified integer
 */
function toInt128(x) {
    if (!(0, evm_js_1.isInt128)(x)) {
        throw new errors_js_1.MathError("result overflows or underflows int128");
    }
    return x;
}
exports.toInt128 = toInt128;
/**
 * Check that a value fits an int256 integer and return it
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/SafeCast.sol
 * @param x Integer
 * @returns Unmodified integer
 */
function toInt256(x) {
    if (!(0, evm_js_1.isInt256)(x)) {
        throw new errors_js_1.MathError("result overflows or underflows int256");
    }
    return x;
}
exports.toInt256 = toInt256;
