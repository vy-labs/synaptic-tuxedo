import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Box from 'tuxedo/components/atoms/box';
import FlexBox from 'tuxedo/components/atoms/flexbox';
import Text from 'tuxedo/components/atoms/text';
import Ellipsis from 'tuxedo/components/atoms/ellipsis';
import Dropdown from 'tuxedo/components/antd-extensions/dropdown';
import Menu from 'tuxedo/components/antd-extensions/menu';
import FontIcon from 'tuxedo/components/atoms/font-icon';

const StyledLabelContainer = styled(FlexBox)`
  cursor: pointer;
`;

/**
 * Extension of antd dropDown supports all the props of antd,
 * Create dropdown menu from the items array or overlay component
 */
export default function ContentDropdown(props) {
  const { items, value = {}, maxWidth, onClick, overlay, ...rest } = props;
  const keyedMap =
    items &&
    items.reduce((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
  function onMenuClick({ key }) {
    onClick(keyedMap[key]);
  }
  const menu = !overlay && (
    <Menu onClick={onMenuClick} selectable selectedKeys={[value.key]}>
      {items.map((item, index) => (
        <Menu.Item key={item.key || index}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Dropdown overlay={overlay || menu} trigger={['click']} {...rest}>
      <StyledLabelContainer alignItems='center'>
        <Box mr={2}>
          <Text fontWeight='semibold'>
            <Ellipsis width={maxWidth}>
              {overlay ? value : value.label}
            </Ellipsis>
          </Text>
        </Box>
        <FontIcon color='text.disabled' size={0} type='icon-Down' />
      </StyledLabelContainer>
    </Dropdown>
  );
}

ContentDropdown.propTypes = {
  /** array to create dropdown */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string
    })
  ),
  /**
   * value of the selected item, for overlay it has to be string, otherWise it can be
   * an item from items array whose label is used to display as the value.
   */
  value: PropTypes.object,
  /** Max width */
  maxWidth: PropTypes.string,
  /** passes the selected item object as an argument and calls the function on click */
  onClick: PropTypes.func,
  /** A component to be used as the dropdown menu, either items or overlay
   * should be passed at a time
   */
  overlay: PropTypes.node
};
