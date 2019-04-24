import _ from 'lodash';
import { safeGet } from 'tuxedo/utils/stringUtils';

function getDimensionValues({ dimensions, entity, statusKey, key, idKey }) {
  return dimensions.map(dimension => {
    const selectedDimension = entity[`${entity[idKey]}_${dimension.valueKey}`];
    let selectedDimensionObj;
    if (selectedDimension) {
      selectedDimensionObj = entity[dimension.key].find(
        el => String(el[dimension.valueKey]) === String(selectedDimension)
      );
    } else if (entity[dimension.key] && entity[dimension.key].length > 0) {
      selectedDimensionObj =
        entity[dimension.key].find(el => el.default) ||
        entity[dimension.key][0];
    } else {
      selectedDimensionObj = null;
    }
    if (selectedDimensionObj) {
      return safeGet(entity, [
        statusKey,
        dimension.subKey,
        selectedDimensionObj.id,
        key
      ]);
    }
    return '';
  });
}

function checkForDimensionalDataSanity(dimensions, entity, statusKey, idKey) {
  return dimensions.map(dimension => {
    const selectedDimension = entity[`${entity[idKey]}_${dimension.valueKey}`];
    let selectedDimensionObj;
    if (selectedDimension) {
      selectedDimensionObj = entity[dimension.key].find(
        el => String(el[dimension.valueKey]) === String(selectedDimension)
      );
    }
    if (selectedDimensionObj) {
      let hasData = true;
      if (
        Object.hasOwnProperty.call(
          safeGet(entity, [
            statusKey,
            dimension.subKey,
            selectedDimensionObj.id
          ]) || {},
          'countries'
        )
      ) {
        hasData =
          hasData &&
          entity[statusKey][dimension.subKey][selectedDimensionObj.id].countries
            .length === 0;
      }
      hasData =
        hasData &&
        safeGet(entity, [
          statusKey,
          dimension.subKey,
          selectedDimensionObj.id,
          'fetch_attempted'
        ]);
      return !hasData;
    }
    if (Object.hasOwnProperty.call(entity, dimension.key)) {
      return entity[dimension.key].length === 0;
    }
    return true;
  });
}

export function getEntities(props = {}) {
  const { entities = [], statusKey, dimensions, idKey = 'id' } = props;

  const isDimensionalData = dimensions && dimensions.length > 0;
  let adjustedDimensions;
  if (isDimensionalData) {
    const entityKeys = entities.length > 0 ? Object.keys(entities[0]) : [];
    const validDimensions = dimensions.filter(
      el => entityKeys.indexOf(el.key) > 0
    );
    adjustedDimensions = validDimensions.map(el => ({
      ...el,
      subKey: `${el.key}_${statusKey}`
    }));
  }

  let lockedEntities;
  let fetchingEntities;
  let disabledEntities;
  let noDataEntities;
  let disabledEntitiesMessage;
  let fetchingEntitiesMessage;
  let lockedEntitiesMessage;
  let noDataEntitiesMessage;

  if (isDimensionalData) {
    const disabledEntitiesGlobal = entities.filter(entity => {
      return entity[statusKey].disabled || entity[statusKey].tab_disabled;
    });
    const disabledEntitiesMessageGlobal = _.groupBy(
      disabledEntitiesGlobal,
      entity => entity[statusKey].message
    );

    const disabledEntitiesDimension = entities
      .filter(
        entity =>
          disabledEntitiesGlobal.map(el => el[idKey]).indexOf(entity[idKey]) ===
          -1
      )
      .filter(entity => {
        const dimensionValues = getDimensionValues({
          dimensions: adjustedDimensions,
          entity,
          statusKey,
          key: 'disabled',
          idKey
        });
        return dimensionValues.reduce((prev, el) => prev || el, false);
      });

    const disabledEntitiesDimensionMessage = _.groupBy(
      disabledEntitiesDimension,
      entity =>
        getDimensionValues({
          dimensions: adjustedDimensions,
          entity,
          statusKey,
          key: 'message',
          idKey
        })
    );

    disabledEntities = [
      ...disabledEntitiesGlobal,
      ...disabledEntitiesDimension
    ];
    disabledEntitiesMessage = _.merge(
      disabledEntitiesMessageGlobal,
      disabledEntitiesDimensionMessage
    );

    fetchingEntities = entities
      .filter(
        entity =>
          disabledEntities.map(el => el[idKey]).indexOf(entity[idKey]) === -1
      )
      .filter(entity => {
        const dimensionValues = getDimensionValues({
          dimensions: adjustedDimensions,
          entity,
          statusKey,
          key: 'fetching',
          idKey
        });
        return dimensionValues.reduce((prev, el) => prev || el, false);
      });

    fetchingEntitiesMessage = _.groupBy(fetchingEntities, entity =>
      getDimensionValues({
        dimensions: adjustedDimensions,
        entity,
        statusKey,
        key: 'message',
        idKey
      })
    );

    lockedEntities = entities
      .filter(
        entity =>
          disabledEntities.map(el => el[idKey]).indexOf(entity[idKey]) === -1
      )
      .filter(
        entity =>
          fetchingEntities.map(el => el[idKey]).indexOf(entity[idKey]) === -1
      )
      .filter(entity => {
        const dimensionValues = getDimensionValues({
          dimensions: adjustedDimensions,
          entity,
          statusKey,
          key: 'locked',
          idKey
        });
        return dimensionValues.reduce((prev, el) => prev || el, false);
      });

    lockedEntitiesMessage = _.groupBy(lockedEntities, entity =>
      getDimensionValues({
        dimensions: adjustedDimensions,
        entity,
        statusKey,
        key: 'message',
        idKey
      })
    );

    noDataEntities = entities
      .filter(
        entity =>
          disabledEntities.map(el => el[idKey]).indexOf(entity[idKey]) === -1
      )
      .filter(
        entity =>
          lockedEntities.map(el => el[idKey]).indexOf(entity[idKey]) === -1
      )
      .filter(
        entity =>
          fetchingEntities.map(el => el[idKey]).indexOf(entity[idKey]) === -1
      )
      .filter(entity => {
        const dimensionValues = checkForDimensionalDataSanity(
          adjustedDimensions,
          entity,
          statusKey,
          idKey
        );
        return dimensionValues.reduce((prev, el) => prev || el, false);
      });

    noDataEntitiesMessage = _.groupBy(noDataEntities, entity =>
      getDimensionValues({
        dimensions: adjustedDimensions,
        entity,
        statusKey,
        key: 'message',
        idKey
      })
    );
  } else {
    disabledEntities = entities.filter(el => {
      return statusKey
        ? el[statusKey].disabled || el[statusKey].tab_disabled
        : el.disabled || el.tab_disabled;
    });
    fetchingEntities = entities
      .filter(
        entity =>
          disabledEntities.map(el => el[idKey]).indexOf(entity[idKey]) === -1
      )
      .filter(el => (statusKey ? el[statusKey].fetching : el.fetching));
    lockedEntities = entities
      .filter(
        entity =>
          disabledEntities.map(el => el[idKey]).indexOf(entity[idKey]) === -1
      )
      .filter(
        entity =>
          fetchingEntities.map(el => el[idKey]).indexOf(entity[idKey]) === -1
      )
      .filter(el => (statusKey ? el[statusKey].locked : el.locked));

    noDataEntities = entities
      .filter(
        entity =>
          disabledEntities.map(el => el[idKey]).indexOf(entity[idKey]) === -1
      )
      .filter(
        entity =>
          fetchingEntities.map(el => el[idKey]).indexOf(entity[idKey]) === -1
      )
      .filter(
        entity =>
          lockedEntities.map(el => el[idKey]).indexOf(entity[idKey]) === -1
      )
      .filter(el =>
        statusKey ? el[statusKey].fetch_attempted : el.fetch_attempted
      )
      .filter(el => {
        if (Object.hasOwnProperty.call(el, 'geo_domains')) {
          return el.geo_domains.length === 0;
        }
        if (
          Object.hasOwnProperty.call(el, statusKey) &&
          Object.hasOwnProperty.call(el[statusKey], 'countries')
        ) {
          return el[statusKey].countries.length === 0;
        }
        return false;
      });

    disabledEntitiesMessage = _.groupBy(disabledEntities, el =>
      statusKey ? el[statusKey].message : el.message
    );
    fetchingEntitiesMessage = _.groupBy(fetchingEntities, el =>
      statusKey ? el[statusKey].message : el.message
    );
    lockedEntitiesMessage = _.groupBy(lockedEntities, el =>
      statusKey ? el[statusKey].message : el.message
    );
    noDataEntitiesMessage = _.groupBy(noDataEntities, el =>
      statusKey ? el[statusKey].message : el.message
    );
  }
  const validEntities = entities
    .filter(
      entity =>
        disabledEntities.map(el => el[idKey]).indexOf(entity[idKey]) === -1
    )
    .filter(
      entity =>
        lockedEntities.map(el => el[idKey]).indexOf(entity[idKey]) === -1
    )
    .filter(
      entity =>
        fetchingEntities.map(el => el[idKey]).indexOf(entity[idKey]) === -1
    )
    .filter(
      entity =>
        noDataEntities.map(el => el[idKey]).indexOf(entity[idKey]) === -1
    );

  return {
    lockedEntities,
    fetchingEntities,
    disabledEntities,
    noDataEntities,
    validEntities,
    messages: {
      disabledEntitiesMessage,
      fetchingEntitiesMessage,
      lockedEntitiesMessage,
      noDataEntitiesMessage
    }
  };
}
