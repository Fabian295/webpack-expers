# webpack 5 based config file, webpack.config.js 

### Enviroment, mode indication
We wrap all the rules, plugins, loaders, etc in a module.exports object.
The first line witthin this object is the eenvironmeent indication, the mode.
Deefault mode is set to "none", but we have to set it to eyther "development" or
to "production".

### What & Why
Webpack is a file bundler, but this is not the only thing it does, not by far. When you have 
several css, sass partials and js files, or multiple modules and components, etc it can be a pain
to keep to keep everyting in order and maintainable. This is where Webpack shines.

### How & Where
To get everything how we want it an keep a clean oversight over all the parts, we need to tell
Webpack what to do and how or where to get it. We will use a lot of Nodejs packages and some plugins
for this task. 
We also need to indicate where the source is located, where to place the bundled file  and how 
to call that bundled file, dynamically and give it a content-hash for cache busting purposes.

We also will be making a module which contains an array of rules. In these rules we tell webpack what file extensions to look for and then what loader to use to inject it's code.

### Control & Oversight
All the data from above will be placed in a config file. We can call this file what ever we want, but the convention is to call it "webpack.config.js".

## Get Started
To install all the dependencies and the folder node_modules, run in the termnal:

```node
npm install
```
After that you can start the dev sever from Webpack with the script:

```node
npm run dev
```
