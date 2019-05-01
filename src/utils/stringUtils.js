import React from 'react';

import numberWithCommas from 'tuxedo/utils/numberWithCommas';

export function convertUnderscoreToCapitalize(string) {
  const stringSplitArr = string.split('_');
  const capStringArr = stringSplitArr.map((strPart, index) => {
    return strPart.charAt(0).toUpperCase() + strPart.slice(1);
  });

  return capStringArr.join(' ');
}

export function splitCamelCase(str) {
  let returnStr = '';
  for (let i = 0; i < str.length; i++) {
    if (
      i > 0 &&
      str[i] === str[i].toUpperCase() &&
      str[i] !== str[i].toLowerCase()
    ) {
      returnStr += ' ';
    }
    returnStr += str[i];
  }

  return returnStr;
}

export function safeGet(obj = {}, path) {
  return Array.prototype.reduce.call(
    path,
    (object, el) => {
      if (object !== null && object !== undefined) {
        if (typeof el === 'string' && el.trim() === '') {
          return object;
        }
        return object[el];
      }
    },
    obj
  );
}

export function safeToFixed(str, decimal) {
  if (Number(str) !== 'NaN') {
    return Number(str).toFixed(decimal);
  }
  return null;
}

export function trimZeroes(str) {
  if (str) {
    return parseFloat(Number(str));
  }
  return null;
}

export function hashRateConvertor(value, decimal = 2) {
  let hashRate = '';
  if (value === 0) {
    hashRate = '0';
  } else if (value > 0 && value < 1000) {
    hashRate = `${numberWithCommas(safeToFixed(Number(value), decimal))}  H/s`;
  } else if (value >= 1000 && value < 1000000) {
    hashRate = `${numberWithCommas(
      safeToFixed(Number(value / 1000), decimal)
    )} KH/s`;
  } else if (value >= 1000000 && value < 1000000000) {
    hashRate = `${numberWithCommas(
      safeToFixed(Number(value / 1000000), decimal)
    )}  MH/s`;
  } else if (value >= 1000000000 && value < 1000000000000) {
    hashRate = `${numberWithCommas(
      safeToFixed(Number(value / 1000000000), decimal)
    )}  GH/s`;
  } else if (value >= 1000000000000) {
    hashRate = `${numberWithCommas(
      safeToFixed(Number(value / 1000000000000), decimal)
    )}  TH/s`;
  }
  return hashRate;
}

export function insertNewLineChar(string, breakLength) {
  if (breakLength < string.length) {
    const strArr = Array.from(
      Array(parseInt(string.length / breakLength + 1, 10))
    ).map((el, index) => {
      return string.slice(
        index * breakLength,
        index * breakLength + breakLength
      );
    });
    return strArr.join(' <br> ');
  }
  return string;
}

export function highlightKeyword(str, keyword, highlightConfig = {}) {
  const {
    highlightClass = 'blue-text text-b',
    caseSensitive = false
  } = highlightConfig;
  const regexMode = `g${caseSensitive ? '' : 'i'}`;
  const reg = new RegExp(`${keyword}`, regexMode);
  const matches = str.match(reg);

  return str.split(reg).map((node, index) => {
    return index === 0
      ? node
      : [
          React.createElement(
            'span',
            {
              className: highlightClass,
              key: 'seperator'
            },
            matches[index - 1]
          ),
          node
        ];
  });
}

export function joinStringsArr(strings, classN = false) {
  return strings.map((el, index) => {
    if (index === 0) {
      return (
        <span key={el} className={classN}>
          {el}
        </span>
      );
    }
    if (index === strings.length - 1) {
      return (
        <span key={el}>
          {' '}
          and <span className={classN}>{el}</span>
        </span>
      );
    }
    return (
      <span key={el}>
        , <span className={classN}>{el}</span>
      </span>
    );
  });
}

export function isValidPath(obj, path) {
  if (!(path instanceof Array) || path.length === 0) {
    return false;
  }
  const deepObj = safeGet(obj, path.slice(0, path.length - 1));
  if (deepObj) {
    return Object.hasOwnProperty.call(deepObj, path[path.length - 1]);
  }
  return false;
}
