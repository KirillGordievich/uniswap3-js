"use strict";
/**
 * Functions operating of square roots of prices used by Uniswap v3 contracts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextSqrtPriceFromOutput = exports.getNextSqrtPriceFromInput = exports.getAmount1Delta = exports.getAmount0Delta = void 0;
const arithmetic_js_1 = require("./arithmetic.js");
const cast_js_1 = require("./cast.js");
const evm_js_1 = require("./evm.js");
const errors_js_1 = require("../utils/errors.js");
const FIXED_POINT_96_RESOLUTION = 96n;
const FIXED_POINT_96_Q96 = 0x1000000000000000000000000n;
/**
 * Calculate the amount of token 0 required to transition from one sqrt price to another at a certain liquidity level
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/SqrtPriceMath.sol
 * @param sqrtPriceA First sqrt price
 * @param sqrtPriceB Second sqrt price
 * @param liquidity Liquidity level
 * @param ceil True if the result should be rounded up and false otherwise
 * @returns Amount of token 0
 */
function getAmount0Delta(sqrtPriceA, sqrtPriceB, liquidity, ceil) {
    if (sqrtPriceA > sqrtPriceB) {
        [sqrtPriceA, sqrtPriceB] = [sqrtPriceB, sqrtPriceA];
    }
    if (!sqrtPriceA || !sqrtPriceB) {
        throw new errors_js_1.MathError("sqrt prices cannot be zero");
    }
    const numerator1 = liquidity << FIXED_POINT_96_RESOLUTION;
    const numerator2 = sqrtPriceB - sqrtPriceA;
    return ceil
        ? (0, arithmetic_js_1.unsafeDivCeil)((0, arithmetic_js_1.safeMulDivCeil)(numerator1, numerator2, sqrtPriceB), sqrtPriceA)
        : (0, arithmetic_js_1.safeMulDivFloor)(numerator1, numerator2, sqrtPriceB) / sqrtPriceA;
}
exports.getAmount0Delta = getAmount0Delta;
/**
 * Calculate the amount of token 1 required to transition from one sqrt price to another at a certain liquidity level
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/SqrtPriceMath.sol
 * @param sqrtPriceA First sqrt price
 * @param sqrtPriceB Second sqrt price
 * @param liquidity Liquidity level
 * @param ceil True if the result should be rounded up and false otherwise
 * @returns Amount of token 1
 */
function getAmount1Delta(sqrtPriceA, sqrtPriceB, liquidity, ceil) {
    if (sqrtPriceA > sqrtPriceB) {
        [sqrtPriceA, sqrtPriceB] = [sqrtPriceB, sqrtPriceA];
    }
    return ceil
        ? (0, arithmetic_js_1.safeMulDivCeil)(liquidity, sqrtPriceB - sqrtPriceA, FIXED_POINT_96_Q96)
        : (0, arithmetic_js_1.safeMulDivFloor)(liquidity, sqrtPriceB - sqrtPriceA, FIXED_POINT_96_Q96);
}
exports.getAmount1Delta = getAmount1Delta;
/**
 * Calculate the resulting sqrt price, given the input swap parameters
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/SqrtPriceMath.sol
 * @param sqrtPrice Current sqrt price
 * @param liquidity Liquidity level
 * @param amount Sold amount
 * @param zeroForOne True if token 0 is sold for token 1 and false otherwise
 * @returns Resulting sqrt price
 */
function getNextSqrtPriceFromInput(sqrtPrice, liquidity, amount, zeroForOne) {
    if (sqrtPrice <= 0n) {
        throw new errors_js_1.MathError("sqrt price must be positive");
    }
    if (liquidity <= 0n) {
        throw new errors_js_1.MathError("liquidity must be positive");
    }
    if (zeroForOne) {
        if (amount === 0n) {
            return sqrtPrice;
        }
        const numerator1 = liquidity << FIXED_POINT_96_RESOLUTION;
        const product = (0, evm_js_1.uint256)(amount * sqrtPrice);
        if (product / amount == sqrtPrice) {
            const denominator = (0, evm_js_1.uint256)(numerator1 + product);
            if (denominator >= numerator1) {
                return (0, evm_js_1.uint160)((0, arithmetic_js_1.safeMulDivCeil)(numerator1, sqrtPrice, denominator));
            }
        }
        return (0, evm_js_1.uint160)((0, arithmetic_js_1.unsafeDivCeil)(numerator1, (0, arithmetic_js_1.safeAdd)(numerator1 / sqrtPrice, amount)));
    }
    else {
        const quotient = (0, evm_js_1.uint256)((0, evm_js_1.isUint160)(amount)
            ? (amount << FIXED_POINT_96_RESOLUTION) / liquidity
            : (0, arithmetic_js_1.safeMulDivFloor)(amount, FIXED_POINT_96_Q96, liquidity));
        return (0, cast_js_1.toUint160)((0, arithmetic_js_1.safeAdd)(sqrtPrice, quotient));
    }
}
exports.getNextSqrtPriceFromInput = getNextSqrtPriceFromInput;
/**
 * Calculate the resulting sqrt price, given the output swap parameters
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/SqrtPriceMath.sol
 * @param sqrtPrice Current sqrt price
 * @param liquidity Liquidity level
 * @param amount Purchased amount
 * @param zeroForOne True if token 0 is sold for token 1 and false otherwise
 * @returns Resulting sqrt price
 */
function getNextSqrtPriceFromOutput(sqrtPrice, liquidity, amount, zeroForOne) {
    if (sqrtPrice <= 0n) {
        throw new errors_js_1.MathError("sqrt price must be positive");
    }
    if (liquidity <= 0n) {
        throw new errors_js_1.MathError("liquidity must be positive");
    }
    if (zeroForOne) {
        const quotient = (0, evm_js_1.uint256)((0, evm_js_1.isUint160)(amount)
            ? (0, arithmetic_js_1.unsafeDivCeil)(amount << FIXED_POINT_96_RESOLUTION, liquidity)
            : (0, arithmetic_js_1.safeMulDivCeil)(amount, FIXED_POINT_96_Q96, liquidity));
        if (sqrtPrice <= quotient) {
            throw new errors_js_1.MathError("quotient exceeds sqrt price");
        }
        return (0, evm_js_1.uint160)(sqrtPrice - quotient);
    }
    else {
        if (amount === 0n) {
            return sqrtPrice;
        }
        const numerator1 = liquidity << FIXED_POINT_96_RESOLUTION;
        const product = (0, evm_js_1.uint256)(amount * sqrtPrice);
        if (product / amount !== sqrtPrice || numerator1 <= product) {
            throw new errors_js_1.MathError("product overflows uint256");
        }
        const denominator = numerator1 - product;
        return (0, cast_js_1.toUint160)((0, arithmetic_js_1.safeMulDivCeil)(numerator1, sqrtPrice, denominator));
    }
}
exports.getNextSqrtPriceFromOutput = getNextSqrtPriceFromOutput;
