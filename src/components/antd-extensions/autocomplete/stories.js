import React, { Component, Fragment } from 'react';
import { AutoComplete, AntdIcon, Input } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

class AutoCompleteWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      cities: [
        'Jaipur',
        'Gurgaon',
        'Noida',
        'Mumbai',
        'Pune',
        'Bangalore',
        'Kasauli',
        'Kolkata',
        'Kanpur'
      ]
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(value) {
    const dataSource = this.state.cities.filter(item => {
      return value ? item.toLowerCase().indexOf(value) !== -1 : true;
    });

    this.setState({
      dataSource
    });
  }

  render() {
    const { dataSource } = this.state;

    return (
      <AutoComplete
        dataSource={dataSource}
        size='large'
        onSearch={this.onSearch}
      >
        <Input suffix={<AntdIcon type='search' />} />
      </AutoComplete>
    );
  }
}

function story() {
  return (
    <div style={{ background: '#f9f9f9', padding: '20px' }}>
      <AutoCompleteWrapper />
    </div>
  );
}

export default withInfo({
  propTables: [AutoComplete],
  propTablesExclude: [AutoCompleteWrapper]
})(story);
