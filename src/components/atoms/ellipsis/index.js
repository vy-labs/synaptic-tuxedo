import system from 'system-components';

const Ellipsis = system(
  {
    is: 'span'
  },

  props => {
    return {
      display: 'inline-block',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle'
    };
  },

  'space',
  'width',
  'maxWidth',
  'textAlign'
);

Ellipsis.displayName = 'Ellipsis';

export default Ellipsis;
