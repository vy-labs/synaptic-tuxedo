import React from 'react';
import { MultiSelect, Box } from 'tuxedo';
import LLMultiSelect from './ll-multi-select';
import { withInfo } from '@storybook/addon-info';

const options = Array(40)
  .fill()
  .map((v, i) => ({
    name: 'Options',
    id: i
  }));

function story() {
  const selectionDisplayList = (
    <LLMultiSelect.SelectionDisplayList
      selectedOptions={options}
      onRemove={console.log}
      labelKey='name'
    />
  );

  const toolbar = (
    <LLMultiSelect.Toolbar
      onSelectAllClick={console.log}
      onClearClick={console.log}
      onSearchChange={console.log}
      multiColumn
    />
  );

  const actionBar = (
    <LLMultiSelect.ActionBar onApply={console.log} onCancel={console.log} />
  );

  return (
    <Box>
      <Box mb={4}>
        <MultiSelect
          options={[options, options]}
          value={[1, 2, 4, 8]}
          onApply={console.log}
          onChange={console.log}
          labelKey='name'
          valueKey='id'
        />
      </Box>
      <Box>
        <LLMultiSelect
          selectionDisplayList={selectionDisplayList}
          toolbar={toolbar}
          actionBar={actionBar}
        >
          <LLMultiSelect.OptionsColumn
            options={options}
            labelKey='name'
            onChange={console.log}
          />
          <LLMultiSelect.OptionsColumn
            options={options}
            labelKey='name'
            onChange={console.log}
          />
        </LLMultiSelect>
      </Box>
    </Box>
  );
}

export default withInfo({
  propTables: [MultiSelect],
  propTablesExclude: [Box]
})(story);
