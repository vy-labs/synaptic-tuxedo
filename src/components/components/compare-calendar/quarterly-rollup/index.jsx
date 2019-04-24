import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { SingleEntity, RollupHeader, getRows } from '../shared';
import FlexBox from '../../../atoms/flexbox';

const quarterNames = ['Q1', 'Q2', 'Q3', 'Q4'];

class QuarterlyRollup extends React.Component {
  constructor(props) {
    super(props);
    this.itemRenderer = this.itemRenderer.bind(this);
    this.onSelection = this.onSelection.bind(this);
    this.onLeftClick = this.onLeftClick.bind(this);
    this.onRightClick = this.onRightClick.bind(this);
  }

  onSelection(quarter, year) {
    const { onSelection } = this.props;
    return () => onSelection(moment({ year }).quarter(quarter));
  }

  onLeftClick() {
    const { changeHeading, year } = this.props;
    if (year > 0) {
      changeHeading({ year: year - 1 });
    }
  }

  onRightClick() {
    const { changeHeading, year } = this.props;
    if (moment().year() !== year) {
      changeHeading({ year: year + 1 });
    }
  }

  itemRenderer(i) {
    const { year, max, min } = this.props;
    if (i >= moment().quarter() && year >= moment().year()) {
      return null;
    }
    const { value } = this.props;
    const active = i + 1 === value.quarter() && year === value.year();
    const currentQuarterMoment = moment({ year })
      .quarter(i + 1)
      .startOf('quarter');
    const disabled =
      currentQuarterMoment.isBefore(min) || currentQuarterMoment.isAfter(max);
    return (
      <SingleEntity
        disabled={disabled}
        key={i}
        width='45px'
        label={quarterNames[i]}
        active={active}
        onClick={this.onSelection(i + 1, year)}
      />
    );
  }

  render() {
    const { year, min, max } = this.props;
    const leftIconDisabled = moment({ year }).isSame(
      moment(min).startOf('year')
    );
    const rightIconDisabled = moment({ year }).isSame(
      moment(max).startOf('year')
    );
    return (
      <FlexBox inline flexDirection='column' alignItems='center'>
        <RollupHeader
          label={year}
          onLeftClick={this.onLeftClick}
          onRightClick={this.onRightClick}
          leftIconDisabled={leftIconDisabled}
          rightIconDisabled={rightIconDisabled}
        />
        <FlexBox my={1}>{getRows(1, 4, this.itemRenderer)}</FlexBox>
      </FlexBox>
    );
  }
}

QuarterlyRollup.propTypes = {
  year: PropTypes.number,
  min: PropTypes.object,
  max: PropTypes.object,
  value: PropTypes.object,
  changeHeading: PropTypes.func,
  onSelection: PropTypes.func
};

QuarterlyRollup.displayName = 'QuarterlyRollup';

export default QuarterlyRollup;
