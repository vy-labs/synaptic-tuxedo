import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import FlexBox from 'tuxedo/components/atoms/flexbox';
import Box from 'tuxedo/components/atoms/box';
import Text from 'tuxedo/components/atoms/text';
import Tabs from 'tuxedo/components/components/tabs';

const StyledRollUpContainer = styled(FlexBox)`
  border-right: 1px solid ${themeGet('colors.border.default')};
  height: ${themeGet('heights.31')}px;
`;

class Rollup extends React.PureComponent {
  render() {
    const { selectedRollup, onRollupChange, rollupComponentMap } = this.props;
    const tabList = Object.keys(rollupComponentMap).map(label => ({
      label: _.capitalize(label),
      value: label
    }));
    return (
      <StyledRollUpContainer flexDirection='column'>
        <Box pl={4} py={2}>
          <Text fontWeight='semibold' color='disabled' fontSize={1}>
            ROLLUP
          </Text>
        </Box>
        <Box>
          <Tabs
            activeTab={selectedRollup}
            tabList={tabList}
            vertical
            click={onRollupChange}
            valueKey='value'
          />
        </Box>
      </StyledRollUpContainer>
    );
  }
}

Rollup.propTypes = {
  selectedRollup: PropTypes.string,
  onRollupChange: PropTypes.func,
  rollupComponentMap: PropTypes.object
};

Rollup.displayName = 'Rollup';

export default Rollup;
