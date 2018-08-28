/* @flow */
import React from 'react';
import { TableCell, TableRow } from '../../../../../library/Table';
import { type Columns } from '../../../../../library/Table/Table';
import { countRender } from '../../../../../library/utils/RenderCounter';

const generateColumns = (width: number, depth: number) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const wideLetters = alphabet.slice(0, width);
  const deepLetters = alphabet.slice(0, depth);
  return wideLetters.reduce((acc, wideLetter) => {
    deepLetters.forEach((deepLetter) => {
      const letters = wideLetter + deepLetter;
      acc.push({
        content: letters.toUpperCase(),
        key: letters
      });
    });

    return acc;
  }, []);
};

const generateRows = (count: number, columns: Columns) => {
  return [...Array(count).keys()].map((i) => {
    return columns.reduce((acc, column) => {
      acc[column.key] = column.key + i;
      acc.row = customRow;
      return acc;
    }, {});
  });
};

const customRow = ({ props }) => {
  countRender('CustomRow');
  return <TableRow {...props} />;
};

const customCell = ({ props }) => {
  countRender('CustomCell');
  return <TableCell {...props} />;
};

export const columns2 = generateColumns(1, 2);
export const rows2x2 = generateRows(2, columns2);
export const columns4 = generateColumns(1, 4);
export const columns104 = generateColumns(4, 26);
export const rows100x4 = generateRows(100, columns4);
export const rows100x104 = generateRows(100, columns104);
