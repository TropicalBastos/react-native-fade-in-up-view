# react-native-fade-in-up-view

> Fades in up any react native view

[![NPM](https://img.shields.io/npm/v/react-native-fade-in-up-view.svg)](https://www.npmjs.com/package/react-native-fade-in-up-view) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-native-fade-in-up-view
```

## Usage Example

```jsx
import React, { Component } from 'react'

import FadeInUpView from 'react-native-fade-in-up-view'

class Example extends Component {
  render () {
    return (
      <FadeInUpView>
        <MyOtherComponent />
      </FadeInUpView>
    )
  }
}
```

## Properties

The following are component specific properties of the FadeInUpView component
<br />
<ul>
  <li><strong>duration</strong>: duration of animation</li>
  <li><strong>position</strong>: starting position of component relative to its current position on the y-axis</li>
</ul>

## License

MIT © [TropicalBastos](https://github.com/TropicalBastos)
