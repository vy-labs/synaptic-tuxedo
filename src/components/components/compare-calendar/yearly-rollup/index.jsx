import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { SingleEntity, RollupHeader, getRows } from '../shared';
import FlexBox from '../../../atoms/flexbox';
import Box from '../../../atoms/box';

const baseYear = moment().year();
const spanYears = 11;
const yearNames = Array.from(Array(spanYears))
  .map((el, ind) => baseYear - ind)
  .reverse();
function getLable() {
  return `${yearNames[0]}-${yearNames[spanYears - 1] % 100}`;
}

class YearlyRollup extends React.Component {
  constructor(props) {
    super(props);
    this.itemRenderer = this.itemRenderer.bind(this);
    this.onSelection = this.onSelection.bind(this);
  }

  onSelection(year) {
    const { onSelection } = this.props;
    return () => onSelection(moment({ year }));
  }

  itemRenderer(i) {
    if (i >= yearNames.length) {
      return null;
    }
    const { value, min, max } = this.props;
    const active = value.year() === yearNames[i];
    const currentDayMoment = moment({ year: yearNames[i] });
    const disabled =
      currentDayMoment.isBefore(min) || currentDayMoment.isAfter(max);
    return (
      <SingleEntity
        disabled={disabled}
        key={i}
        width='60px'
        label={yearNames[i]}
        active={active}
        onClick={this.onSelection(yearNames[i])}
      />
    );
  }

  render() {
    const cols = 3;
    const rows = Math.ceil(yearNames.length / cols);
    return (
      <FlexBox inline flexDirection='column' alignItems='center'>
        <RollupHeader label={getLable()} withIcon={false} />
        <Box>
          {Array.from(Array(rows)).map((el, rowNum) => (
            <FlexBox key={rowNum} my={1}>
              {getRows(rowNum + 1, cols, this.itemRenderer)}
            </FlexBox>
          ))}
        </Box>
      </FlexBox>
    );
  }
}

YearlyRollup.propTypes = {
  year: PropTypes.number,
  min: PropTypes.object,
  max: PropTypes.object,
  value: PropTypes.object,
  onSelection: PropTypes.func
};

YearlyRollup.displayName = 'YearlyRollup';

export default YearlyRollup;
