"use strict";
/**
 * Liquidity library functions used by Uniswap v3 contracts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDelta = void 0;
const evm_js_1 = require("./evm.js");
const errors_js_1 = require("../utils/errors.js");
/**
 * Add liquidity delta and check the result for overflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/LiquidityMath.sol
 * @param x Liquidity
 * @param y Liquidity delta
 * @returns Sum
 */
function addDelta(x, y) {
    const sum = x + y;
    if (!(0, evm_js_1.isUint128)(sum)) {
        throw new errors_js_1.MathError("sum overflows uint128");
    }
    return sum;
}
exports.addDelta = addDelta;
