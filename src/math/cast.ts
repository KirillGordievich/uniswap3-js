/**
 * Casting library functions used by Uniswap v3 contracts
 */

import { isInt128, isInt256, isUint160 } from "./evm.js";
import { MathError } from "../utils/errors.js";

/**
 * Check that a value fits an uint160 integer and return it
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/SafeCast.sol
 * @param x Integer
 * @returns Unmodified integer
 */
export function toUint160(x: bigint) {
  if (!isUint160(x)) {
    throw new MathError("result overflows or underflows uint160");
  }

  return x;
}

/**
 * Check that a value fits an int160 integer and return it
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/SafeCast.sol
 * @param x Integer
 * @returns Unmodified integer
 */
export function toInt128(x: bigint) {
  if (!isInt128(x)) {
    throw new MathError("result overflows or underflows int128");
  }

  return x;
}

/**
 * Check that a value fits an int256 integer and return it
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/SafeCast.sol
 * @param x Integer
 * @returns Unmodified integer
 */
export function toInt256(x: bigint) {
  if (!isInt256(x)) {
    throw new MathError("result overflows or underflows int256");
  }

  return x;
}
