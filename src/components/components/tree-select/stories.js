import React from 'react';
import { TreeSelect } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0'
      }
    ]
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0'
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1'
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2'
      }
    ]
  },
  {
    title: 'Node3',
    value: '0-2',
    key: '0-2',
    children: [
      {
        title: 'Child Node6',
        value: '0-2-0',
        key: '0-2-0'
      }
    ]
  }
];

class TreeSelectStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ['0-0']
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange({ value }) {
    this.setState({ value });
  }
  render() {
    const { value } = this.state;
    return (
      <TreeSelect
        data={treeData}
        value={value}
        valueKey='value'
        labelKey='title'
        onChange={this.onChange}
        size='small'
      />
    );
  }
}

function story() {
  return <TreeSelectStory />;
}

export default withInfo({
  propTables: [TreeSelect],
  propTablesExclude: [TreeSelectStory]
})(story);
