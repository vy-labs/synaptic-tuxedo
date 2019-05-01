import { rgba } from 'polished';
import colors from './colors';

const space = [
  0,
  4,
  8,
  12,
  16,
  20,
  24,
  28,
  32
];

const radii = [
  0,
  3,
  6,
  100
];

const breakpoints = [1280, 1440].map(elem => `${elem}px`);

const shadows = [
  'none',
  `0 0 1px 0 ${rgba(colors.shadow, 0.08)}, 0 1px 1px 0 ${rgba(colors.shadow, 0.1)}`,
  `0 0 1px 0 ${rgba(colors.shadow, 0.1)}, 0 2px 3px 0 ${rgba(colors.shadow, 0.12)}`,
  `0 0 1px 0 ${rgba(colors.shadow, 0.1)}, 0 8px 8px 0 ${rgba(colors.shadow, 0.12)}`,
  `0 0 1px 0 ${rgba(colors.shadow, 0.1)}, 0 16px 16px 0 ${rgba(colors.shadow, 0.16)}`,
  `0 0 1px 0 ${rgba(colors.shadow, 0.1)}, 0 26px 26px 0 ${rgba(colors.shadow, 0.16)}`
];

shadows.tabShadow = `-2px 0px 3px 0 ${rgba(colors.shadow, 0.12)}, 2px 0px 3px 0 ${rgba(colors.shadow, 0.12)}`;

const borders = [
  0, 1, 2
];

const baseSize = 8;
const sizes = Array.from(Array(32)).map((el, index) => baseSize * index);
// const widths = Array.from(Array(32)).map((el, index) => baseSize * index);
const minWidths = Array.from(Array(32)).map((el, index) => baseSize * index);
const maxWidths = Array.from(Array(32)).map((el, index) => baseSize * index);
const minHeights = Array.from(Array(32)).map((el, index) => baseSize * index);
const maxHeights = Array.from(Array(32)).map((el, index) => baseSize * index);
const heights = Array.from(Array(32)).map((el, index) => baseSize * index);

export default {
  space,
  sizes,
  // widths,
  minWidths,
  maxWidths,
  minHeights,
  maxHeights,
  heights,
  radii,
  shadows,
  borders,
  breakpoints
};
