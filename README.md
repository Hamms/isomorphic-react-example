isomorphic-react-example
------------------------

A simple NodeJS app which uses Babel and Webpack to create a simple
React app demonstrating isomorphic components. Inspired by
[react-server-example](https://github.com/mhart/react-server-example).

Usage
-----

```sh
$ npm install
```

To build once and serve:


```sh
$ npm run build:all
$ npm start
```

To run an incrementally-built server:


```sh
$ npm run watch:all
```

Then navigate to [http://localhost:8000](http://localhost:8000) and
click on the button to see some reactive events in action.

Try viewing the page source to ensure the HTML being sent from the
server is already rendered

Requirements
------------

Node.js v5.10.1
