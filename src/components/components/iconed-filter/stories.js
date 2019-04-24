import React from 'react';
import { Box, Text, CompareCalendar, IconedFilter } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';
import ContentDropdown from './dropdown';
import _ from 'lodash';

const items = [
  {
    key: '1',
    label: 'option 1'
  },
  {
    key: '2',
    label: 'option 2'
  },
  {
    key: '3',
    label: 'option 3'
  },
  {
    key: '4',
    label: 'option 4'
  }
];

function getInitialValue(config) {
  const {
    defaultState,
    getSelectionDisplayText,
    getPreviousEntity
  } = config.month;
  const labelOne = getSelectionDisplayText(defaultState.selected);
  const labelTwo = getSelectionDisplayText(
    getPreviousEntity(defaultState.selected)
  );
  return `Monthly | ${labelOne} vs ${labelTwo}`;
}

class CompareCalendarDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.onVisibleChange = this.onVisibleChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onApply = this.onApply.bind(this);
    this.state = {
      visible: false,
      value: getInitialValue(CompareCalendar.config)
    };
  }

  onApply(selection) {
    const { selectedRollup, selectedOne, selectedTwo } = selection;
    const { getSelectionDisplayText } = CompareCalendar.config[selectedRollup];
    const labelOne = getSelectionDisplayText(selectedOne);
    const labelTwo = getSelectionDisplayText(selectedTwo);
    const value = `${_.capitalize(
      selectedRollup
    )} | ${labelOne} vs ${labelTwo}`;
    this.setState({ value, visible: false });
  }

  onVisibleChange(visible) {
    this.setState({ visible });
  }

  onCancel() {
    this.onVisibleChange(false);
  }

  render() {
    const overlay = (
      <CompareCalendar onApply={this.onApply} onCancel={this.onCancel} />
    );
    const { visible, value } = this.state;
    const body = (
      <ContentDropdown
        value={value}
        maxWidth='263px'
        overlay={overlay}
        visible={visible}
        onVisibleChange={this.onVisibleChange}
      />
    );
    return (
      <IconedFilter.Content label='Umbrella' body={body} maxWidth='263px' />
    );
  }
}

class MenuIconedFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: items[0]
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(value) {
    this.setState({ value });
  }
  render() {
    const body = (
      <ContentDropdown
        value={this.state.value}
        onClick={this.onClick}
        items={items}
      />
    );
    return <IconedFilter.Content label='Umbrella' body={body} />;
  }
}

const story = () => {
  return (
    <div>
      <Box my={4}>
        <Text fontSize={3}> Multiple dropdowns </Text>
        <IconedFilter iconType='twitterSVG'>
          <MenuIconedFilter />
          <MenuIconedFilter />
          <MenuIconedFilter />
          <MenuIconedFilter />
          <MenuIconedFilter />
        </IconedFilter>
      </Box>
      <Box my={4}>
        <Text fontSize={3}> Single dropdown </Text>
        <IconedFilter iconType='twitterSVG'>
          <MenuIconedFilter />
        </IconedFilter>
      </Box>
      <Box my={4}>
        <Text fontSize={3}> Custom overlay dropdown </Text>
        <IconedFilter iconType='twitterSVG'>
          <CompareCalendarDropDown />
        </IconedFilter>
      </Box>
    </div>
  );
};

export default withInfo({
  text: `
  create filter dropdowns, refer to analytics for examples
  ~~~js
  import React from 'react';
  import { Box, Text, CompareCalendar, IconedFilter } from 'tuxedo';
  import { withInfo } from '@storybook/addon-info'
  import _ from 'lodash';

  const items = [
    {
      key: '1',
      label: 'option 1'
    },
    {
      key: '2',
      label: 'option 2'
    },
    {
      key: '3',
      label: 'option 3'
    },
    {
      key: '4',
      label: 'option 4'
    }
  ]

  function getInitialValue(config) {
    const {defaultState, getSelectionDisplayText, getPreviousEntity} = config.monthly;
    const labelOne = getSelectionDisplayText(defaultState.selected);
    const labelTwo = getSelectionDisplayText(getPreviousEntity(defaultState.selected));
    return \`Monthly | \${labelOne} vs \${labelTwo}\`;
  }

  class CompareCalendarDropDown extends React.Component {
    constructor(props) {
      super(props);
      this.onVisibleChange = this.onVisibleChange.bind(this);
      this.onCancel = this.onCancel.bind(this);
      this.onApply = this.onApply.bind(this);
      this.state = {
        visible: false,
        value: getInitialValue(CompareCalendar.config)
      }
    }

    onApply(selection) {
      const { selectedRollup, selectedOne, selectedTwo } = selection;
      const { getSelectionDisplayText } = CompareCalendar.config[selectedRollup];
      const labelOne = getSelectionDisplayText(selectedOne);
      const labelTwo = getSelectionDisplayText(selectedTwo);
      const value = \`\${_.capitalize(selectedRollup)} | \${labelOne} vs \${labelTwo}\`;
      this.setState({ value, visible: false });
    }

    onVisibleChange(visible) {
      this.setState({visible});
    }

    onCancel() {
      this.onVisibleChange(false);
    }

    render() {
      const overlay= <CompareCalendar onApply={this.onApply} onCancel={this.onCancel} />;
      const { visible, value } = this.state;
      return (
        <IconedFilter.Content
          label='Umbrella'
          value={value}
          maxWidth='263px'
          overlay={overlay}
          visible={visible}
          onVisibleChange={this.onVisibleChange}
        />
      );
    }
  }

  class MenuIconedFilter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: items[0]
      }
      this.onClick = this.onClick.bind(this);
    }
    onClick(value) {
      this.setState({value});
    }
    render() {
      return <IconedFilter.Content label='Umbrella' items={items} value={this.state.value} onClick={this.onClick}/>
    }
  }

  const story = () => {
    return ( 
      <div>
        <Box my={4}>
          <Text fontSize={3}> Multiple dropdowns </Text>
          <IconedFilter iconType='twitterSVG'>
            <MenuIconedFilter />
            <MenuIconedFilter />
            <MenuIconedFilter />
            <MenuIconedFilter />
            <MenuIconedFilter />
          </IconedFilter>
        </Box>
        <Box my={4}>
          <Text fontSize={3}> Single dropdown </Text>
          <IconedFilter iconType='twitterSVG'>
            <MenuIconedFilter />
          </IconedFilter>
        </Box>
        <Box my={4}>
          <Text fontSize={3}> Custom overlay dropdown </Text>
          <IconedFilter iconType='twitterSVG'>
            <CompareCalendarDropDown />
          </IconedFilter>
        </Box>
      </div>
    );
  };
  ~~~
  `,
  source: false,
  propTables: [IconedFilter.Content],
  propTablesExclude: [Text, CompareCalendarDropDown, MenuIconedFilter, Box]
})(story);
