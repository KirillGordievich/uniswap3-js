/**
 * Liquidity library functions used by Uniswap v3 contracts
 */

import { isUint128 } from "./evm.js";
import { MathError } from "../utils/errors.js";

/**
 * Add liquidity delta and check the result for overflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/LiquidityMath.sol
 * @param x Liquidity
 * @param y Liquidity delta
 * @returns Sum
 */
export function addDelta(x: bigint, y: bigint) {
  const sum = x + y;

  if (!isUint128(sum)) {
    throw new MathError("sum overflows uint128");
  }

  return sum;
}
