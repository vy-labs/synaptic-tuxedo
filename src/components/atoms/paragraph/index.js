import system from 'system-components';
import Text from 'tuxedo/components/atoms/text';

const SIZE_TO_LINE_HEIGHT = {
  0: '16px',
  1: '16px',
  2: '20px',
  3: '24px'
};

const Paragraph = system(
  {
    is: Text
  },
  props => {
    const lineHeight = SIZE_TO_LINE_HEIGHT[props.fontSize || 2];
    return lineHeight ? { lineHeight: `${lineHeight}` } : {};
  }
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;
