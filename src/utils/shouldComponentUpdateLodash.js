import _ from 'lodash';

export default function shouldComponentUpdate(nextProps, nextState) {
  return !(
    _.isEqual(
      _.omit(nextProps, _.functions(nextProps)),
      _.omit(this.props, _.functions(this.props))
    ) && _.isEqual(nextState, this.state)
  );
}
