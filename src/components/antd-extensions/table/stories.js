import React, { Fragment } from 'react';
import { Table, Mono, Box, Sorter } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

const columns = [
  {
    title: <Sorter name='name' />,
    dataIndex: 'name',
    key: 'name',
    render: text => <a href='#'>{text}</a>
  },
  {
    title: 'Age',
    className: 'right',
    dataIndex: 'age',
    key: 'age',
    render: text => <Mono>{text}</Mono>
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href='#'>Invite {record.name}</a>
      </span>
    )
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }
];

const columns2 = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: 100,
  fixed: 'left',
  filters: [{
    text: 'Joe',
    value: 'Joe',
  }, {
    text: 'John',
    value: 'John',
  }],
  onFilter: (value, record) => record.name.indexOf(value) === 0,
}, {
  title: 'Other',
  children: [{
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 200,
    sorter: (a, b) => a.age - b.age,
  }, {
    title: 'Address',
    children: [{
      title: 'Street',
      dataIndex: 'street',
      key: 'street',
      width: 200,
    }, {
      title: 'Block',
      children: [{
        title: 'Building',
        dataIndex: 'building',
        key: 'building',
        width: 100,
      }, {
        title: 'Door No.',
        dataIndex: 'number',
        key: 'number',
        width: 100,
      }],
    }],
  }],
}, {
  title: 'Company',
  children: [{
    title: 'Company Address',
    dataIndex: 'companyAddress',
    key: 'companyAddress',
  }, {
    title: 'Company Name',
    dataIndex: 'companyName',
    key: 'companyName',
  }],
}, {
  title: 'Gender',
  dataIndex: 'gender',
  key: 'gender',
  width: 80,
  fixed: 'right',
}];

const data2 = [];
for (let i = 0; i < 100; i++) {
  data2.push({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M',
  });
}

function story() {
  return (
    <div>
      <Box my={2}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </Box>

      <Table
        columns={columns2}
        dataSource={data2}
        bordered
        size="middle"
        scroll={{ x: '130%', y: 240 }}
      />
    </div>
  );
}

export default withInfo({
  propTablesExclude: [Box]
})(story);
