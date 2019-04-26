import React from 'react';
import shouldComponentUpdateLodash from 'tuxedo/utils/shouldComponentUpdateLodash';
import PropTypes from 'prop-types';
import CompareCalendar from './ll-compare-calendar';

export default class CompareCalendarWrapper extends React.Component {
  shouldComponentUpdate = shouldComponentUpdateLodash;

  getConfig() {
    const { rollups } = this.props;
    return rollups.reduce((mem, rollup) => {
      mem[rollup] = CompareCalendar.config[rollup];
      return mem;
    }, {});
  }

  getPropsToPass(rollupComponentMap) {
    return Object.keys(rollupComponentMap).reduce((acc, rollup) => {
      const {
        defaultState,
        getPreviousEntity,
        getNextEntity,
        getMutationObject
      } = rollupComponentMap[rollup];
      const {
        selected: stateSelected,
        min: stateMin,
        max: stateMax
      } = this.props;
      const {
        selected: defaultSelected,
        min: defaultMin,
        max: defaultMax
      } = defaultState;
      const selected = stateSelected || [
        defaultSelected,
        getPreviousEntity(defaultSelected)
      ];
      const max = stateMax || defaultMax;
      const min = stateMin || defaultMin;
      acc[rollup] = {
        ...rollupComponentMap[rollup],
        one: {
          ...defaultState,
          ...getMutationObject(selected[0]),
          min: getNextEntity(min),
          max
        },
        two: {
          ...defaultState,
          ...getMutationObject(selected[1]),
          max: getPreviousEntity(selected[0]),
          min
        }
      };
      return acc;
    }, {});
  }

  render() {
    const config = this.getPropsToPass(this.getConfig());
    const { rollup, onApply, onCancel, onRollupChange } = this.props;
    return (
      <CompareCalendar
        config={config}
        onApply={onApply}
        onCancel={onCancel}
        onRollupChange={onRollupChange}
        selectedRollup={rollup}
      />
    );
  }
}

CompareCalendarWrapper.displayName = 'CompareCalendar';

CompareCalendarWrapper.config = CompareCalendar.config;

CompareCalendarWrapper.propTypes = {
  /** array of moment object for selected date for adjacent calendars */
  selected: PropTypes.array,
  /** moment object for minimum selectable date */
  min: PropTypes.object,
  /** moment object for maximum selectable date */
  max: PropTypes.object,
  /** click handler for apply click */
  onApply: PropTypes.func,
  /** click handler for cancel click */
  onCancel: PropTypes.func,
  /** click handler for apply click */
  onRollupChange: PropTypes.func,
  /** key for selected rollup */
  rollup: PropTypes.oneOf(Object.keys(CompareCalendar.config)),
  /** array of supported rollups */
  rollups: PropTypes.array
};

CompareCalendarWrapper.defaultProps = {
  rollups: Object.keys(CompareCalendar.config),
  rollup: 'month'
};
