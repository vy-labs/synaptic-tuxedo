import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import styled from 'styled-components';
import { Collapse } from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';

const StyledCollapse = styled(Collapse)`
  background: transparent;
  border: none;

  .ant-collapse-item {
    border: none;

    &.ant-collapse-no-arrow {
      .ant-collapse-header {
        padding: 0;
        line-height: initial;
      }
    }
  }
  .ant-collapse-content {
    border: none;
  }
`;

export default hoistNonReactStatics(StyledCollapse, Collapse);
