import React, { useContext, useEffect } from 'react';
import { useTransition } from 'react-spring';
import './styles.css';
import { VisualizerStateContext } from '../../Visualizer';
import {
  arrayCopy,
  isBucketSort,
  isCountingSort,
  isMergeSort,
  isRadixSort,
} from '../../util/GeneralUtil';
import CountingSortScreen from './CountingSortScreen';
import RadixSortScreen from './RadixSortScreen';
import BucketSortScreen from './BucketSortScreen';
import MergeSortScreen from './MergeSortScreen';
import GenericSortScreen from './GenericSortScreen';

const AnimationScreen = () => {
  const {
    isPlay,
    isReplay,
    arrayData,
    animationArr,
    idx,
    referenceArray,
    speed,
    setIdx,
    setReferenceArray,
    executeForwardAnimation,
    resetDataWhenAnimationFinish,
    dataSize,
    visualizerAlgorithm,
    isReset,
    setIsReset,
  } = useContext(VisualizerStateContext);
  const animationSpeedArray = [1000, 800, 600, 500, 400, 320, 260, 200, 160, 120];
  const length = referenceArray.length;
  let xDirection = 0;

  useEffect(() => {
    /**
     * This is for replay, or any changes to arrayData
     */
    if (isReset) {
      setReferenceArray(arrayCopy(arrayData));
      setIdx(0);
      setIsReset(false);
    }
  }, [arrayData, isReplay]);

  /**
   * This is the loop animation and ending of animation screen.
   * If block is to do the loop animation.
   * Else Block is to change the state into replay.
   */
  useEffect(() => {
    if (!isReplay && isPlay && idx < animationArr.length) {
      setTimeout(() => {
        executeForwardAnimation();
      }, animationSpeedArray[speed - 1]);
    } else if (!isReplay && isPlay) {
      resetDataWhenAnimationFinish(referenceArray);
    }
  }, [isPlay, idx]);

  const transitions = useTransition(
    referenceArray.map((data) => {
      if (isMergeSort(visualizerAlgorithm)) {
        return { ...data, x: parseInt(data.xDirection) };
      }
      return { ...data, x: (xDirection += 10) - 10 };
    }),
    (d) => d.id,
    {
      from: { height: 0, opacity: 1 },
      leave: { height: 0, opacity: 1 },
      enter: ({ x, height }) => ({ x, height, opacity: 1 }),
      update: ({ x, height }) => ({ x, height }),
    }
  );

  const dataItem = {
    transitions: transitions,
    dataSize: dataSize,
    length: length,
  };

  if (isCountingSort(visualizerAlgorithm)) {
    return <CountingSortScreen {...dataItem} />;
  } else if (isRadixSort(visualizerAlgorithm)) {
    return <RadixSortScreen />;
  } else if (isBucketSort(visualizerAlgorithm)) {
    return <BucketSortScreen />;
  } else if (isMergeSort(visualizerAlgorithm)) {
    return <MergeSortScreen {...dataItem} />;
  } else {
    return <GenericSortScreen {...dataItem} />;
  }
};

export default AnimationScreen;
