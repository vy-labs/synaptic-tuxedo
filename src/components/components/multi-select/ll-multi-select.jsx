import React from 'react';
import { themeGet } from 'styled-system';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Toolbar from './toolbar';
import OptionsColumn from './options';
import ActionBar from './action-bar';
import SelectionDisplayList from './selection-display-list';
import FlexBox from '../../atoms/flexbox';

const StyledMultiSelectContainer = styled(FlexBox)`
  overflow: hidden;
  border-radius: ${themeGet('radii.1')}px;
  max-height: ${props => themeGet('heights.1')(props) * (props.height || 45)}px;
  ${props =>
    props.height
      ? `height: ${themeGet('heights.1')(props) * props.height}px`
      : ''};
  box-shadow: ${themeGet('shadows.3')};
  background: ${themeGet('colors.white')};
`;

const StyledOverflowContainer = styled(FlexBox)`
  overflow: auto;
`;

export default function LLMultiSelect({
  children,
  selectionDisplayList,
  toolbar,
  actionBar,
  width,
  height
}) {
  return (
    <StyledMultiSelectContainer
      inline
      flexDirection='column'
      width={width}
      height={height}
    >
      <StyledOverflowContainer flex='1 1 auto'>
        <FlexBox
          flexDirection='column'
          flexWrap='nowrap'
          flex={1}
          // minWidth='200px'
        >
          {toolbar}
          <StyledOverflowContainer flex='1 1 auto'>
            {children}
          </StyledOverflowContainer>
        </FlexBox>
        {selectionDisplayList}
      </StyledOverflowContainer>
      {actionBar}
    </StyledMultiSelectContainer>
  );
}

LLMultiSelect.propTypes = {
  /** children for selection, use MultiSelect.OptionsColumn */
  children: PropTypes.node,
  /** Component for display list, use  MultiSelect.SelectionDisplayList */
  selectionDisplayList: PropTypes.node,
  /** Component for search and selection shortcuts, use MultiSelect.Toolbar */
  toolbar: PropTypes.node,
  /** Component for action footer, use MuliSelect.ActionBar */
  actionBar: PropTypes.node,
  /** width of tree select */
  width: PropTypes.string,
  /** height of tree select */
  height: PropTypes.string
};

LLMultiSelect.OptionsColumn = OptionsColumn;
LLMultiSelect.SelectionDisplayList = SelectionDisplayList;
LLMultiSelect.Toolbar = Toolbar;
LLMultiSelect.ActionBar = ActionBar;
