# Simple React Snippets

The essential collection of React Snippets and commands.

![snippets in action](images/snippets-in-action.gif)

## Features

Only what you need and nothing more. **No Redux. No React Native.**

Simply, simple React snippets.

These snippets were selected carefully from my own day-to-day React use. Not
everything in React is included here. This is a hand selected set of snippets
that work the way that you would expect, not just a copy of the documentation.

## Snippets

| Snippet | Renders                          |
| ------- | -------------------------------- |
| `imr`   | Import React                     |
| `imrc`  | Import React / Component         |
| `impt`  | Import PropTypes                 |
| `cc`    | Class Component                  |
| `ccc`   | Class Component With Constructor |
| `sfc`   | Stateless Function Component     |
| `cdm`   | componentDidMount                |
| `cwm`   | componentWillMount               |
| `cwrp`  | componentWillReceiveProps        |
| `scu`   | shouldComponentUpdate            |
| `cwu`   | componentWillUpdate              |
| `cdu`   | componentDidUpdate               |
| `cwu`   | componentWillUpdate              |
| `cdc`   | componentDidCatch                |
| `ss`    | setState                         |
| `ren`   | render                           |
| `hoc`   | Higher Order Component           |

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

### ccc - Class Component With Constructor

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

### hoc - Higher Order Component

```javascript
function | (|) {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return < | {...this.props} />;
    }
  };
}
```

## Commands

### React: class to className

Changes all occurences of `class` in JSX to `className`. This transform is safe
to run multiple times on any document. No text needs to be selected as the
command is executed on the entire document.

![React: class to className](https://i.imgur.com/i1ZwvOu.gif)

#### Thank You

Special thanks to the following individuals who have helped with this project in
some way.

* [@dan_abramov](https://twitter.com/dan_abramov)
* [@adiun](https://twitter.com/adiun)
* [@will-stone](https://github.com/will-stone)
