/**
 *
 * @param {number} num
 */
function check자연수(num) {
  if (num < 0) {
    throw new Error('입력 값이 자연수가 아닙니다');
  }
}

/**
 *
 * @param {number} num1
 * @param {number} num2
 */
function getBigSmall(num1, num2) {
  if (num1 > num2) {
    return [num1, num2];
  }

  return [num2, num1];
}

/**
 * 최대공약수를 가져오는 함수 - 유클리드 호제법
 * 2개의 자연수 a, b(a > b)에 대해서 a를 b로 나눈 나머지가 r일 때, a와 b의 최대공약수는 b와 r의 최대공약수와 같다.
 *
 * @param {number} num1
 * @param {number} num2
 */
export function getGcd(num1, num2) {
  check자연수(num1);
  check자연수(num2);

  const [big, small] = getBigSmall(num1, num2);

  if (small === 0) {
    return big;
  }

  return getGcd(small, big % small);
}

/**
 * 최소공배수를 가져오는 함수 - 유클리드 호제법
 * 두 수 a와 b의 최소공배수는 a와 b의 곱을 a와 b의 최대공약수를 나눈 것과 같다.
 *
 * @param {number} num1
 * @param {number} num2
 */
export function getLcm(num1, num2) {
  check자연수(num1);
  check자연수(num2);

  const [big, small] = getBigSmall(num1, num2);

  return (big * small) / getGcd(big, small);
}
