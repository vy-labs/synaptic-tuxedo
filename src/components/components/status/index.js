import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import FlexBox from 'tuxedo/components/atoms/flexbox';
import Tooltip from 'tuxedo/components/antd-extensions/tooltip';
import cleanComponentProps from 'tuxedo/utils/cleanComponentProps';

const COLOR_SHADE = 6;
const BACKGROUND_COLOR = 'grey';
const STATUS_COLOR = 'green';
const STATUS = 0;
const VARIANTS = {
  default: {
    height: 1
  }
};

const StyledStatus = cleanComponentProps(FlexBox, [
  'backGroundColor',
  'statusColor',
  'status'
])`
  border-radius: ${themeGet('radii.3')}px;
  height: ${props => themeGet(`heights.${props.height}`)};
  background-color: ${props =>
    themeGet(`colors.${props.backGroundColor}.${COLOR_SHADE}`)}
  overflow: hidden;
  position: relative;
  ::before {
    width: ${props => props.status}%;
    height: 100%;
    position: absolute;
    content: '';
    z-index: 1;
    background-color: ${props =>
      themeGet(`colors.${props.statusColor}.${COLOR_SHADE}`)};
  }
`;

/**
 * Show a status component
 */
const Status = props => {
  const { backGroundColor, color, status, showTooltip, variant } = props;
  const selectedVariant = VARIANTS[variant];
  const statusInstance = (
    <StyledStatus
      inline
      height={selectedVariant.height}
      width='100%'
      backGroundColor={backGroundColor}
      statusColor={color}
      status={status}
    />
  );
  return showTooltip ? (
    <Tooltip placement='top' title={status}>
      {statusInstance}
    </Tooltip>
  ) : (
    statusInstance
  );
};

Status.defaultProps = {
  backGroundColor: BACKGROUND_COLOR,
  color: STATUS_COLOR,
  status: STATUS,
  showTooltip: true,
  variant: 'default'
};

Status.displayName = 'Status';

Status.propTypes = {
  /** background color to be provided as a valid key of colors object in the theme, third variant is used to render the color  */
  backGroundColor: PropTypes.string,
  /** The status color */
  color: PropTypes.string,
  /** status percentage percentage */
  status: PropTypes.number,
  /** where tho show tooltip signifying status value */
  showTooltip: PropTypes.bool,
  /** variant currently supports height  */
  variant: PropTypes.oneOf(Object.keys(VARIANTS))
};

export default Status;
