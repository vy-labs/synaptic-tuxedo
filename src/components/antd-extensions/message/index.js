import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import styled from 'styled-components';
import { message as Message } from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';

const DefaultMessage = Message;

export default hoistNonReactStatics(DefaultMessage, Message);
