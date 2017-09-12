# Simple React Snippets

The essential collection of React Snippets.

<img src="https://i.imgur.com/kfRAL5q.gifv" />

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

### imr       Import React
```javascript
import React from 'react';
```
### imrc      Import React, Component
```javascript
import React, { Component } from 'react';
```

### cc        Class Component
```javascript
class MyClass extends Component {
  render() {
    return <div />;
  }
}

export default MyClass;
```

### ccc       Class Component With Constructor
```javascript
class MyClass extends Component {
  constructor() {
    super();
  }
  render() {
    return <div />;
  }
}

export default MyClass;
```

### sfc       Stateless Function Component
```javascript
const MyComponent = props => {
  return <div />;
};

export default MyComponent;
```

### cdm       componentDidMount
```javascript
componentDidMount() {

}
```

### cwm       componentWillMount
```javascript
componentWillMount() {

}
```

### cwrp      componentWillReceiveProps
```javascript
componentWillReceiveProps(nextProps) {

}
```

### scu       shouldComponentUpdate
```javascript
shouldComponentUpdate(nextProps, nextState) {

}
```

### cwu       componentWillUpdate
```javascript
componentWillUpdate() {

}
```

### cdu       componentDidUpdate
```javascript
componentDidUpdate() {

}
```

### cwun      componentWillUnmount
```javascript
componentWillUnmount() {

}
```

### ss        setState
```javascript
this.setState({  :  });  
```

### ren       render
```javascript
render() {
  return (
      
  )
}
```

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: enable/disable this extension
* `myExtension.thing`: set to `blah` to do something

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

-----------------------------------------------------------------------------------------------------------

## Working with Markdown

**Note:** You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on OSX or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+CMD+V` on OSX or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux) or `Cmd+Space` (OSX) to see a list of Markdown snippets

### For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**