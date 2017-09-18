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

### cc - Class Component
```javascript
class MyClass extends Component {
  render() {
    return <div />;
  }
}

export default MyClass;
```

### ccc - Class Component With State
```javascript
class MyClass extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    return <div />;
  }
}

export default MyClass;
```

### sfc - Stateless Function Component
```javascript
const MyComponent = props => {
  return <div />;
};

export default MyComponent;
```

### cdm - componentDidMount
```javascript
componentDidMount() {

}
```

### cwm - componentWillMount
```javascript
componentWillMount() {

}
```

### cwrp - componentWillReceiveProps
```javascript
componentWillReceiveProps(nextProps) {

}
```

### scu - shouldComponentUpdate
```javascript
shouldComponentUpdate(nextProps, nextState) {

}
```

### cwu - componentWillUpdate
```javascript
componentWillUpdate(nextProps, nextState) {

}
```

### cdu - componentDidUpdate
```javascript
componentDidUpdate(prevProps, prevState) {

}
```

### cwun - componentWillUnmount
```javascript
componentWillUnmount() {

}
```

### ss - setState
```javascript
this.setState({  :  });  
```

### ren - render
```javascript
render() {
  return (
      
  )
}
```

## Release Notes

### 1.0.3

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