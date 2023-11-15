/**
 * Functions for conversions between sqrt prices and ticks
 */

import { uint160, UINT256_MAX } from "./evm.js";
import { MathError } from "../utils/errors.js";

export const TICK_MIN = -887272;
export const TICK_MAX = 887272;
export const SQRT_RATIO_MIN = 4295128739n;
export const SQRT_RATIO_MAX =
  1461446703485210103287273052203988822378723970342n;

/**
 * Calculate a sqrt price corresponding to the tick
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/TickMath.sol
 * @param tick Tick
 * @returns Sqrt price
 */
export function getSqrtPriceAtTick(tick: number) {
  if (tick < TICK_MIN || tick > TICK_MAX) {
    throw new MathError("tick is outside the range");
  }

  const absTick = tick < 0 ? -BigInt(tick) : BigInt(tick);

  let ratio =
    absTick & 0x1n
      ? 0xfffcb933bd6fad37aa2d162d1a594001n
      : 0x100000000000000000000000000000000n;

  if (absTick & 0x2n) {
    ratio = (ratio * 0xfff97272373d413259a46990580e213an) >> 128n;
  }

  if (absTick & 0x4n) {
    ratio = (ratio * 0xfff2e50f5f656932ef12357cf3c7fdccn) >> 128n;
  }

  if (absTick & 0x8n) {
    ratio = (ratio * 0xffe5caca7e10e4e61c3624eaa0941cd0n) >> 128n;
  }

  if (absTick & 0x10n) {
    ratio = (ratio * 0xffcb9843d60f6159c9db58835c926644n) >> 128n;
  }

  if (absTick & 0x20n) {
    ratio = (ratio * 0xff973b41fa98c081472e6896dfb254c0n) >> 128n;
  }

  if (absTick & 0x40n) {
    ratio = (ratio * 0xff2ea16466c96a3843ec78b326b52861n) >> 128n;
  }

  if (absTick & 0x80n) {
    ratio = (ratio * 0xfe5dee046a99a2a811c461f1969c3053n) >> 128n;
  }

  if (absTick & 0x100n) {
    ratio = (ratio * 0xfcbe86c7900a88aedcffc83b479aa3a4n) >> 128n;
  }

  if (absTick & 0x200n) {
    ratio = (ratio * 0xf987a7253ac413176f2b074cf7815e54n) >> 128n;
  }

  if (absTick & 0x400n) {
    ratio = (ratio * 0xf3392b0822b70005940c7a398e4b70f3n) >> 128n;
  }

  if (absTick & 0x800n) {
    ratio = (ratio * 0xe7159475a2c29b7443b29c7fa6e889d9n) >> 128n;
  }

  if (absTick & 0x1000n) {
    ratio = (ratio * 0xd097f3bdfd2022b8845ad8f792aa5825n) >> 128n;
  }

  if (absTick & 0x2000n) {
    ratio = (ratio * 0xa9f746462d870fdf8a65dc1f90e061e5n) >> 128n;
  }

  if (absTick & 0x4000n) {
    ratio = (ratio * 0x70d869a156d2a1b890bb3df62baf32f7n) >> 128n;
  }

  if (absTick & 0x8000n) {
    ratio = (ratio * 0x31be135f97d08fd981231505542fcfa6n) >> 128n;
  }

  if (absTick & 0x10000n) {
    ratio = (ratio * 0x9aa508b5b7a84e1c677de54f3e99bc9n) >> 128n;
  }

  if (absTick & 0x20000n) {
    ratio = (ratio * 0x5d6af8dedb81196699c329225ee604n) >> 128n;
  }

  if (absTick & 0x40000n) {
    ratio = (ratio * 0x2216e584f5fa1ea926041bedfe98n) >> 128n;
  }

  if (absTick & 0x80000n) {
    ratio = (ratio * 0x48a170391f7dc42444e8fa2n) >> 128n;
  }

  if (tick > 0) {
    ratio = UINT256_MAX / ratio;
  }

  return uint160((ratio >> 32n) + (ratio % (1n << 32n) === 0n ? 0n : 1n));
}

/**
 * Calculate a tick corresponding to a sqrt price
 *
 * @see https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/TickMath.sol
 * @param sqrtPrice Sqrt price
 * @returns Tick
 */
export function getTickAtSqrtPrice(sqrtPrice: bigint) {
  if (sqrtPrice < SQRT_RATIO_MIN || sqrtPrice >= SQRT_RATIO_MAX) {
    throw new MathError("sqrt ratio is outside the range");
  }

  const ratio = sqrtPrice << 32n;

  let r = ratio;
  let msb = 0n;

  let f = (r > 0xffffffffffffffffffffffffffffffffn ? 1n : 0n) << 7n;
  msb |= f;
  r >>= f;

  f = (r > 0xffffffffffffffffn ? 1n : 0n) << 6n;
  msb |= f;
  r >>= f;

  f = (r > 0xffffffffn ? 1n : 0n) << 5n;
  msb |= f;
  r >>= f;

  f = (r > 0xffffn ? 1n : 0n) << 4n;
  msb |= f;
  r >>= f;

  f = (r > 0xffn ? 1n : 0n) << 3n;
  msb |= f;
  r >>= f;

  f = (r > 0xfn ? 1n : 0n) << 2n;
  msb |= f;
  r >>= f;

  f = (r > 0x3n ? 1n : 0n) << 1n;
  msb |= f;
  r >>= f;

  f = r > 0x1n ? 1n : 0n;
  msb |= f;
  r = msb >= 128n ? ratio >> (msb - 127n) : ratio << (127n - msb);

  let log2 = (msb - 128n) << 64n;

  r = (r * r) >> 127n;
  f = r >> 128n;
  log2 |= f << 63n;
  r >>= f;

  r = (r * r) >> 127n;
  f = r >> 128n;
  log2 |= f << 62n;
  r >>= f;

  r = (r * r) >> 127n;
  f = r >> 128n;
  log2 |= f << 61n;
  r >>= f;

  r = (r * r) >> 127n;
  f = r >> 128n;
  log2 |= f << 60n;
  r >>= f;

  r = (r * r) >> 127n;
  f = r >> 128n;
  log2 |= f << 59n;
  r >>= f;

  r = (r * r) >> 127n;
  f = r >> 128n;
  log2 |= f << 58n;
  r >>= f;

  r = (r * r) >> 127n;
  f = r >> 128n;
  log2 |= f << 57n;
  r >>= f;

  r = (r * r) >> 127n;
  f = r >> 128n;
  log2 |= f << 56n;
  r >>= f;

  r = (r * r) >> 127n;
  f = r >> 128n;
  log2 |= f << 55n;
  r >>= f;

  r = (r * r) >> 127n;
  f = r >> 128n;
  log2 |= f << 54n;
  r >>= f;

  r = (r * r) >> 127n;
  f = r >> 128n;
  log2 |= f << 53n;
  r >>= f;

  r = (r * r) >> 127n;
  f = r >> 128n;
  log2 |= f << 52n;
  r >>= f;

  r = (r * r) >> 127n;
  f = r >> 128n;
  log2 |= f << 51n;
  r >>= f;

  r = (r * r) >> 127n;
  f = r >> 128n;
  log2 |= f << 50n;

  const logSqrt10001 = log2 * 255738958999603826347141n;

  const tickLo =
    (logSqrt10001 - 3402992956809132418596140100660247210n) >> 128n;
  const tickHi =
    (logSqrt10001 + 291339464771989622907027621153398088495n) >> 128n;

  const tick =
    tickLo === tickHi || getSqrtPriceAtTick(Number(tickHi)) > sqrtPrice
      ? tickLo
      : tickHi;

  return Number(tick);
}
