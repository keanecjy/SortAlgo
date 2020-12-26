import { spreadNumber } from './HighlightUtil';
import React from 'react';
import './styles.css';

/**
 * Single oval to represent an item in the data array.
 *
 * @param {Object} item Element in the data array.
 * @returns {JSX.Element} Single oval containing the item.
 */
const Oval = ({ item }) => (
  <div
    className="oval"
    style={{
      visibility: item.isShown ? `visible` : `hidden`,
    }}
  >
    <div className="decimal">{spreadNumber(item.height)}</div>
  </div>
);

export default Oval;