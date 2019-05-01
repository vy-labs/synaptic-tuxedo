const fontSizes = [
  9,
  11,
  13,
  15,
  18,
  24
];

const fonts = {
  0: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui",
  roboto: "Roboto, 'Helvetica Neue', sans-serif",
  mono: 'Roboto Mono, monospace',
  icons: 'icomoon'
};

const fontWeights = {
  normal: 400,
  semibold: 500,
  bold: 600
};

const iconSizes = [
  8,
  12,
  16
];

const textStyles = {
  caps: {
    textTransform: 'uppercase'
  },
  ellipsis: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  wrapped: {
    wordWrap: 'break-word',
    wordBreak: 'break-all'
  },
  pointer: {
    cursor: 'pointer'
  },
  nowrap: {
    whiteSpace: 'nowrap'
  }
};

const cursors = {
  default: 'default',
  initial: 'initial',
  pointer: 'pointer',
  'not-allowed': 'not-allowed'
};

const lineHeights = [0, 1, 1.15, 1.3];

export default {
  fontSizes,
  fontWeights,
  iconSizes,
  fonts,
  lineHeights,
  textStyles,
  cursors
};
