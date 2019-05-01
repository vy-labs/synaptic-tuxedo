import { omit } from 'clean-tag';
import React from 'react';
import PropTypes from 'prop-types';

// Workaround for the bug: https://github.com/jxnblk/styled-system/issues/241
const cleanComponent = (Component, additionalBlackList = []) => {
  const CleanedComponent = ({ blacklist = [], ...props }) => (
    <Component {...omit(props, [...blacklist, 'is', ...additionalBlackList])} />
  );
  CleanedComponent.propTypes = {
    blacklist: PropTypes.any
  };
  return CleanedComponent;
};

export default cleanComponent;
