import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { joinStringsArr } from 'tuxedo/utils/stringUtils';

import Text from 'tuxedo/components/atoms/text';
import ErrorMessage from 'tuxedo/components/components/error-message';

import { getEntities } from './utilities';

const StyledText = styled(Text)`
  text-decoration: underline;
  cursor: pointer;
`;

export default class EntityLockedPanel extends Component {
  constructor(props) {
    super(props);
    this.handleAddToUniverse = this.handleAddToUniverse.bind(this);
  }

  handleAddToUniverse(app) {
    return () => {
      const { addToUniverse } = this.props;
      addToUniverse(app);
    };
  }

  joinEntitiesLocked(entities) {
    return entities.map((el, index) => {
      if (index === 0) {
        return (
          <StyledText
            key={el.id}
            fontWeight='bold'
            onClick={this.handleAddToUniverse(el)}
          >
            {el.name}
          </StyledText>
        );
      }
      if (index === entities.length - 1) {
        return (
          <React.Fragment>
            <Text> and </Text>
            <StyledText
              key={el.id}
              fontWeight='bold'
              onClick={this.handleAddToUniverse(el)}
            >
              {el.name}
            </StyledText>
          </React.Fragment>
        );
      }
      return (
        <React.Fragment>
          <Text>, </Text>
          <StyledText
            key={el.id}
            fontWeight='bold'
            onClick={this.handleAddToUniverse(el)}
          >
            {el.name}
          </StyledText>
        </React.Fragment>
      );
    });
  }

  render() {
    const { selectedModule, entities, statusKey, dimensions } = this.props;

    const moduleName = selectedModule || '';

    const {
      lockedEntities,
      fetchingEntities,
      disabledEntities,
      noDataEntities,
      messages
    } = getEntities({
      entities,
      statusKey,
      dimensions
    });

    const {
      disabledEntitiesMessage,
      fetchingEntitiesMessage,
      lockedEntitiesMessage,
      noDataEntitiesMessage
    } = messages;

    return (
      <React.Fragment>
        {lockedEntities.length > 0 &&
          Object.keys(lockedEntitiesMessage).map(el => {
            return (
              <ErrorMessage mb={1} variant='warn' key={`${el}_locked`}>
                <Text>{el}</Text>
                <Text>{moduleName || ''}</Text>
                <Text> - </Text>
                {this.joinEntitiesLocked(lockedEntitiesMessage[el])}
              </ErrorMessage>
            );
          })}
        {noDataEntities.length > 0 &&
          Object.keys(noDataEntitiesMessage).map(el => {
            return (
              <ErrorMessage mb={1} variant='warn' key={`${el}_nodata`}>
                <Text>{el}</Text>
                <Text>{moduleName || ''}</Text>
                <Text> - </Text>
                {joinStringsArr(
                  noDataEntitiesMessage[el].map(elem => elem.name)
                )}
              </ErrorMessage>
            );
          })}
        {fetchingEntities.length > 0 &&
          Object.keys(fetchingEntitiesMessage).map(el => {
            return (
              <ErrorMessage mb={1} variant='warn' key={`${el}_fetching`}>
                <Text>{moduleName || ''}</Text>
                <Text>{el}</Text>
                <Text> - </Text>
                {joinStringsArr(
                  fetchingEntitiesMessage[el].map(elem => elem.name)
                )}
              </ErrorMessage>
            );
          })}
        {disabledEntities.length > 0 &&
          Object.keys(disabledEntitiesMessage).map(el => {
            return (
              <ErrorMessage mb={1} variant='warn' key={`${el}_disabled`}>
                <Text>{el}</Text>
                <Text> - </Text>
                {joinStringsArr(
                  disabledEntitiesMessage[el].map(elem => elem.name)
                )}
              </ErrorMessage>
            );
          })}
      </React.Fragment>
    );
  }
}

EntityLockedPanel.getEntities = getEntities;

EntityLockedPanel.propTypes = {
  entities: PropTypes.array,
  selectedModule: PropTypes.object,
  statusKey: PropTypes.string,
  addToUniverse: PropTypes.func,
  dimensions: PropTypes.func
};
