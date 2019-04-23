import React from 'react';
import { AutoComplete } from 'antd';
import { safeGet, isValidPath } from 'utils/stringUtils';
import styled from 'styled-components';

import FlexBox from '../components/atoms/flexbox';
import Ellipsis from '../components/atoms/ellipsis';
import Ticker from '../components/components/ticker';
import AppIcon from '../components/components/app-icon';
import SvgIcon from '../components/components/svg-icon';

const { Option } = AutoComplete;

/* eslint-disable react/prop-types */

function renderStoreIcon(storeType) {
  if (storeType) {
    if (storeType === 'app_store') {
      return <SvgIcon type='appstore' height={2} />;
    }
    if (storeType === 'play_store') {
      return <SvgIcon type='playstore' height={2} />;
    }
  }
  return null;
}

const StyledAppIcon = styled(AppIcon)`
  flex-shrink: 0;
`;

function renderAutocompleteOption({
  opt,
  namePath,
  logoPath,
  storeTypePath,
  tickerPath,
  valuePath
}) {
  const value = String(safeGet(opt, valuePath));
  const logo = logoPath && safeGet(opt, logoPath);
  const name = namePath && safeGet(opt, namePath);
  const ticker = tickerPath && safeGet(opt, tickerPath);
  const storeType = storeTypePath && safeGet(opt, storeTypePath);
  return (
    <Option key={`option_${value}`} value={value} name={name} className='lg'>
      <FlexBox justifyContent='flex-start' alignItems='center'>
        {logoPath && (
          <StyledAppIcon
            src={logo || ''}
            width='24px'
            altIcon={{ name, size: 'medium', color: 'grey' }}
          />
        )}
        {namePath && (
          <Ellipsis width='100%' pl={2} pr={2}>
            {name}
            {ticker ? (
              <Ticker ml={2} size='small'>
                {ticker}
              </Ticker>
            ) : null}
          </Ellipsis>
        )}
        {storeTypePath && renderStoreIcon(storeType)}
      </FlexBox>
    </Option>
  );
}

function renderEntityAutoCompleteOption({
  opt,
  namePath,
  logoPath,
  storeTypePath,
  tickerPath,
  valuePath,
  width
}) {
  const value = String(safeGet(opt, valuePath));
  const dispLogo = isValidPath(opt, logoPath);
  const dispTicker = isValidPath(opt, tickerPath);
  const dispStoreType = storeTypePath && isValidPath(opt, storeTypePath);
  const logo = safeGet(opt, logoPath);
  const name = safeGet(opt, namePath);
  const ticker = safeGet(opt, tickerPath);
  const storeType = dispStoreType && safeGet(opt, storeTypePath);
  return (
    <Option key={`option_${value}`} value={value} name={name} className='lg'>
      <FlexBox justifyContent='flex-start' alignItems='center' width={width}>
        {dispLogo && (
          <StyledAppIcon
            src={logo || ''}
            width='24px'
            altIcon={{ name, size: 'medium', color: 'grey' }}
            mr={2}
          />
        )}
        {name && (
          <Ellipsis width='100%' pr={2}>
            {name}
            {dispTicker && ticker ? (
              <Ticker ml={2} size='small'>
                {ticker}
              </Ticker>
            ) : null}
          </Ellipsis>
        )}
        {dispStoreType && renderStoreIcon(storeType)}
      </FlexBox>
    </Option>
  );
}

export function renderEntityAutoCompleteOptions(props) {
  const {
    dataSource,
    searchVal,
    valuePath = ['entity_id'],
    namePath = ['display_name'],
    logoPath = ['entity_logo'],
    tickerPath = ['display_ticker'],
    storeTypePath = ['type'],
    searchLoading,
    width
  } = props;

  if (dataSource.length === 0 && searchVal && !searchLoading) {
    return [
      <Option disabled key='1' value='type' className='lg'>
        No results found
      </Option>
    ];
  }

  return dataSource.map(opt => renderEntityAutoCompleteOption({
    opt,
    namePath,
    logoPath,
    tickerPath,
    searchLoading,
    valuePath,
    storeTypePath,
    width
  }));
}

export default function renderAutoCompleteOptions(props) {
  const {
    dataSource,
    searchVal,
    valuePath = ['id'],
    namePath = ['name'],
    logoPath = ['logo'],
    storeTypePath = ['store', 'name'],
    tickerPath = ['ticker'],
    searchLoading
  } = props;

  if (dataSource.length === 0 && searchVal && !searchLoading) {
    return [
      <Option disabled key='1' value='type' className='lg'>
        No results found
      </Option>
    ];
  }
  return dataSource.map(opt => renderAutocompleteOption({
    opt,
    namePath,
    logoPath,
    storeTypePath,
    tickerPath,
    searchLoading,
    valuePath
  }));
}

/* eslint-enable react/prop-types */
