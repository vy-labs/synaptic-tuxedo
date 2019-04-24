import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { themeGet } from 'styled-system';
import isEqualProps from 'tuxedo/utils/isEqualProps';
import cleanComponentProps from 'tuxedo/utils/cleanComponentProps';
import shouldComponentUpdateLodash from 'tuxedo/utils/shouldComponentUpdateLodash';
import PropTypes from 'prop-types';
import Rollup from './rollup';
import QuickLinks from './quick-links';
import ActionFooter from './action-footer';
import { rollupComponentMap } from './shared/constants';
import FlexBox from '../../atoms/flexbox';

const DEFAULT_SELECTED_ROLLUP = 'month';

const StyledCompareCalendarContainer = styled(FlexBox)`
  box-shadow: ${themeGet('shadows.3')};
  border-radius: ${themeGet('radii.1')}px;
  background-color: ${themeGet('colors.white')};
`;

const StyledRollupContainer = cleanComponentProps(FlexBox, ['showBorder'])`
  position: relative;
  height: 100%;
  ${props =>
    props.showBorder &&
    `border-bottom: 1px solid ${themeGet('colors.border.default')(props)}`};
`;

const StyledvsDivider = styled.span`
  position: absolute;
  left: 50%;
  width: 1px;
  transform: translateX(-50%);
  background-color: ${themeGet('colors.grey.2')};
  height: 100%;
  ::before {
    content: 'VS';
    color: ${themeGet('colors.text.light')};
    display: flex;
    justify-content: center;
    font-weight: ${themeGet('fontWeights.semibold')};
    font-size: ${themeGet('fontSizes.1')}px;
    align-items: center;
    background-color: ${themeGet('colors.grey.2')};
    position: absolute;
    width: ${themeGet('heights.4')}px;
    height: ${themeGet('heights.4')}px;
    transform: translateX(-50%);
  }
`;

const defaultConfig = Object.keys(rollupComponentMap).reduce((acc, rollup) => {
  const {
    defaultState,
    getPreviousEntity,
    getNextEntity,
    getMutationObject
  } = rollupComponentMap[rollup];
  acc[rollup] = {
    ...rollupComponentMap[rollup],
    one: {
      ...defaultState,
      min: getNextEntity(defaultState.min)
    },
    two: {
      ...defaultState,
      ...getMutationObject(getPreviousEntity(defaultState.selected)),
      max: getPreviousEntity(defaultState.max)
    }
  };
  return acc;
}, {});

class CompareCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRollup: DEFAULT_SELECTED_ROLLUP,
      prevSelectedRollup: DEFAULT_SELECTED_ROLLUP,
      ...defaultConfig,
      prevConfig: defaultConfig
    };
    this.handleRollupChange = this.handleRollupChange.bind(this);
    this.onSelection = this.onSelection.bind(this);
    this.changeHeading = this.changeHeading.bind(this);
    this.onQuickLinksClick = this.onQuickLinksClick.bind(this);
  }

  shouldComponentUpdate = shouldComponentUpdateLodash;

  onSelection(statePart) {
    return componentNo => selected => {
      this.updateStatePart(statePart, componentNo, { selected });
      if (componentNo === 'one') {
        const { config } = this.props;
        const { getMutationObject, getPreviousEntity } = config[statePart];
        this.updateStatePart(statePart, 'two', {
          max: getPreviousEntity(selected)
        });
        const selectedTwo = this.getComponentState('two').selected;
        if (selectedTwo.isAfter(selected) || selectedTwo.isSame(selected)) {
          const mutationObject = getMutationObject(getPreviousEntity(selected));
          this.updateStatePart(statePart, 'two', mutationObject);
        }
      }
    };
  }

  onQuickLinksClick(statePart) {
    return quickLink => {
      const { config } = this.props;
      const { getMutationObject } = config[statePart];
      const calendarOne = this.getComponentState('one');
      this.updateStatePart(
        statePart,
        'one',
        getMutationObject(calendarOne.selected)
      );
      const targetDate = quickLink.getTargetDate(calendarOne.selected);
      const mutationObjectTwo = getMutationObject(targetDate);
      this.updateStatePart(statePart, 'two', mutationObjectTwo);
    };
  }

  static getDerivedStateFromProps(
    { config = defaultConfig, selectedRollup = DEFAULT_SELECTED_ROLLUP },
    prevState
  ) {
    if (
      !isEqualProps(config, prevState.prevConfig) ||
      !isEqualProps(selectedRollup, prevState.prevSelectedRollup)
    ) {
      return {
        ...config,
        selectedRollup,
        prevConfig: config,
        prevSelectedRollup: selectedRollup
      };
    }

    return null;
  }

  getComponentState(componentNo) {
    const { selectedRollup } = this.state;
    return this.state[selectedRollup][componentNo];
  }

  handleRollupChange(tab) {
    return () => {
      const { onRollupChange } = this.props;
      const rollup = tab.value;

      onRollupChange && onRollupChange(rollup);
      this.setState({ selectedRollup: rollup });
    };
  }

  changeHeading(statePart) {
    return componentNo => stateUpdate => {
      this.updateStatePart(statePart, componentNo, stateUpdate);
    };
  }

  updateStatePart(statePart, componentNo, stateChange) {
    this.setState(state => ({
      [statePart]: {
        ...state[statePart],
        [componentNo]: {
          ...state[statePart][componentNo],
          ...stateChange
        }
      }
    }));
  }

  render() {
    const { onApply, onCancel, config } = this.props;
    const { selectedRollup } = this.state;
    const { getSelectionDisplayText, getRequiredData, quickLinks } = config[
      selectedRollup
    ];
    const propDataOne = getRequiredData(this.getComponentState('one'));
    const propDataTwo = getRequiredData(this.getComponentState('two'));
    const RollUpComponent = config[selectedRollup].render;
    return (
      <StyledCompareCalendarContainer flexDirection='column' inline>
        <FlexBox>
          <Rollup
            selectedRollup={selectedRollup}
            onRollupChange={this.handleRollupChange}
            rollupComponentMap={config}
          />
          <FlexBox flexDirection='column'>
            <StyledRollupContainer showBorder={!!quickLinks}>
              <FlexBox justifyContent='center'>
                <RollUpComponent
                  changeHeading={this.changeHeading(selectedRollup)('one')}
                  {...propDataOne}
                  onSelection={this.onSelection(selectedRollup)('one')}
                />
              </FlexBox>
              <FlexBox justifyContent='center'>
                <RollUpComponent
                  changeHeading={this.changeHeading(selectedRollup)('two')}
                  {...propDataTwo}
                  onSelection={this.onSelection(selectedRollup)('two')}
                />
              </FlexBox>
              <StyledvsDivider />
            </StyledRollupContainer>
            {!!quickLinks && (
              <QuickLinks
                quickLinks={quickLinks}
                selected={propDataOne.value}
                min={propDataTwo.min}
                onClick={this.onQuickLinksClick(selectedRollup)}
              />
            )}
          </FlexBox>
        </FlexBox>
        <ActionFooter
          selectionLabelOne={getSelectionDisplayText(propDataOne.value)}
          selectionLabelTwo={getSelectionDisplayText(propDataTwo.value)}
          selectedRollup={selectedRollup}
          selectedOne={propDataOne.value}
          selectedTwo={propDataTwo.value}
          onApply={onApply}
          onCancel={onCancel}
        />
      </StyledCompareCalendarContainer>
    );
  }
}

CompareCalendar.displayName = 'LLCompareCalendar';
CompareCalendar.config = rollupComponentMap;

CompareCalendar.propTypes = {
  /** function gets called when apply button is clicked */
  onApply: PropTypes.func,
  /** invoked on cancel click */
  onCancel: PropTypes.func,

  /** invoked on rollup change */
  onRollupChange: PropTypes.func,
  /** config to update state */
  config: PropTypes.object,
  /** selected rollup */
  selectedRollup: PropTypes.oneOf(Object.keys(rollupComponentMap))
};

CompareCalendar.defaultProps = {
  selectedRollup: DEFAULT_SELECTED_ROLLUP,
  config: defaultConfig
};

export default CompareCalendar;
