# Hello World React

## My first react app

I used a walkthrough by [_Joy Warugu_](https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel)

### Pre-requisites 

1. `brew update`
2. `brew install yarn`

### Getting Started 

3. `mkdir hello-world-react`
4. `cd hello-world-react`
5. `yarn init`
  * _init will give you a few prompts, just press enter till the end or configure it as you'd like to._

### Webpack installation and configuration

6. `yarn add webpack webpack-dev-server path`
7. `touch webpack.config.js`  
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

8. `yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev`
  * _babel gave me this warning_:  babel-preset-es2015@6.24.1: 🙌  Thanks for using Babel: we recommend using babel-preset-env now: please read babeljs.io/env to update! 
9. `touch .babelrc`  
```javascript
  /* 
    ./.babelrc
*/  
{
    "presets":["es2015", "react"]
}
```

###  Setting up our React Components 

_The file structure should look like this:_

```
.  
|-- node_modules  
|-- .babelrc  
|-- package.json  
|-- webpack.config.js  
|-- yarn.lock  
```
10. `mkdir client`
11. `cd client`
12. `touch index.js`
13. `touch index.html`
14. `cd ..`

_Now the file structure looks like this:_

```
.  
|-- client  
     |-- index.html  
     |-- index.js  
|-- .babelrc  
|-- package.json  
|-- webpack.config.js  
|-- yarn.lock  
```
15. Open up index.js and add:
```javascript
/*
    ./client/index.js
    which is the webpack entry file
*/
console.log('message from index.js!!')
```
16. Update index.html to:
```html
/*
    ./client/index.html
    basic html skeleton
*/
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>React App Setup</title>
  </head>
  <body>
    <div id="root">

    </div>
  </body>
</html>
```

### Html-Webpack-Plugin

17. `yarn add html-webpack-plugin`
18. Add a few configurations to _webpack.config.js_
```javascript
/* 
    ./webpack.config.js
*/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {

...

module: {
    loaders: [
        ...
    ]
},
// add this line
plugins: [HtmlWebpackPluginConfig]
}
```
### Getting ready to run it

19. Open _package.json_ and add a start script:
```json
/*
    ./package.json
*/
{
  "name": "hello-world-react",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",

  // add the scripts key to your package.json

  "scripts": {
    "start": "webpack-dev-server"
  },

  "dependencies": {
  ...
  },
  "devDependencies": {
  ...
  }
}
```
