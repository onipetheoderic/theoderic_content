# theoderic_content

> a package for beautifying contents, Any google font is accepted, just type it in the googleFont Property field, Enjoy,

[![NPM](https://img.shields.io/npm/v/theoderic_content.svg)](https://www.npmjs.com/package/theoderic_content) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save theoderic_content
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'theoderic_content'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```
## Example Usage
```jsx
import React, { Component } from 'react'

import ExampleComponent from 'theoderic_content'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' 
        size={20} 
        marginTop = {20}
    marginBottom= {10}
    marginLeft= {10}
    marginRight= {10}
    paddingLeft= {10}
    paddingRight= {10}
    paddingTop= {10}
    paddingBottom = {5}
    fontStyle="italic"
    smallCaps={true}
    googleFont="Baumans"/>
      </div>
    )
  }
}
```
## List of Props
	text: PropTypes.string,
	size: PropTypes.number,
	marginTop: PropTypes.number,
	marginBottom: PropTypes.number,
	marginLeft: PropTypes.number,
	marginRight: PropTypes.number,
	paddingLeft: PropTypes.number,
	paddingRight: PropTypes.number,
	paddingTop: PropTypes.number,
	paddingBottom: PropTypes.number,
	fontStyle: PropTypes.string,
	smallCaps: PropTypes.bool,
	googleFont: PropTypes.string 


## License

MIT © [onipetheoderic](https://github.com/onipetheoderic)
