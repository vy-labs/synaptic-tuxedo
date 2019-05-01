import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import styled from 'styled-components';
import { notification as Notification } from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';

const DefaultNotification = Notification;

export default hoistNonReactStatics(DefaultNotification, Notification);
