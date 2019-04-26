import React from 'react';
import FontIcon from 'tuxedo/components/atoms/font-icon';
import AntdIcon from 'tuxedo/components/antd-extensions/antd-icon';

import PropTypes from 'prop-types';

/**
 * copmonent to render either search icon or loading icon based on loading prop
 */
export default function RenderLoadingSearch({ loading, showSearch }) {
  if (!loading) {
    return showSearch ? <FontIcon size={2} type='icon-Search' /> : null;
  }
  return <AntdIcon type='loading' />;
}

RenderLoadingSearch.propTypes = {
  loading: PropTypes.bool.isRequired,
  showSearch: PropTypes.bool
};

RenderLoadingSearch.defaultProps = {
  showSearch: true
};
