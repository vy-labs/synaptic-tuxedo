import colors, { colorPalette } from './colors';
import typography from './typography';
import space from './space';

export default {
  ...typography,
  ...space,
  colors,
  colorPalette,
  themeName: 'defaultTheme'
};
