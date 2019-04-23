import colors, { colorPalette } from './colors';
import typography from './typography';
import space from './space';
import { ChartTheme } from './synapticChart';

export default {
  ...typography,
  ...space,
  colors,
  colorPalette,
  ChartTheme,
  themeName: 'defaultTheme'
};
