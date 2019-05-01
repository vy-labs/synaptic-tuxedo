import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import FlexBox from 'tuxedo/components/atoms/flexbox';
import Box from 'tuxedo/components/atoms/box';
import { SingleEntity, RollupHeader, getRows } from '../shared';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export default class MonthlyRollup extends React.Component {
  constructor(props) {
    super(props);
    this.itemRenderer = this.itemRenderer.bind(this);
    this.onLeftClick = this.onLeftClick.bind(this);
    this.onRightClick = this.onRightClick.bind(this);
    this.onSelection = this.onSelection.bind(this);
  }

  onLeftClick() {
    const { changeHeading, year } = this.props;
    changeHeading({ year: year - 1 });
  }

  onRightClick() {
    const { changeHeading, year } = this.props;
    changeHeading({ year: year + 1 });
  }

  onSelection(month, year) {
    return () => {
      const { onSelection } = this.props;
      onSelection(moment({ year, month }));
    };
  }

  itemRenderer(i) {
    const { value, year, min, max } = this.props;
    // if current year only show months upto current month
    if (moment().month() < i && moment().year() === year) {
      return null;
    }
    const active = value.month() === i && value.year() === year;
    const currentDayMoment = moment({ month: i, year });
    const disabled =
      currentDayMoment.isBefore(min) || currentDayMoment.isAfter(max);
    return (
      <SingleEntity
        disabled={disabled}
        key={i}
        width='45px'
        label={monthNames[i]}
        active={active}
        onClick={this.onSelection(i, year)}
      />
    );
  }

  render() {
    const { year, min, max } = this.props;
    const col = 4;
    const noOfRows = Math.ceil(monthNames.length / col);
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
        <Box>
          {Array.from(Array(noOfRows)).map((el, rowNum) => (
            <FlexBox key={rowNum} my={1}>
              {getRows(rowNum + 1, col, this.itemRenderer)}
            </FlexBox>
          ))}
        </Box>
      </FlexBox>
    );
  }
}

MonthlyRollup.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,
  min: PropTypes.object,
  max: PropTypes.object,
  value: PropTypes.object,
  changeHeading: PropTypes.func,
  onSelection: PropTypes.func
};

MonthlyRollup.displayName = 'MonthlyRollup';
