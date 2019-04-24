import moment from 'moment';
import _ from 'lodash';

function getOptions(startDate, endDate, inc, unit, format, pluralForm) {
  let currDate = startDate;
  const options = [];

  if (!inc) {
    endDate = +moment(endDate).subtract(1, pluralForm);
  }

  while (currDate <= endDate) {
    options.push({
      timestamp: +moment(currDate).startOf(unit),
      value: moment(currDate).format(format)
    });
    currDate = +moment(currDate)
      .startOf(unit)
      .add(1, pluralForm);
  }

  options.sort((a, b) => b.timestamp - a.timestamp);

  return options;
}

export function getOptionsPeriodText(firstDate, period) {
  const momentDate = moment(firstDate, 'YYYY-MM-DD');
  if (!momentDate.isValid()) {
    return null;
  }

  if (period === 'quarter') {
    return momentDate.format('YYYY [Q]Q');
  } else if (period === 'month') {
    return momentDate.format('YYYY MMM');
  } else if (period === 'week') {
    return momentDate.format('YYYY-MM-DD');
  } else if (period === 'year') {
    return momentDate.format('YYYY');
  } else if (period === 'day') {
    return momentDate.format('YYYY-MM-DD');
  }
}

export function getOptionsPeriodTextFeed(firstDate, period) {
  const momentDate = moment(firstDate, 'YYYY-MM-DD');
  if (!momentDate.isValid()) {
    return null;
  }

  if (period === 'quarter') {
    return momentDate.format('[Q]Q YYYY');
  } else if (period === 'month') {
    return momentDate.format('MMM YYYY');
  } else if (period === 'week') {
    return momentDate.format('DD-MM-YYYY');
  } else if (period === 'year') {
    return momentDate.format('YYYY');
  } else if (period === 'day') {
    return momentDate.format('DD-MM-YYYY');
  }
}

export function getDayOptions(startDate, endDate, inc) {
  return getOptions(startDate, endDate, inc, 'day', 'YYYY-MM-DD', 'days');
}

export function getWeekOptions(startDate, endDate, inc) {
  return getOptions(startDate, endDate, inc, 'week', 'YYYY-MM-DD', 'weeks');
}

export function getYearOptions(startDate, endDate, inc) {
  return getOptions(startDate, endDate, inc, 'year', 'YYYY', 'years');
}

export function getQuarterOptions(startDate, endDate, inc) {
  startDate = +moment(startDate).startOf('quarter');
  return getOptions(startDate, endDate, inc, 'quarter', 'YYYY [Q]Q', 'Q');
}

export function getMonthOptions(startDate, endDate, inc) {
  return getOptions(startDate, endDate, inc, 'month', 'YYYY MMM', 'months');
}

export function getOptionsByRollup(startDate, endDate, rollup, optionType) {
  if (
    startDate ===
    moment(startDate, 'YYYY-MM-DD')
      .startOf(rollup)
      .format('YYYY-MM-DD')
  ) {
    startDate = +moment(startDate, 'YYYY-MM-DD');
  } else {
    startDate = +moment(startDate, 'YYYY-MM-DD')
      .add(1, rollup)
      .startOf(rollup);
  }

  if (
    endDate ===
    moment(endDate, 'YYYY-MM-DD')
      .endOf(rollup)
      .format('YYYY-MM-DD')
  ) {
    endDate = +moment(endDate, 'YYYY-MM-DD');
  } else {
    endDate = +moment(endDate, 'YYYY-MM-DD')
      .subtract(1, rollup)
      .startOf(rollup);
  }

  let options = [];
  if (rollup === 'day') {
    options = getDayOptions(startDate, endDate, true);
  } else if (rollup === 'week') {
    options = getWeekOptions(startDate, endDate, true);
  } else if (rollup === 'month') {
    options = getMonthOptions(startDate, endDate, true);
  } else if (rollup === 'quarter') {
    options = getQuarterOptions(startDate, endDate, true);
  } else if (rollup === 'year') {
    options = getYearOptions(startDate, endDate, true);
  }

  if (optionType === 'cohort') {
    const endDateTimestamp = +moment(endDate);
    const cohortEndDateTimestamp = +moment(options[0].timestamp)
      .add(1, rollup)
      .endOf(rollup);
    if (endDateTimestamp < cohortEndDateTimestamp) {
      options.shift();
    }
  }

  return _.map(options, opt => ({
    label: opt.value,
    value: moment(opt.timestamp).format('YYYY-MM-DD')
  }));
}

export function getRelativeOptionsByRollup(startDate, endDate, rollup) {
  const normalOptions = getOptionsByRollup(startDate, endDate, rollup);
  return _.reduce(
    normalOptions,
    (mem, opt) => {
      const n = moment(opt.value, 'YYYY-MM-DD').diff(moment(), rollup);
      if (n === 0) {
        return mem;
      }
      mem.push({
        label: n + 1 < 0 ? `n${n + 1}` : 'Latest (n)',
        value: String(n)
      });
      return mem;
    },
    []
  );
}

export function getDateRange(inp, rollup) {
  switch (rollup) {
    case 'year':
      return [
        moment(inp, 'YYYY')
          .startOf('year')
          .format('YYYY-MM-DD'),
        moment(inp, 'YYYY')
          .endOf('year')
          .format('YYYY-MM-DD')
      ];
    case 'quarter':
      return [
        moment(inp, 'YYYY [Q]Q')
          .startOf('quarter')
          .format('YYYY-MM-DD'),
        moment(inp, 'YYYY [Q]Q')
          .endOf('quarter')
          .format('YYYY-MM-DD')
      ];
    case 'week':
      return [
        moment(inp, 'YYYY-MM-DD')
          .startOf('week')
          .format('YYYY-MM-DD'),
        moment(inp, 'YYYY-MM-DD')
          .endOf('week')
          .format('YYYY-MM-DD')
      ];
    case 'day':
      return [
        moment(inp, 'YYYY-MM-DD')
          .startOf('day')
          .format('YYYY-MM-DD'),
        moment(inp, 'YYYY-MM-DD')
          .startOf('day')
          .format('YYYY-MM-DD')
      ];
    default:
      return [
        moment(inp, 'YYYY MMM')
          .startOf('month')
          .format('YYYY-MM-DD'),
        moment(inp, 'YYYY MMM')
          .endOf('month')
          .format('YYYY-MM-DD')
      ];
  }
}

/**
 * getDateArray - Function to get an array of dates from start to end
 *
 * DATE_FORMAT: YYYY-MM-DD
 * @param {string} start - Start date
 * @param {string} end - End date
 * @return {array} - Array of objects of dates from start date to end date
 */
export function getDateArray(start, end) {
  if (!start || !end) {
    return null;
  }

  if (moment(start) > moment(end)) {
    return null;
  }

  const dates = [
    {
      date: start,
      day: moment(start).day(),
      isWeekEnd: moment(start).day() === 0 || moment(start).day() === 6
    }
  ];

  let curDate = start;

  while (curDate) {
    curDate = moment(curDate)
      .add(1, 'day')
      .format('YYYY-MM-DD');
    if (curDate && moment(curDate) <= moment(end)) {
      dates.push({
        date: curDate,
        day: moment(curDate).day(),
        isWeekEnd: moment(curDate).day() === 0 || moment(curDate).day() === 6
      });
    } else {
      curDate = false;
    }
  }

  return dates;
}

/**
 * getMonthDates
 * @param {string} start - Start date
 * @return {array} - Objects Array of dates for month extracted from start date
 */
export function getMonthDates(start) {
  const monthStartWeekStart = moment(start)
    .startOf('week')
    .format('YYYY-MM-DD');
  const end = moment(start)
    .endOf('month')
    .format('YYYY-MM-DD');
  const monthEndWeekEnd = moment(end)
    .endOf('week')
    .format('YYYY-MM-DD');

  return getDateArray(monthStartWeekStart, monthEndWeekEnd);
}

export function getStartMomentObject(inp, rollup) {
  switch (rollup) {
    case 'year':
      return moment(inp, 'YYYY').startOf('year');
    case 'quarter':
      return moment(inp, 'YYYY [Q]Q').startOf('quarter');
    case 'week':
      return moment(inp, 'YYYY-MM-DD').startOf('week');
    case 'day':
      return moment(inp, 'YYYY-MM-DD').startOf('day');
    default:
      return moment(inp, 'YYYY MMM').startOf('month');
  }
}

export function getNOptions(orderBy, rollup, analysisPeriod) {
  const today = moment();
  const analysisPeriodM = getStartMomentObject(analysisPeriod, rollup);
  const diff = today.diff(analysisPeriodM, `${rollup}s`);
  return _.range(1, diff).map(el => ({
    value: el,
    label: String(el)
  }));
}

export function getNOptionsNew(rollup, analysisPeriod, endDate) {
  const today = moment(endDate, 'YYYY-MM-DD')
    .add(1, 'day')
    .startOf(rollup);
  const analysisPeriodM = moment(analysisPeriod).startOf(rollup);
  const diff = today.diff(analysisPeriodM, `${rollup}s`);
  return _.range(1, diff).map(el => ({
    value: String(el),
    label: String(el)
  }));
}

export function getLastBasePeriodDate(analysisPeriod, rollup) {
  return moment(analysisPeriod, 'YYYY-MM-DD')
    .subtract(1, rollup)
    .endOf(rollup)
    .format('YYYY-MM-DD');
}

export function getLastBasePeriodRelativeDate(analysisRelativeDate, rollup) {
  return moment()
    .subtract(-analysisRelativeDate + 1, rollup)
    .endOf(rollup)
    .format('YYYY-MM-DD');
}

export function getFirstAnalysisPeriodDate(analysisPeriod, rollup) {
  return moment(analysisPeriod, 'YYYY-MM-DD')
    .add(1, rollup)
    .startOf(rollup)
    .format('YYYY-MM-DD');
}

export function getDateDifferenceByRollup(analysisDate, baseDate, rollup) {
  const analDategetTime = new Date(analysisDate);
  const baseDategetTime = new Date(baseDate);
  const timeDiff = Math.abs(
    analDategetTime.getTime() - baseDategetTime.getTime()
  );
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  const rollUpDivMap = {
    year: 365,
    quarter: 90,
    month: 30,
    week: 7,
    day: 1
  };

  const dividend = rollUpDivMap[rollup];
  return Math.round(diffDays / dividend);
}

export const yearCategoriesMap = {
  day: Array.from(Array(366)).map((el, index) => index + 1),
  week: Array.from(Array(52)).map((el, index) => index + 1),
  dayInMonth: Array.from(Array(31)).map((el, index) => index + 1),
  month: [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
  ],
  quarter: ['Q1', 'Q2', 'Q3', 'Q4']
};

const dateMap = [
  [moment().subtract(6, 'month'), moment()],
  [moment().subtract(12, 'month'), moment()],
  [moment().subtract(2, 'year'), moment()],
  [moment().subtract(3, 'year'), moment()],
  [moment('2000-01-01'), moment()]
];

export function getDateMap() {
  return {
    'Last 6 months': dateMap[0],
    'Last 12 months': dateMap[1],
    'Last 2 Years': dateMap[2],
    'Last 3 Years': dateMap[3],
    Max: dateMap[4]
  };
}

export function getDateRangeByIndex(index = 3) {
  return dateMap[index];
}
