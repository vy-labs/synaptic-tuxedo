import React from 'react';
import moment from 'moment';
import dateUtils from 'tuxedo/utils/date-formatters.js';
import MonthlyRollup from '../monthly-rollup';
import QuarterlyRollup from '../quarterly-rollup';
import DailyRollup from '../daily-rollup';
import YearlyRollup from '../yearly-rollup';

// constants are documented in story of the component make sure to
// update the story if any change is done here
export const quickLinks = {
  month: [
    {
      label: 'MoM',
      getTargetDate: startDate => moment(startDate).subtract(1, 'months')
    },
    {
      label: 'Month-3',
      getTargetDate: startDate => moment(startDate).subtract(3, 'months')
    },
    {
      label: 'YoY',
      getTargetDate: startDate => moment(startDate).subtract(12, 'months')
    }
  ],
  quarter: [
    {
      label: 'YoY',
      getTargetDate: startDate => moment(startDate).subtract(4, 'quarters')
    }
  ]
};

export const rollupComponentMap = {
  daily: {
    defaultState: {
      selected: moment(),
      month: moment().month(),
      year: moment().year(),
      min: moment().subtract(10, 'years'),
      max: moment()
    },
    render: props => <DailyRollup {...props} />,
    // function to return a display text corresponding to selected value
    getSelectionDisplayText(selected) {
      return moment(selected).format('DD MMM YYYY');
    },
    // function to get required data from an object which might contain
    // redundant data
    getRequiredData(rawData) {
      return {
        value: rawData.selected,
        month: rawData.month,
        year: rawData.year,
        min: rawData.min,
        max: rawData.max
      };
    },
    getPreviousEntity(momentTime) {
      return moment(momentTime).subtract(1, 'days');
    },
    getNextEntity(momentTime) {
      return moment(momentTime).add(1, 'days');
    },
    // gets a final moment time and interprets that into an object that can be passed to setState
    getMutationObject(momentTime) {
      return {
        selected: momentTime,
        month: momentTime.month(),
        year: momentTime.year()
      };
    }
  },
  week: {
    defaultState: {
      selected: moment().startOf('week'),
      month: moment().month(),
      year: moment().year(),
      min: moment().subtract(10, 'years'),
      max: moment()
    },
    render: props => <DailyRollup {...props} weekly />,
    getSelectionDisplayText(selected) {
      return dateUtils.getIntervalFormat(
        moment(selected).startOf('week'),
        moment(selected).endOf('week')
      );
    },
    getRequiredData(rawData) {
      return {
        value: rawData.selected,
        month: rawData.month,
        year: rawData.year,
        min: rawData.min,
        max: rawData.max
      };
    },

    // gives previous value to the passed momentTime on the discrete rollup values generated
    getPreviousEntity(momentTime) {
      return moment(momentTime).subtract(7, 'days');
    },
    getNextEntity(momentTime) {
      return moment(momentTime).add(7, 'days');
    },
    // gets a final moment time and interprets that into an object that can be passed to setState
    getMutationObject(momentTime) {
      return {
        selected: momentTime,
        month: momentTime.month(),
        year: momentTime.year()
      };
    }
  },
  month: {
    defaultState: {
      selected: moment(),
      year: moment().year(),
      min: moment().subtract(10, 'years'),
      max: moment()
    },
    render: props => <MonthlyRollup {...props} />,
    getSelectionDisplayText(selected) {
      return selected.format('MMM YYYY');
    },
    getRequiredData(rawData) {
      return {
        value: rawData.selected,
        year: rawData.year,
        min: rawData.min,
        max: rawData.max
      };
    },
    getPreviousEntity(momentTime) {
      return moment(momentTime).subtract(1, 'months');
    },
    getNextEntity(momentTime) {
      return moment(momentTime).add(1, 'months');
    },
    // gets a final moment time and interprets that into an object that can be passed to setState
    getMutationObject(momentTime) {
      return {
        selected: momentTime,
        year: momentTime.year()
      };
    },
    quickLinks: quickLinks.month
  },
  quarter: {
    defaultState: {
      selected: moment(),
      year: moment().year(),
      min: moment().subtract(10, 'years'),
      max: moment()
    },
    render: props => <QuarterlyRollup {...props} />,
    getSelectionDisplayText(selected) {
      return `Q${selected.format('Q YYYY')}`;
    },
    getRequiredData(rawData) {
      return {
        value: rawData.selected,
        year: rawData.year,
        min: rawData.min,
        max: rawData.max
      };
    },
    getPreviousEntity(momentTime) {
      return moment(momentTime).subtract(1, 'quarters');
    },
    getNextEntity(momentTime) {
      return moment(momentTime).add(1, 'quarters');
    },
    // gets a final moment time and interprets that into an object that can be passed to setState
    getMutationObject(momentTime) {
      return {
        selected: momentTime,
        year: momentTime.year()
      };
    },
    quickLinks: quickLinks.quarter
  },
  year: {
    defaultState: {
      selected: moment(),
      min: moment().subtract(10, 'years'),
      max: moment()
    },
    render: props => <YearlyRollup {...props} />,
    getSelectionDisplayText(selected) {
      return selected.format('YYYY');
    },
    getRequiredData(rawData) {
      return {
        value: rawData.selected,
        min: rawData.min,
        max: rawData.max
      };
    },
    getPreviousEntity(momentTime) {
      return moment(momentTime).subtract(1, 'years');
    },
    getNextEntity(momentTime) {
      return moment(momentTime).add(1, 'years');
    },
    // gets a final moment time and interprets that into an object that can be passed to setState
    getMutationObject(momentTime) {
      return {
        selected: momentTime
      };
    }
  }
};
