# Hello World React

## My first react app

I used a walkthrough by [_Joy Warugu_](https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel)

### Pre-requisites 

1. `brew update`
1. `brew install yarn`

### Getting Started 

1. `mkdir hello-world-react`
1. `cd hello-world-react`
1. `yarn init`
  * _init will give you a few prompts, just press enter till the end or configure it as you'd like to._

### Webpack installation and configuration

1. `yarn add webpack webpack-dev-server path`
1. `touch webpack.config.js`  
  * _then update the configuration file "webpack.config.js":_
```javascript
/*  
    ./webpack.config.js  
*/  
const path = require('path');  
module.exports = {  
  entry: './client/index.js',  
..  output: {  
    path: path.resolve('dist'),  
    filename: 'index_bundle.js'  
  },  
  module: {  
    loaders: [  
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },  
     { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }  
    ]  
  }  
}  
```

### Setting up Babel

1. `yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev`
  * _babel gave me this warning:_  warning babel-preset-es2015@6.24.1: 🙌  Thanks for using Babel: we recommend using babel-preset-env now: please read babeljs.io/env to update! 
1. `touch .babelrc`
