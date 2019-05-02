<center><img src="./tuxedo_logo.png" /></center>

# Synaptic Tuxedo
Synaptic tuxedo is a [styled-components](https://www.styled-components.com/) based component library build on top of [ant-design](https://ant.design/). If you have no prior exposure to styled components, kindly go through their documentation.

## Features
 - Inherent support for design-systems. Implement your own with ease.
 - Base elements like Box, FlexBox, Text etc straight out of the box.
 - Implements most major UI components. For complete list of components, visit [Tuxedo-storybook](https://tuxedo.synaptic.com/).
 - Comes bundled with a default theme and also contains support for a custom theme.
 - Flexible & composable.
 - Built on top of ant-design and uses styled-components.

## Documentation and Examples
[Synaptic tuxedo storybook](https://tuxedo.synaptic.com/)

## Getting Started

Installing `synaptic-tuxedo`
```
// NPM
npm install synaptic-tuxedo --save

// Yarn
yarn add synaptic-tuxedo
```

## Usage

```
import React from 'react'
import ReactDOM from 'react-dom'
import { Box, FlexBox } from 'synaptic-tuxedo'

ReactDOM.render(
  <Box>I am using Synaptic-tuxedo!</Box>,
  document.getElementById('root')
)
```

### Using default theme
#### Step 1
Import default tuxedo theme which contains overrides for antd `less` variables
```
// ES6
import antdTheme from 'synaptic-tuxedo/lib/theme/index.antd';

// ES5
const antdTheme = require('synaptic-tuxedo/lib/theme/index.antd');
```

Follow the steps mentioned at [antd/customize-theme](https://ant.design/docs/react/customize-theme) and then in your webpack.config or config-overrides, use:

```
modifyVars: antdTheme()
```
#### Step 2
Use `Provider` at the start of your project.

```
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, Box, FlexBox } from 'synaptic-tuxedo'

ReactDOM.render(
  <Provider>
    <Box>I am using Synaptic-tuxedo!</Box>
  </Provider>,
  document.getElementById('root')
)
```

## Custom Theme
As mentioned above, synaptic-tuxedo offers support for custom design-system and theming.

#### Step 1
Pass a custom theme object as a prop to `Provider`

```
import myTheme from './theme';
<Provider theme={myTheme}>
...
</Provider>
```

#### Step 2
For theming antd, pass your theme as an argument to `antdTheme`
```
modifyVars: antdTheme(myTheme)
```

## Built With
* [React](https://reactjs.org/)
* [Styled Components](https://www.styled-components.com/)
* [Ant Design](https://ant.design/)

## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/vy-labs/synaptic-tuxedo/tags).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

