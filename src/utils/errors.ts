/**
 * Library errors
 */

/**
 * Generic library error
 */
export class Uniswap3JSError extends Error {
  public name: string;
  public code: string;

  constructor(message: string) {
    super(message);

    this.name = "Uniswap3JSError";
    this.code = "UNI3_JS_ERR";
  }
}

/**
 * Error in the arithmetic functions
 */
export class MathError extends Uniswap3JSError {
  constructor(message: string) {
    super(message);

    this.name = "MathError";
    this.code = "UNI3_JS_ERR_MATH";
  }
}
