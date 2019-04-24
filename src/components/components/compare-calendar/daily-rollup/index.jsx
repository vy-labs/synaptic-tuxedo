import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getMonthDates } from 'tuxedo/utils/dateHelpers';
import { themeGet } from 'styled-system';
import { SingleEntity, RollupHeader, getRows } from '../shared';
import FlexBox from '../../../atoms/flexbox';

const StyledRowContainer = styled(FlexBox)`
  ${props =>
    props.active && `background-color: ${themeGet('colors.blue.1')(props)}`};
  border-radius: ${themeGet('radii.1')}px;
`;

function getDayFromDateString(dateString) {
  const momentDate = moment(dateString, 'YYYY-MM-DD');
  return momentDate.date();
}

function isTheDayInSameWeek(currentDayMoment, weekMoment) {
  return (
    weekMoment.week() === currentDayMoment.week() &&
    weekMoment.year() === currentDayMoment.year()
  );
}

// 0 based row num
function getWeekFromRow(rowNum, month, year) {
  // using moment({ month, year }).week() + rowNum may result in value greater than 52
  return ((moment({ month, year }).week() + rowNum - 1) % 52) + 1;
}

class DailyRollup extends React.Component {
  constructor(props) {
    super(props);
    this.onLeftClick = this.onLeftClick.bind(this);
    this.onRightClick = this.onRightClick.bind(this);
    this.itemRenderer = this.itemRenderer.bind(this);
    this.onSelection = this.onSelection.bind(this);
  }

  onSelection(date) {
    return () => {
      const { onSelection, weekly } = this.props;
      let selectedDate = moment(date, 'YYYY-MM-DD');
      if (weekly) {
        selectedDate = selectedDate.startOf('week');
      }
      onSelection(selectedDate);
    };
  }

  onLeftClick() {
    const { month, year, changeHeading } = this.props;
    const referenceDate = moment({ month, year });
    const nextReferenceDate = referenceDate.subtract(1, 'months');
    changeHeading({
      month: nextReferenceDate.month(),
      year: nextReferenceDate.year()
    });
  }

  onRightClick() {
    const { month, year, changeHeading } = this.props;
    const nextReferenceDate = moment({ month, year }).add(1, 'months');
    changeHeading({
      month: nextReferenceDate.month(),
      year: nextReferenceDate.year()
    });
  }

  itemRenderer(allDays) {
    return i => {
      const { value, min, max, weekly } = this.props;
      const currentDayMoment = moment(allDays[i].date, 'YYYY-MM-DD');
      let active;
      if (weekly) {
        active = isTheDayInSameWeek(currentDayMoment, value);
      } else {
        active = moment(allDays[i].date).isSame(value.format('YYYY-MM-DD'));
      }

      const disabled =
        currentDayMoment.isBefore(min) || currentDayMoment.isAfter(max);
      return (
        <SingleEntity
          key={i}
          disabled={disabled}
          width='25px'
          label={getDayFromDateString(allDays[i].date)}
          active={active}
          onClick={this.onSelection(allDays[i].date)}
        />
      );
    };
  }

  render() {
    const { month, year, min, max, weekly, value } = this.props;
    const monthStart = moment({ month, year }).startOf('month');
    const allDays = getMonthDates(monthStart);
    const col = 7;
    const noOfRows = Math.ceil(allDays.length / col);
    const headerLabel = monthStart.format('MMM YYYY');
    const leftIconDisabled = monthStart.isSame(moment(min).startOf('month'));
    const rightIconDisabled = monthStart.isSame(moment(max).startOf('month'));
    return (
      <FlexBox inline flexDirection='column'>
        <RollupHeader
          onLeftClick={this.onLeftClick}
          onRightClick={this.onRightClick}
          label={headerLabel}
          leftIconDisabled={leftIconDisabled}
          rightIconDisabled={rightIconDisabled}
        />
        {Array.from(Array(noOfRows)).map((el, rowNum) => {
          const active =
            weekly &&
            getWeekFromRow(rowNum, month, year) === value.week() &&
            (moment(value)
              .startOf('week')
              .year() === year ||
              moment(value)
                .endOf('week')
                .year() === year);
          return (
            <StyledRowContainer key={rowNum} my={1} mx={2} active={active}>
              {getRows(rowNum + 1, col, this.itemRenderer(allDays))}
            </StyledRowContainer>
          );
        })}
      </FlexBox>
    );
  }
}

DailyRollup.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,
  min: PropTypes.object,
  max: PropTypes.object,
  weekly: PropTypes.bool,
  value: PropTypes.object,
  changeHeading: PropTypes.func,
  onSelection: PropTypes.func
};

DailyRollup.displayName = 'DailyRollup';

export default DailyRollup;
