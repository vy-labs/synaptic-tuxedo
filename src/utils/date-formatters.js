import moment from 'moment';
import _ from 'lodash';

function getFullDateGMTFormat(timestamp) {
  if (Number(timestamp) !== 'NaN') {
    return moment.utc(Number(timestamp)).format('DD MMM YYYY HH:mm:ss');
  }
  return timestamp;
}

function getFullDateLocalFormat(timestamp) {
  if (Number(timestamp) !== 'NaN') {
    return moment(Number(timestamp)).format('DD MMM YYYY HH:mm:ss ZZ');
  }
  return timestamp;
}

function getShortDateFormat(timestamp) {
  if (Number(timestamp) !== 'NaN') {
    return moment(Number(timestamp)).format('DD MMM YY');
  }
  return timestamp;
}

function getMonthFormat(timestamp) {
  if (Number(timestamp) !== 'NaN') {
    return moment(Number(timestamp)).format('MMM YY');
  }
  return timestamp;
}

function getYearFormat(timestamp) {
  if (Number(timestamp) !== 'NaN') {
    return moment(Number(timestamp)).format('YYYY');
  }
  return timestamp;
}

function getQuarterFormat(timestamp) {
  if (Number(timestamp) !== 'NaN') {
    return moment(Number(timestamp)).format('[Q]Q YY');
  }
  return timestamp;
}

function getIntervalFormat(prevDate, nextDate) {
  if (prevDate.year() !== nextDate.year()) {
    return `${prevDate.format('DD MMM YY')} - ${nextDate.format('DD MMM YY')}`;
  }
  if (prevDate.month() !== nextDate.month()) {
    return `${prevDate.format('DD MMM')} - ${nextDate.format('DD MMM YY')}`;
  }
  return `${prevDate.format('DD')} - ${nextDate.format('DD MMM YY')}`;
}

function getWeekFormat(timestamp) {
  if (Number(timestamp) === 'NaN') {
    return timestamp;
  }
  const date = moment(Number(timestamp));
  let nextDate = moment(Number(timestamp)).add(6, 'd');
  if (nextDate.isAfter(moment())) {
    nextDate = moment();
  }
  return getIntervalFormat(date, nextDate);
}

function getPastWeekFormat(timestamp) {
  if (Number(timestamp) === 'NaN') {
    return timestamp;
  }
  const date = moment(Number(timestamp));
  const prevDate = moment(Number(timestamp)).subtract(6, 'd');
  return getIntervalFormat(prevDate, date);
}

function getMinutesFormat(timestamp) {
  if (Number(timestamp) === 'NaN') {
    return timestamp;
  }
  return moment(Number(timestamp)).format('mm:ss');
}

function emptyFn(params) {
  return params;
}

const rollupDateFormatterMap = {
  quarter: getQuarterFormat,
  day: getShortDateFormat,
  week: getWeekFormat,
  year: getYearFormat,
  month: getMonthFormat
};

export function getDateFormatterForRollup(rollup) {
  return rollupDateFormatterMap[rollup] || emptyFn;
}

// hack- remove this
function getShortDateFormatHack(timestamp) {
  if (moment(timestamp).isValid()) {
    return moment(timestamp).format('DD MMM YY');
  }
  return timestamp;
}

function getWeekFormatHack(timestamp) {
  if (!moment(timestamp).isValid()) {
    return timestamp;
  }
  const date = moment(timestamp);
  let nextDate = moment(timestamp).add(6, 'd');
  if (nextDate.isAfter(moment())) {
    nextDate = moment();
  }
  return getIntervalFormat(date, nextDate);
}

function getMonthFormatHack(timestamp) {
  if (moment(timestamp).isValid()) {
    return moment(timestamp).format('MMM YY');
  }
  return timestamp;
}

const rollupDateFormatterMapHack = {
  day: getShortDateFormatHack,
  week: getWeekFormatHack,
  month: getMonthFormatHack
};

export function getDateFormatterForRollupHack(rollup) {
  return rollupDateFormatterMapHack[rollup] || emptyFn;
}

export default {
  getFullDateGMTFormat,
  getFullDateLocalFormat,
  getShortDateFormat,
  getMonthFormat,
  getYearFormat,
  getIntervalFormat,
  getQuarterFormat,
  getWeekFormat,
  getMinutesFormat,
  getPastWeekFormat
};
