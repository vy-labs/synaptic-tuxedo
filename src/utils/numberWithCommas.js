import _ from 'lodash';

export default function numberWithCommas(x) {
  let parts = [];
  if (x || _.isNumber(x)) {
    if (_.isNumber(x)) {
      parts = x.toString().split('.') || [''];
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else if (_.isString(x) && x.length > 0) {
      parts = x.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return parts.join('.');
  }
  return null;
}
