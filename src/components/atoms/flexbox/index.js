import system from 'system-components';

// Tuxedo imports
import Box from '../box';

const FlexBox = system(
  {
    is: Box,
    blacklist: ['inline', 'alignItems', 'justifyContent', 'flexDirection', 'flexWrap']
  },
  {
    flexDirection: 'row'
  },
  props => (
    props.inline ? {
      display: 'inline-flex'
    } : {
      display: 'flex'
    }
  ),
  'flex',
  'flexWrap',
  'flexDirection',
  'alignItems',
  'justifyContent',
  'flexBasis',
  'alignContent'
);

FlexBox.displayName = 'FlexBox';

FlexBox.propTypes = {
  ...FlexBox.propTypes,
  ...Box.propTypes
};

export default FlexBox;
