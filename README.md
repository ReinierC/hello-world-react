# Hello World React

## My first react app

I used a walkthrough by [_Joy Warugu_](https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel)

>1. `brew update`
>1. `brew install yarn`
>1. `mkdir hello-world-react`
>1. `cd hello-world-react`
>1. `yarn init`
>1. `yarn add webpack webpack-dev-server path`
>1. `touch webpack.config.js`  
>   /*  
./webpack.config.js  
*/  
const path = require('path');
module.exports = {
  entry: './client/index.js',
  output: {
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
