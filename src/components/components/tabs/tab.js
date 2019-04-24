import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { themeGet } from 'styled-system';

// import SvgIcon from '../../components/svg-icon';
import FontIcon from '../../atoms/font-icon';

const VARIANTS = {
  sm: {
    fontSize: 1,
    spacing: 3
  },
  md: {
    fontSize: 2,
    spacing: 4
  },
  lg: {
    fontSize: 3,
    spacing: 5
  }
};

const VERTICAL_VARIANTS = {
  sm: {
    fontSize: 1,
    spacing: 1
  },
  md: {
    fontSize: 2,
    spacing: 2
  },
  lg: {
    fontSize: 3,
    spacing: 2
  }
};

/** checks if the tab is vertical or horizontal and returns either border-left or border-bottom */
function getBorder(props) {
  const { vertical } = props;
  const borderStyle = `${themeGet('borders.2')(props)}px solid`;
  if (vertical) {
    return `border-left: ${borderStyle}`;
  }
  return `border-bottom: ${borderStyle}`;
}

/** checks if the tab is vertical or horizontal and return either dark or light text color */
function getTextColor(props) {
  const { vertical } = props;
  const colorVariant = vertical ? 'dark' : 'light';
  return `color: ${themeGet(`colors.text.${colorVariant}`)(props)}`;
}

const getVariantConfig = (vertical, variant) =>
  vertical ? VERTICAL_VARIANTS[variant] : VARIANTS[variant];

const StyledTabContainer = styled.div`
  font-weight: ${themeGet('fontWeights.semibold')};
  ${getBorder}
  border-color: ${themeGet('colors.transparent')};
  display: flex;
  cursor: pointer;
  line-height: initial;
  ${getTextColor};
  &:hover {
    color: ${themeGet('colors.text.blue')};
  };
  ${props => {
    const variantConfig = getVariantConfig(props.vertical, props.variant);
    return `
      font-size: ${themeGet(`fontSizes.${variantConfig.fontSize}`)(props)}px;
      padding: ${themeGet(`space.${variantConfig.spacing}`)(props)}px ${
      props.vertical ? '16px' : 0
    };
      margin-right: ${
        !props.isLastChild && !props.vertical
          ? themeGet(`space.${variantConfig.spacing}`)(props)
          : 0
      }px;
    `;
  }}
`;

const StyledActiveTabContainer = styled(StyledTabContainer)`
  color: ${themeGet('colors.text.blue')}
  ${props =>
    props.vertical &&
    `
    background-color: ${themeGet('colors.blue.1')(props)}
  `}
  border-color: ${themeGet('colors.border.active')};
`;

const StyledDisabledTabConatiner = styled(StyledTabContainer)`
  color: ${themeGet('colors.text.disabled')};
  &:hover {
    color: ${themeGet('colors.text.disabled')};
  }
`;

function Tab(props) {
  const {
    tab,
    onClickFn,
    active,
    disabled,
    title,
    variant,
    isLastChild,
    vertical,
    className = ''
  } = props;
  let TabContainer = StyledTabContainer;
  if (active) {
    TabContainer = StyledActiveTabContainer;
  } else if (disabled) {
    TabContainer = StyledDisabledTabConatiner;
  }

  return (
    <TabContainer
      className={className}
      variant={variant}
      onClick={onClickFn}
      isLastChild={isLastChild}
      vertical={vertical}
      disabled={disabled}
    >
      {!!tab.tabIcon && <Icon {...props} />}
      {title}
    </TabContainer>
  );
}

Tab.propTypes = {
  tab: PropTypes.object,
  onClickFn: PropTypes.func,
  active: PropTypes.any,
  disabled: PropTypes.any,
  title: PropTypes.any, // title is set as `<span dangerouslySetInnerHTML={{ __html: tab.info }} />` in analytics-vertical-tabs
  variant: PropTypes.string,
  isLastChild: PropTypes.bool,
  vertical: PropTypes.bool,
  theme: PropTypes.object
};
export default withTheme(Tab);

const Icon = props => {
  const { vertical, variant, theme, disabled, active, tab } = props;
  const variantConfig = getVariantConfig(vertical, variant);
  let fillColor = vertical ? 'text.dark' : 'text.light';
  fillColor = active ? 'text.blue' : fillColor;
  fillColor = disabled ? 'text.disabled' : fillColor;
  const fontSize = `${themeGet(`fontSizes.${variantConfig.fontSize}`)({
    theme
  })}px`;
  return (
    <FontIcon
      color={fillColor}
      height={fontSize}
      width={fontSize}
      type={tab.tabIcon}
      mr={2}
    />
  );
};

Icon.propTypes = {
  ...Tab.propTypes
};
