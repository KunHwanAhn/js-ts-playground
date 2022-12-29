export * from './공배수공약수.js';
export * from './조합.js';

/**
 * 소수 여부 검사 로직
 *
 * @param {number} num
 */
export function isPrimeNumber(num) {
  // 제곱근 이상의 숫자에서는 나눠지는 수가 나올 수 없음.
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
