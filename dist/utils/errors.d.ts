/**
 * Library errors
 */
/**
 * Generic library error
 */
export declare class Uniswap3JSError extends Error {
    name: string;
    code: string;
    constructor(message: string);
}
/**
 * Error in the arithmetic functions
 */
export declare class MathError extends Uniswap3JSError {
    constructor(message: string);
}
