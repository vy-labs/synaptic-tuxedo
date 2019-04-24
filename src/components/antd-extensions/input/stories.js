import React from 'react';
import { Input, Box } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';
let inputVal = 'test';

class AutoCompleteWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '1234'
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    this.setState({
      inputVal: event.target.value
    });
  }

  render() {
    const { inputVal } = this.state;

    return (
      <div>
        <Box width='300px' mt={2}>
          Input Controlled
          <Input
            placeholder='Basic usage'
            value={inputVal}
            onChange={this.onSearch}
          />
        </Box>
        <Box width='300px' mt={2}>
          Input UnControlled with onchange and no value
          <Input
            placeholder='Basic usage'
            onChange={e => {
              console.log(e.target.value);
            }}
          />
        </Box>
        <Box width='300px' mt={2}>
          Input UnControlled with onchange not updating value
          <Input
            placeholder='Basic usage'
            value={'Testing'}
            onChange={e => {
              console.log(e.target.value);
            }}
          />
        </Box>
        <Box width='300px' mt={2}>
          Input UnControlled without onchange and value
          <Input placeholder='Basic usage' />
        </Box>
        <Box width='300px' mt={2}>
          DisabledCross
          <Input disableCross placeholder='Basic usage' />
        </Box>
      </div>
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

// function story() {
//   return (
//     <div>
//       <Box width='300px'>
//         <Input placeholder="Basic usage" />
//       </Box>
//       <Box width='300px' mt={2}>
//         <Input placeholder="Basic usage" size='small' />
//       </Box>
//       <Box width='300px' mt={2}>
//         <Input placeholder="Basic usage" size='large' />
//       </Box>
//       <Box width='300px' mt={2}>
//         <Input placeholder="Basic usage" defaultValue='large111' onChange={(e) => { console.log(e.target.value) }} />
//       </Box>
//       <Box width='300px' mt={2}>
//         Input uncontrolled
//         <Input placeholder="Basic usage" value={inputVal} onChange={(e) => { inputVal = console.log(e.target.value) || e.target.value }}  />
//       </Box>
//     </div>
//   );
// }

export default withInfo({
  text: 'Wrapper over antd Input'
})(story);
