import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../atoms/box';
import FlexBox from '../../atoms/flexbox';
import Text from '../../atoms/text';
import Ellipsis from '../../atoms/ellipsis';

export default function Content(props) {
  const { label, body, maxWidth } = props;
  const labelComponent = (
    <Box mb={1}>
      <Text color='light' fontSize={1} fontWeight='semibold'>
        {React.isValidElement(label) ? (
          label
        ) : (
          <Ellipsis width={maxWidth}>{label}</Ellipsis>
        )}
      </Text>
    </Box>
  );
  return (
    <FlexBox flexDirection='column' maxWidth='100%'>
      {labelComponent}
      {body}
    </FlexBox>
  );
}

Content.propTypes = {
  /** Max width */
  maxWidth: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  body: PropTypes.node
};

Content.defaultProps = {
  maxWidth: '90px'
};

Content.displayName = 'IconedFilter.Content';
