/**
 * 순열을 구하는 함수
 *
 * @param {any[]} arr 순열 대상 목록
 * @param {number} length 순열 길이
 * @param {any[]} fixed 임시 순열
 * @param {any[]} result 순열 저장 목록
 * @returns
 */
export function getPermutations(arr, length = undefined, fixed = [], result = []) {
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i += 1) {
      const nextFixed = [...fixed, arr[i]];
      const nextArr = arr.slice();
      nextArr.splice(i, 1);

      if (length) {
        if (nextFixed.length === length) {
          result.push(nextFixed);
        }
      } else {
        result.push(nextFixed);
      }

      getPermutations(nextArr, length, nextFixed, result);
    }
  }

  return result;
}

/**
 * 조합을 구하는 함수
 *
 * @param {any[]} arr 조합 대상 목록
 * @param {number} length 조합 길이
 * @returns
 */
export function getCombinations(arr, length = arr.length) {
  if (length === 1) {
    return arr.map((value) => [value]);
  }

  const results = [];
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);

    const combinations = getCombinations(rest, length - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
}
