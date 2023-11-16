/**
 * Functions operating of square roots of prices used by Uniswap v3 contracts
 */
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
export declare function getAmount0Delta(sqrtPriceA: bigint, sqrtPriceB: bigint, liquidity: bigint, ceil: boolean): bigint;
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
export declare function getAmount1Delta(sqrtPriceA: bigint, sqrtPriceB: bigint, liquidity: bigint, ceil: boolean): bigint;
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
export declare function getNextSqrtPriceFromInput(sqrtPrice: bigint, liquidity: bigint, amount: bigint, zeroForOne: boolean): bigint;
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
export declare function getNextSqrtPriceFromOutput(sqrtPrice: bigint, liquidity: bigint, amount: bigint, zeroForOne: boolean): bigint;
