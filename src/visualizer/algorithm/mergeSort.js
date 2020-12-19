// Code adapted from https://www.geeksforgeeks.org/merge-sort/

const merge = (receivedArr, start, mid, end, animationArr) => {
  const n1 = mid - start + 1;
  const n2 = end - mid;
  let leftArray = [];
  let rightArray = [];
  for (let i = 0; i < n1; i++) {
    leftArray.push(receivedArr[start + i]);
    animationArr.push([start + i, -1, true, -1, false]);
  }
  for (let j = 0; j < n2; j++) {
    rightArray.push(receivedArr[mid + 1 + j]);
    animationArr.push([-1, mid + 1 + j, true, -1, false]);
  }
  let i = 0,
    j = 0,
    k = start;
  while (i < n1 && j < n2) {
    if (leftArray[i].height <= rightArray[j].height) {
      animationArr.push([start + i, -1, false, k, false]);
      receivedArr[k++] = leftArray[i++];
    } else {
      animationArr.push([-1, mid + 1 + j, false, k, false]);
      receivedArr[k++] = rightArray[j++];
    }
  }

  while (i < n1) {
    if (i + 1 === n1) {
      animationArr.push([start + i, -1, false, k, true]);
    } else {
      animationArr.push([start + i, -1, false, k, false]);
    }
    receivedArr[k++] = leftArray[i++];
  }

  while (j < n2) {
    if (j + 1 === n2) {
      animationArr.push([-1, mid + 1 + j, false, k, true]);
    } else {
      animationArr.push([-1, mid + 1 + j, false, k, false]);
    }
    receivedArr[k++] = rightArray[j++];
  }
};

const mergeSortHelper = (receivedArr, animationArr, start, end) => {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    mergeSortHelper(receivedArr, animationArr, start, mid);
    mergeSortHelper(receivedArr, animationArr, mid + 1, end);
    merge(receivedArr, start, mid, end, animationArr);
  }
};

const mergeSort = (arr) => {
  let receivedArr = arr;
  let animationArr = [];
  mergeSortHelper(receivedArr, animationArr, 0, arr.length - 1);
  return animationArr;
};

export default mergeSort;
