import { rgba } from 'polished';

const _colorPalette = {
  black: {
    0: '#707B8D',
    1: '#616D81',
    2: '#525F75',
    3: '#47556C',
    4: '#3D4B64',
    5: '#293954',
    6: '#1F304C',
    7: '#0F213F',
    8: '#001333'
  },
  grey: {
    0: '#FCFCFD',
    1: '#F9FAFB',
    2: '#F0F1F3',
    3: '#E0E2E6',
    4: '#C9CDD4',
    5: '#B3B9C2',
    6: '#A3AAB5',
    7: '#8F97A5',
    8: '#858E9D'
  },
  blue: {
    0: '#F3F9FF',
    1: '#EDF5FF',
    2: '#CFE6FF',
    3: '#9BCBFF',
    4: '#63AEFF',
    5: '#2C91FF',
    6: '#0071EC',
    7: '#0064D0',
    8: '#0050A7'
  },
  green: {
    0: '#E9FDF4',
    1: '#CBF8E4',
    2: '#A4F1CF',
    3: '#72DEAE',
    4: '#56D19B',
    5: '#39CB8A',
    6: '#1AB16D',
    7: '#00874B',
    8: '#005D33'
  },
  red: {
    0: '#FFF6F6',
    1: '#FDE2E2',
    2: '#FBC1C1',
    3: '#F79595',
    4: '#E97272',
    5: '#D85151',
    6: '#C83838',
    7: '#B71F1F',
    8: '#940303'
  },
  yellow: {
    0: '#FFFAF0',
    1: '#FFF3DE',
    2: '#FFE9C3',
    3: '#FFDDA2',
    4: '#FFD07E',
    5: '#FFC257',
    6: '#FFAD1F',
    7: '#E29000',
    8: '#B97600'
  },
  pink: {
    0: '#FEEEF5',
    1: '#FCDEEB',
    2: '#FFB5D5',
    3: '#F992C0',
    4: '#FA73B0',
    5: '#EE5599',
    6: '#D84084',
    7: '#C02068',
    8: '#A00C4E'
  },
  purple: {
    0: '#F6F4FF',
    1: '#EAE6FF',
    2: '#CDC4F8',
    3: '#B4A8F2',
    4: '#A292F2',
    5: '#8C7BE6',
    6: '#7865DC',
    7: '#5243AA',
    8: '#403294'
  },
  cyan: {
    0: '#F6FEFF',
    1: '#E6FCFF',
    2: '#AAF4FF',
    3: '#78E9FB',
    4: '#37CEE5',
    5: '#00B8D9',
    6: '#00A3BF',
    7: '#008DA6',
    8: '#007A90'
  },
  brown: {
    0: '#FFF9F7',
    1: '#F8EEEB',
    2: '#DBC6BF',
    3: '#C4A59B',
    4: '#A58276',
    5: '#83655A',
    6: '#664A40',
    7: '#4E342E',
    8: '#3E2723'
  },
  olive: {
    0: '#FFFEF5',
    1: '#FAF8E2',
    2: '#E9E4B9',
    3: '#DBD492',
    4: '#CEC471',
    5: '#B9AF53',
    6: '#A09536',
    7: '#7D721A',
    8: '#645A04'
  },
  saffron: {
    0: '#FDF3EF',
    1: '#FFEAE0',
    2: '#FBC4AA',
    3: '#F3A27D',
    4: '#EE8250',
    5: '#DA622A',
    6: '#CE4B0E',
    7: '#B93E05',
    8: '#983000'
  },
  orchid: {
    0: '#FBF3FE',
    1: '#F5E4FC',
    2: '#E2B3F6',
    3: '#CC8BE9',
    4: '#C47AE5',
    5: '#B65DDD',
    6: '#A342CD',
    7: '#7B20A2',
    8: '#5F148E'
  },
  indigo: {
    0: '#F7F8FF',
    1: '#EAECFF',
    2: '#BDC4F8',
    3: '#919BE5',
    4: '#717EDB',
    5: '#5462C2',
    6: '#3B48AA',
    7: '#283592',
    8: '#0D1A75'
  }
};

const palette = {
  ..._colorPalette,
  white: '#FFFFFF',
  transparent: 'transparent'
};

const text = {
  dark: palette.black[7],
  medium: palette.black[3],
  light: palette.grey[8],
  red: palette.red[7],
  blue: palette.blue[7],
  green: palette.green[7],
  yellow: palette.yellow[7],
  disabled: palette.grey[6],
  white: palette.white
};

const colors = {
  ...palette,
  text,
  fontIcon: {
    ...text,
    blue: palette.blue[6]
  },
  shadow: palette.black[8],
  tags: {
    clickableText: palette.blue[7],
    text: palette.black[7],
    backgroundColor: palette.grey[2],
    hover: rgba(palette.black[8], 0.04)
  },

  border: {
    default: palette.grey[2],
    hover: palette.grey[4],
    active: palette.blue[6],
    transparent: palette.transparent,
    input: palette.grey[3],
    disabled: palette.grey[2]
  },

  button: {
    primary: {
      bg: palette.blue[6],
      color: palette.white,
      hover: rgba(palette.black[8], 0.12),
      hollowHover: palette.blue[0]
    },
    success: {
      bg: palette.green[6],
      color: palette.white,
      hover: rgba(palette.black[8], 0.12),
      hollowHover: palette.green[0]
    },
    danger: {
      bg: palette.red[6],
      color: palette.white,
      hover: rgba(palette.black[8], 0.12),
      hollowHover: palette.red[0]
    },
    warning: {
      bg: palette.yellow[6],
      color: palette.black[7],
      hover: rgba(palette.black[8], 0.12),
      hollowHover: palette.yellow[0]
    },
    disabled: {
      bg: palette.grey[3],
      color: palette.grey[6]
    }
  }
};

export default colors;

export const colorPalette = _colorPalette;
