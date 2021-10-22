import { PreparedMarks } from './types';

const COST = 120;
const FIVE_RATIO = 2.0;
const FOUR_RATIO = 1.75;
const THREE_RATIO = 1.25;
const TWO_RATIO = 0.25;

export const rule = (marks: PreparedMarks) => {
  const sum = marks[5] * COST;

  if (marks[2] !== 0) return TWO_RATIO * sum;
  if (marks[3] !== 0) return THREE_RATIO * sum;
  if (marks[4] !== 0) return FOUR_RATIO * sum;
  if (marks[5] !== 0) return FIVE_RATIO * sum;
};
