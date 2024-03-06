"use strict";
/**
 * Functions used to calculate swap step results
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeSwapStepSell = exports.computeSwapStepBuy = void 0;
const arithmetic_js_1 = require("./arithmetic.js");
const sqrt_price_js_1 = require("./sqrt-price.js");
/**
 * Calculate results of a swap step, given the input parameters
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/SwapMath.sol
 * @param sqrtPriceCurrent Current sqrt price
 * @param sqrtPriceTarget Target sqrt price
 * @param liquidity Liquidity level
 * @param quantitySellRemaining Remaining sold quantity
 * @param fee Pool fee in pips
 * @returns Swap step results
 */
function computeSwapStepBuy(sqrtPriceCurrent, sqrtPriceTarget, liquidity, quantitySellRemaining, fee) {
    const zeroForOne = sqrtPriceCurrent >= sqrtPriceTarget;
    let sqrtPrice;
    let quantitySell;
    let quantityBuy;
    const quantitySellRemainingWithFee = (0, arithmetic_js_1.safeMulDivFloor)(quantitySellRemaining, 1000000n - fee, 1000000n);
    quantitySell = zeroForOne
        ? (0, sqrt_price_js_1.getAmount0Delta)(sqrtPriceTarget, sqrtPriceCurrent, liquidity, true)
        : (0, sqrt_price_js_1.getAmount1Delta)(sqrtPriceCurrent, sqrtPriceTarget, liquidity, true);
    let max;
    if (quantitySellRemainingWithFee >= quantitySell) {
        sqrtPrice = sqrtPriceTarget;
        max = true;
    }
    else {
        sqrtPrice = (0, sqrt_price_js_1.getNextSqrtPriceFromInput)(sqrtPriceCurrent, liquidity, quantitySellRemainingWithFee, zeroForOne);
        max = false;
    }
    if (zeroForOne) {
        quantitySell = max
            ? quantitySell
            : (0, sqrt_price_js_1.getAmount0Delta)(sqrtPrice, sqrtPriceCurrent, liquidity, true);
        quantityBuy = (0, sqrt_price_js_1.getAmount1Delta)(sqrtPrice, sqrtPriceCurrent, liquidity, false);
    }
    else {
        quantitySell = max
            ? quantitySell
            : (0, sqrt_price_js_1.getAmount1Delta)(sqrtPriceCurrent, sqrtPrice, liquidity, true);
        quantityBuy = (0, sqrt_price_js_1.getAmount0Delta)(sqrtPriceCurrent, sqrtPrice, liquidity, false);
    }
    const quantityFee = max
        ? (0, arithmetic_js_1.safeMulDivCeil)(quantitySell, fee, 1000000n - fee)
        : quantitySellRemaining - quantitySell;
    return {
        sqrtPrice,
        quantitySell,
        quantityBuy,
        quantityFee,
    };
}
exports.computeSwapStepBuy = computeSwapStepBuy;
/**
 * Calculate results of a swap step, given the output parameters
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/SwapMath.sol
 * @param sqrtPriceCurrent Current sqrt price
 * @param sqrtPriceTarget Target sqrt price
 * @param liquidity Liquidity level
 * @param quantityBuyRemaining Remaining purchased quantity
 * @param fee Pool fee in pips
 * @returns Swap step results
 */
function computeSwapStepSell(sqrtPriceCurrent, sqrtPriceTarget, liquidity, quantityBuyRemaining, fee) {
    const zeroForOne = sqrtPriceCurrent >= sqrtPriceTarget;
    let sqrtPrice;
    let quantitySell;
    let quantityBuy;
    quantityBuy = zeroForOne
        ? (0, sqrt_price_js_1.getAmount1Delta)(sqrtPriceTarget, sqrtPriceCurrent, liquidity, false)
        : (0, sqrt_price_js_1.getAmount0Delta)(sqrtPriceCurrent, sqrtPriceTarget, liquidity, false);
    let max;
    if (quantityBuyRemaining >= quantityBuy) {
        sqrtPrice = sqrtPriceTarget;
        max = true;
    }
    else {
        sqrtPrice = (0, sqrt_price_js_1.getNextSqrtPriceFromOutput)(sqrtPriceCurrent, liquidity, quantityBuyRemaining, zeroForOne);
        max = false;
    }
    if (zeroForOne) {
        quantitySell = (0, sqrt_price_js_1.getAmount0Delta)(sqrtPrice, sqrtPriceCurrent, liquidity, true);
        quantityBuy = max
            ? quantityBuy
            : (0, sqrt_price_js_1.getAmount1Delta)(sqrtPrice, sqrtPriceCurrent, liquidity, false);
    }
    else {
        quantitySell = (0, sqrt_price_js_1.getAmount1Delta)(sqrtPriceCurrent, sqrtPrice, liquidity, true);
        quantityBuy = max
            ? quantityBuy
            : (0, sqrt_price_js_1.getAmount0Delta)(sqrtPriceCurrent, sqrtPrice, liquidity, false);
    }
    quantityBuy =
        quantityBuy > quantityBuyRemaining ? quantityBuyRemaining : quantityBuy;
    const quantityFee = (0, arithmetic_js_1.safeMulDivCeil)(quantitySell, fee, 1000000n - fee);
    return {
        sqrtPrice,
        quantitySell,
        quantityBuy,
        quantityFee,
    };
}
exports.computeSwapStepSell = computeSwapStepSell;
