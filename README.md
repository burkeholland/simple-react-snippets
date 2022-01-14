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

| Snippet | Renders                                       |
| ------- | --------------------------------------------- |
| `imr`   | Import React                                  |
| `imrc`  | Import React / Component                      |
| `imrd`  | Import ReactDOM                               |
| `imrs`  | Import React / useState                       |
| `imrse` | Import React / useState useEffect             |
| `impt`  | Import PropTypes                              |
| `impc`  | Import React / PureComponent                  |
| `cc`    | Class Component                               |
| `ccc`   | Class Component With Constructor              |
| `cpc`   | Class Pure Component                          |
| `ffc`   | Function Component                            |
| `sfc`   | Stateless Function Component (Arrow function) |
| `cdm`   | componentDidMount                             |
| `uef`   | useEffect Hook                                |
| `cwm`   | componentWillMount                            |
| `cwrp`  | componentWillReceiveProps                     |
| `gds`   | getDerivedStateFromProps                      |
| `scu`   | shouldComponentUpdate                         |
| `cwu`   | componentWillUpdate                           |
| `cdu`   | componentDidUpdate                            |
| `cwun`  | componentWillUnmount                          |
| `cdc`   | componentDidCatch                             |
| `gsbu`  | getSnapshotBeforeUpdate                       |
| `ss`    | setState                                      |
| `ssf`   | Functional setState                           |
| `usf`   | Declare a new state variable using State Hook |
| `ren`   | render                                        |
| `rprop` | Render Prop                                   |
| `hoc`   | Higher Order Component                        |
| `cp`    | Context Provider                              |
| `cpf`   | Class Property Function                       |

## Full Expansions

### imr - Import React

```javascript
import * as React from "react";
```

### imrc - Import React, Component

```javascript
import * as React from "react";
import { Component } from "react";
```

### imrd - Import ReactDOM

```javascript
import ReactDOM from "react-dom";
```

### imrs - Import React, useState

```javascript
import * as React from "react";
import { useState } from "react";
```

### imrse - Import React, useState, useEffect

```javascript
import * as React from "react";
import { useState, useEffect } from "react";
```

### impt - Import PropTypes

```javascript
import PropTypes from "prop-types";
```

### impc - Import PureComponent

```javascript
import * as React from "react";
import { PureComponent } from "react";
```

### cc - Class Component

```javascript
class | extends React.Component {
  render() {
    return <div>|</div>
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

### cpc - Class Pure Component

```javascript
class | extends PureComponent {
  state = { | },
  render() {
    return ( | );
  }
}

export default |;
```

### ffc - Function Component

```javascript
function (|) {
    return ( | );
}

export default |;
```

### sfc - Stateless Function Component (Arrow function)

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

### uef - useEffect Hook

```javascript
useEffect(() => {
  |
}, []);
```

### cwm - componentWillMount

```javascript
//WARNING! To be deprecated in React v17. Use componentDidMount instead.
componentWillMount() {
  |
}
```

### cwrp - componentWillReceiveProps

```javascript
//WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
componentWillReceiveProps(nextProps) {
  |
}
```

### gds - getDerivedStateFromProps

```javascript
static getDerivedStateFromProps(nextProps, prevState) {
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
//WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
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

### gsbu - getSnapshotBeforeUpdate

```javascript
getSnapshotBeforeUpdate(prevProps, prevState) {
  |
}
```

### ss - setState

```javascript
this.setState({ | : | });
```

### ssf - Functional setState

```javascript
this.setState(prevState => {
  return { | : prevState.| }
});
```

### usf - Declare a new state variable using State Hook

```javascript
const [|, set|] = useState();
```

_Hit Tab to apply CamelCase to function. e.g. [count, setCount]_

### ren - render

```javascript
render() {
  return (
    |
  );
}
```

### rprop - Render Prop

```javascript
class | extends Component {
  state = { | },
  render() {
    return this.props.render({
      |: this.state.|
    });
  }
}

export default |;
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

### cpf - Class Property Function

```javascript
  | = (e) => {
    |
  }
```

## Commands

### React: class to className

Changes all occurences of `class` in JSX to `className`. This transform is safe
to run multiple times on any document. No text needs to be selected as the
command is executed on the entire document.

![React: class to className](https://i.imgur.com/i1ZwvOu.gif)

## Thank You! ❤️

While I wrote the initial version of this extension, many people (too many to name) have helped make it what it is today. From providing TypeScript definitions to keeping up with changing API and best practices. If you are enjoying this extension, you have the great React community to thank.
