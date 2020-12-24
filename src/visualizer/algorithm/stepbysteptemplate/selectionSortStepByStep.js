export const selectionSortStepByStep = (animationArr, idx, referenceArray) => {
  if (idx === animationArr.length) {
    return 'Array is sorted';
  }
  let animationArrSwapIdx = animationArr[idx - 1];
  let firstIdx = animationArrSwapIdx[0];
  let secondIdx = animationArrSwapIdx[1];
  let isSwap = animationArrSwapIdx[2];
  let firstIdxVal = referenceArray[firstIdx].height;
  let secondIdxVal = referenceArray[secondIdx].height;
  let isSmaller = secondIdxVal < firstIdxVal;

  if (isSwap) {
    if (firstIdxVal === secondIdxVal) {
      return `Since the smallest value is still ${firstIdxVal}. There is no change in position`;
    }
    return `The smallest value so far is ${secondIdxVal}. We swap it to index ${secondIdx}`;
  }

  // Comparisons
  let message = `Check if ${secondIdxVal} is smaller than the smallest value so far: ${firstIdxVal}\n`;
  if (isSmaller) {
    message += `Since ${secondIdxVal} is smaller than ${firstIdxVal}, smallest value is set to ${secondIdxVal}`;
  } else {
    message += `Since ${secondIdxVal} is not smaller than ${firstIdxVal}, no change to smallest value`;
  }
  return message;
};
