import React from 'react';
import styled from 'styled-components';

const cleanComponentProps = (Component, blacklist = []) => {
  const removeBlackListProps = props => {
    const cleanedProps = blacklist.reduce((cProps, item) => {
      delete cProps[item];
      return cProps;
    }, Object.assign({}, props));

    return <Component {...cleanedProps} />;
  };

  return styled(removeBlackListProps);
};

export default cleanComponentProps;
