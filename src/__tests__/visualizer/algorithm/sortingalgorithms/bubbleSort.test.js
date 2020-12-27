import bubbleSort from '../../../../visualizer/algorithm/sortingalgorithms/bubbleSort';
import { assertSortSuccess } from '../../../../_testutil/TestUtil';
import {
  ARRAY_DUPLICATES,
  ARRAY_EXPECTED_RANDOM_MIXED,
  ARRAY_EXPECTED_RANDOM_NEGATIVE,
  ARRAY_EXPECTED_RANDOM_POSITIVE,
  ARRAY_EXPECTED_STRICTLY_DESCENDING,
  ARRAY_RANDOM_MIXED,
  ARRAY_RANDOM_NEGATIVE,
  ARRAY_RANDOM_POSITIVE,
  ARRAY_STRICTLY_ASCENDING,
  ARRAY_STRICTLY_DESCENDING,
  EMPTY_ARRAY,
} from '../../../../_testutil/ArraysUtil';

test('Empty Array', () => {
  assertBubbleSortSuccess(EMPTY_ARRAY, EMPTY_ARRAY, EMPTY_ARRAY);
});

test('Already Sorted with duplicates', () => {
  const expected = [
    [1, 0, false],
    [2, 1, false],
    [3, 2, false],
  ];

  assertBubbleSortSuccess(ARRAY_DUPLICATES, ARRAY_DUPLICATES, expected);
});

test('Already Sorted ascending', () => {
  const expected = [
    [1, 0, false],
    [2, 1, false],
    [3, 2, false],
  ];

  assertBubbleSortSuccess(ARRAY_STRICTLY_ASCENDING, ARRAY_STRICTLY_ASCENDING, expected);
});

test('Descending array', () => {
  const expected = [
    [1, 0, false],
    [1, 0, true],
    [2, 1, false],
    [2, 1, true],
    [3, 2, false],
    [3, 2, true],
    [1, 0, false],
    [1, 0, true],
    [2, 1, false],
    [2, 1, true],
    [1, 0, false],
    [1, 0, true],
  ];

  assertBubbleSortSuccess(ARRAY_STRICTLY_DESCENDING, ARRAY_EXPECTED_STRICTLY_DESCENDING, expected);
});

test('random array positive numbers', () => {
  const expected = [
    [1, 0, false],
    [2, 1, false],
    [2, 1, true],
    [3, 2, false],
    [3, 2, true],
    [1, 0, false],
    [2, 1, false],
  ];

  assertBubbleSortSuccess(ARRAY_RANDOM_POSITIVE, ARRAY_EXPECTED_RANDOM_POSITIVE, expected);
});

test('random array negative numbers', () => {
  const expected = [
    [1, 0, false],
    [1, 0, true],
    [2, 1, false],
    [2, 1, true],
    [3, 2, false],
    [3, 2, true],
    [1, 0, false],
    [2, 1, false],
    [2, 1, true],
    [1, 0, false],
  ];

  assertBubbleSortSuccess(ARRAY_RANDOM_NEGATIVE, ARRAY_EXPECTED_RANDOM_NEGATIVE, expected);
});

test('random array negative and positive numbers', () => {
  const expected = [
    [1, 0, false],
    [2, 1, false],
    [2, 1, true],
    [3, 2, false],
    [3, 2, true],
    [1, 0, false],
    [2, 1, false],
    [2, 1, true],
    [1, 0, false],
    [1, 0, true],
  ];

  assertBubbleSortSuccess(ARRAY_RANDOM_MIXED, ARRAY_EXPECTED_RANDOM_MIXED, expected);
});

const assertBubbleSortSuccess = (initialArray, sortedArray, expected) =>
  assertSortSuccess(initialArray, sortedArray, expected, bubbleSort);
