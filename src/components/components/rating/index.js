import React from 'react';
import PropTypes from 'prop-types';
import FlexBox from '../../atoms/flexbox';
// import SvgIcon from '../../components/svg-icon';
import FontIcon from '../../atoms/font-icon';

const VARIANTS = {
  default: {
    selected: 'green.6',
    unselected: 'grey.3'
  }
};

/** display a rating component */
function Rating({ max = 5, rating = 0, size = 2, variant = 'default' }) {
  const stars = Array.from(Array(max)).map((elem, index) => {
    const starColor =
      index < rating
        ? VARIANTS[variant].selected
        : VARIANTS[variant].unselected;
    return (
      <FontIcon key={index} size={size} color={starColor} type='icon-Star' />
    );
  });

  return <FlexBox inline>{stars}</FlexBox>;
}

Rating.defaultProps = {
  max: 5,
  rating: 0,
  variant: 'default',
  size: 2
};

Rating.displayName = 'Rating';

Rating.propTypes = {
  /** max allowed rating */
  max: PropTypes.number,
  /** rating out of  max rating */
  rating: PropTypes.number,
  /** variant currently support selected and unselected stars' color */
  variant: PropTypes.string,
  /** size in number from the range [0, 1, 2] */
  size: PropTypes.number
};

export default Rating;
