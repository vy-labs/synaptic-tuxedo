import _ from 'lodash';
export default function isEqualProps(nextProps, thisProps, keys) {
  if (keys) {
    return _.reduce(
      keys,
      (mem, key) => mem && _.isEqual(nextProps[key], thisProps[key]),
      true
    );
  } else {
    return _.isEqual(nextProps, thisProps);
  }
}

export function isEqualOmitFunction(nextProps, props) {
  return _.isEqual(
    _.omit(nextProps, _.functions(nextProps)),
    _.omit(props, _.functions(props))
  );
}
