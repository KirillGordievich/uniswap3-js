"use strict";
/**
 * Library errors
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathError = exports.Uniswap3JSError = void 0;
/**
 * Generic library error
 */
class Uniswap3JSError extends Error {
    name;
    code;
    constructor(message) {
        super(message);
        this.name = "Uniswap3JSError";
        this.code = "UNI3_JS_ERR";
    }
}
exports.Uniswap3JSError = Uniswap3JSError;
/**
 * Error in the arithmetic functions
 */
class MathError extends Uniswap3JSError {
    constructor(message) {
        super(message);
        this.name = "MathError";
        this.code = "UNI3_JS_ERR_MATH";
    }
}
exports.MathError = MathError;
