/**
 * Arithmetic functions used by Uniswap v3 contracts
 */

import { isUint256 } from "./evm.js";
import { MathError } from "../utils/errors.js";

/**
 * Add two uint256 integers and check for overflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/LowGasSafeMath.sol
 * @param x Addend
 * @param y Addend
 * @returns Sum x + y
 */
export function safeAdd(x: bigint, y: bigint) {
  const sum = x + y;

  if (!isUint256(sum)) {
    throw new MathError("sum overflows uint256");
  }

  return sum;
}

/**
 * Subtract one uint256 integer from another and check for underflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/LowGasSafeMath.sol
 * @param x Minuend
 * @param y Subtrahend
 * @returns Difference x - y
 */
export function safeSub(x: bigint, y: bigint) {
  const difference = x - y;

  if (!isUint256(difference)) {
    throw new MathError("difference underflows uint256");
  }

  return difference;
}

/**
 * Multiply two uint256 integers and check for overflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/LowGasSafeMath.sol
 * @param x Multiplicand
 * @param y Multiplier
 * @returns Product x * y
 */
export function safeMul(x: bigint, y: bigint) {
  const product = x * y;

  if (!isUint256(product)) {
    throw new MathError("product overflows uint256");
  }

  return product;
}

/**
 * Multiply and divide an uint256 integer, rounding down the result and checking it for overflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/FullMath.sol
 * @param x Multiplicand
 * @param y Multiplier
 * @param z Divisor
 * @returns Quotient floor(x * y / z)
 */
export function safeMulDivFloor(x: bigint, y: bigint, z: bigint) {
  if (!z) {
    throw new MathError("division by zero");
  }

  const quotient = (x * y) / z;

  if (!isUint256(quotient)) {
    throw new MathError("quotient overflows uint256");
  }

  return quotient;
}

/**
 * Multiply and divide an uint256 integer, rounding up the result and checking it for overflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/FullMath.sol
 * @param x Multiplicand
 * @param y Multiplier
 * @param z Divisor
 * @returns Quotient ceil(x * y / z)
 */
export function safeMulDivCeil(x: bigint, y: bigint, z: bigint) {
  if (!z) {
    throw new MathError("division by zero");
  }

  const product = x * y;
  const quotient = product / z;

  if (!isUint256(quotient)) {
    throw new MathError("quotient overflows uint256");
  }

  return quotient + (product % z ? 1n : 0n);
}

/**
 * Divide an uint256 integer by another without checking for overflow
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/UnsafeMath.sol
 * @param x Divisible
 * @param y Divisor
 * @returns Quotient ceil(x / y)
 */
export function unsafeDivCeil(x: bigint, y: bigint) {
  if (!y) {
    return 0n;
  }

  return x / y + (x % y ? 1n : 0n);
}
