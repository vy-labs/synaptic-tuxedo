import React from 'react';
import PropTypes from 'prop-types';
import Tab from './tab';
import FlexBox from '../../atoms/flexbox';

/**
 *  Create a tabs section
 * @constructor
 * @param {array} tabList - List of tabs to be displayed.
 * @param {function} click - A function that is immediately called
 * and returns a callback which is executed when user clicks on tab
 * @param {string} activeTab - Pass valueKey of active tab
 *
 * @param {string} labelKey - labelKey from array (default 'label')
 * @param {string} valueKey - valueKey from array (default 'i d')
 * @param {string} isDisabled - tab disabled {default: false}
 */

/**
 * Create Tabs
 */
const Tabs = ({
  tabList,
  variant = 'md',
  click,
  activeTab,
  labelKey,
  valueKey,
  vertical,
  className = ''
}) => {
  return (
    <FlexBox flexDirection={vertical ? 'column' : 'row'} className={className}>
      {tabList.map((tab, index) => {
        const title = tab[labelKey];
        const active = String(tab[valueKey]) === String(activeTab) ? true : '';
        const disabled = Object.hasOwnProperty.call(tab, 'disabled')
          ? tab.disabled
          : false;
        const onClickFn = disabled ? () => {} : click(tab, index);
        const hidden = Object.hasOwnProperty.call(tab, 'hidden')
          ? tab.hidden
          : false;

        if (hidden) {
          return null;
        }

        return (
          <Tab
            key={`tab_${index}`}
            {...{
              tab,
              index,
              onClickFn,
              vertical,
              title,
              variant,
              active,
              disabled,
              isLastChild: index === tabList.length - 1
            }}
          />
        );
      })}
    </FlexBox>
  );
};

Tabs.propTypes = {
  /** List of tabs to be displayed */
  tabList: PropTypes.array.isRequired,
  /** A function that is immediately called
   * and returns a callback which is executed when user clicks on tab
   */
  click: PropTypes.func.isRequired,
  /**
   * Pass valueKey of active tab
   */
  activeTab: PropTypes.string.isRequired,
  /**
   * labelKey from array (default 'label')
   */
  labelKey: PropTypes.string,
  /**
   * valueKey from array (default 'i d')
   */
  valueKey: PropTypes.string,
  /**
   * * not implemented yet *
   */
  className: PropTypes.string,
  /**
   * variant manages size of individual tabs
   */
  variant: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
   * set true to show vertical tabs
   */
  vertical: PropTypes.bool
};

Tabs.defaultProps = {
  labelKey: 'label',
  valueKey: 'id',
  variant: 'md',
  vertical: false
};

Tabs.displayName = 'Tabs';

export default Tabs;
