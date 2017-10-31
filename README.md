# Simple React Snippets

The essential collection of React Snippets.

![snippets in action](images/snippets-in-action.gif)

## Features

Only what you need and nothing more. **No Redux. No React Native.** 

Simply, simple React snippets. 

These snippets were selected carefully from my own day-to-day React use. Not everything in React is included here. This is a hand selected set of snippets that work the way that you would expect, not just a copy of the documentation.

## Snippets


| Snippet                | Renders           |
| ---------------------- | ------------------- |
| `imr`                  | Import React |
| `imrc`                 | Import React / Component |
| `impt`                 | Import PropTypes |
| `cc`                   | Class Component |
| `ccc`                  | Class Component With Constructor |
| `sfc`                  | Stateless Function Component |
| `cdm`                  | componentDidMount |
| `cwm`                  | componentWillMount |
| `cwrp`                 | componentWillReceiveProps |
| `scu`                  | shouldComponentUpdate  |
| `cwu`                  | componentWillUpdate |
| `cdu`                  | componentDidUpdate |
| `cwu`                  | componentWillUpdate |
| `cdc`                  | componentDidCatch |
| `ss`                   | setState |
| `ren`                  | render |

## Full Expansions

### imr - Import React
```javascript
import React from 'react';
```
### imrc - Import React, Component
```javascript
import React, { Component } from 'react';
```
### impt - Import PropTypes
```javascript
import PropTypes from 'prop-types';
```

### cc - Class Component
```javascript
class | extends Component {
  state = { | },
  render() {
    return ( | );
  }
}

export default |;
```

### ccc - Class Component With State
```javascript
class | extends Component {
  constructor(props) {
    super(props);
    this.state = { | };
  }
  render() {
    return ( | );
  }
}

export default |;
```

### sfc - Stateless Function Component
```javascript
const | = props => {
  return ( | );
};

export default |;
```

### cdm - componentDidMount
```javascript
componentDidMount() {
  |
}
```

### cwm - componentWillMount
```javascript
componentWillMount() {
  |
}
```

### cwrp - componentWillReceiveProps
```javascript
componentWillReceiveProps(nextProps) {
  |
}
```

### scu - shouldComponentUpdate
```javascript
shouldComponentUpdate(nextProps, nextState) {
  |
}
```

### cwu - componentWillUpdate
```javascript
componentWillUpdate(nextProps, nextState) {
  |
}
```

### cdu - componentDidUpdate
```javascript
componentDidUpdate(prevProps, prevState) {
  |
}
```

### cwun - componentWillUnmount
```javascript
componentWillUnmount() {
  |
}
```

### cdc - componentDidCatch
```javascript
componentDidCatch(error, info) {
  |
}
```

### ss - setState
```javascript
this.setState({ | : | });  
```

### ren - render
```javascript
render() {
  return (
    |
  )
}
```

## Release Notes

### 1.0.7

* Patch - Adding JSX support back.  Was accidentally removed

### 1.0.6

* Add state prop to Component Class (`cc`)
* Wrap return from render in `()` by default for Component Class (`cc`) and Component Class Constructor (`ccc`)
* Use pipes in README to better articulate tab stops

### 1.0.5

* Add "Import PropTypes" snippet (`impt`) - [@overra](https://github.com/overra)
* Add "Component Did Catch" snippet (`cdc`) - [@ghosh](https://github.com/ghosh)
* Add support for JSX files - [@seanmcbreen](https://github.com/seanmcbreen)

### 1.0.4

* Add `nextProps` and `nextState` to `componentWillUpdate`

### 1.0.2

* Change "Create Class With Constructor" to "Create Class With State"
* Pass `props` to constructor and super call
* Add `this.state` to constructor
* Pass `prevProps` to `componentDidUpdate`

### 1.0.1

Complete README with samples

### 1.0.0

Initial release of Simple React Snippets 🔥

#### Thank You

Special thanks to the following individuals who have helped with this project in some way.

* [@dan_abramov](https://twitter.com/dan_abramov)
* [@adiun](https://twitter.com/adiun)