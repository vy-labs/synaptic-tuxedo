import React from 'react';
import { CompareCalendar } from 'tuxedo';
import moment from 'moment';
import LLCompareCalendar from './ll-compare-calendar';

import { withInfo } from '@storybook/addon-info';

const story = () => {
  return (
    <div>
      <LLCompareCalendar onCancel={console.log} onApply={console.log} />
      <CompareCalendar
        onCancel={console.log}
        onApply={console.log}
        selected={[
          moment().subtract(1, 'years'),
          moment().subtract(2, 'years')
        ]}
        selectedRollup='weekly'
        min={moment().subtract(3, 'years')}
      />
    </div>
  );
};

export default withInfo({
  text: `
  Following configs show how states are computed for the component initial rendering and further updates
  ~~~js
  import React from 'react';
  import moment from 'moment';
  import MonthlyRollup from '../monthly-rollup';
  import QuarterlyRollup from '../quarterly-rollup';
  import DailyRollup from '../daily-rollup';
  import YearlyRollup from '../yearly-rollup';

  export const quickLinks = {
    monthly: [
      {
        label: 'MoM',
        // target date means the date to navigate to when quicklink is pressed
        targetDate: moment().subtract(1, 'months')
      },
      {
        label: 'Month-2',
        targetDate: moment().subtract(2, 'months')
      },
      {
        label: 'Month-3',
        targetDate: moment().subtract(3, 'months')
      },
      {
        label: 'Month-6',
        targetDate: moment().subtract(6, 'months')
      },
      {
        label: 'Month-12',
        targetDate: moment().subtract(12, 'months')
      }
    ],
    quarterly: [
      {
        label: 'QoQ-3',
        targetDate: moment().subtract(3, 'quarters')
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
      // gets a final moment time and interprets that into an object that can be passed to setState
      getMutationObject(momentTime) {
        return {
          selected: momentTime,
          month: momentTime.month(),
          year: momentTime.year()
        };
      }
    },
    weekly: {
      defaultState: {
        selected: moment().endOf('week'),
        month: moment().month(),
        year: moment().year(),
        min: moment().subtract(10, 'years'),
        max: moment()
      },
      render: props => <DailyRollup {...props} weekly />,
      getSelectionDisplayText(selected) {
        return \`\${moment(selected).startOf('week').date()}-\${moment(selected).endOf('week').date()} \${selected.format('MMM YYYY')}\`;
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
      // gets a final moment time and interprets that into an object that can be passed to setState
      getMutationObject(momentTime) {
        return {
          selected: momentTime,
          month: momentTime.month(),
          year: momentTime.year()
        };
      }
    },
    monthly: {
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
      // gets a final moment time and interprets that into an object that can be passed to setState
      getMutationObject(momentTime) {
        return {
          selected: momentTime,
          year: momentTime.year()
        };
      },
      quickLinks: quickLinks.monthly
    },
    quarterly: {
      defaultState: {
        selected: moment(),
        year: moment().year(),
        min: moment().subtract(10, 'years'),
        max: moment()
      },
      render: props => <QuarterlyRollup {...props} />,
      getSelectionDisplayText(selected) {
        return \`Q\${selected.format('Q YYYY')}\`;
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
      // gets a final moment time and interprets that into an object that can be passed to setState
      getMutationObject(momentTime) {
        return {
          selected: momentTime,
          year: momentTime.year()
        };
      },
      quickLinks: quickLinks.quarterly
    },
    yearly: {
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
      // gets a final moment time and interprets that into an object that can be passed to setState
      getMutationObject(momentTime) {
        return {
          selected: momentTime
        };
      }
    }
  };
  ~~~
  `
})(story);
