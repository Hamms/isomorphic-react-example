isomorphic-react
----------------

A simple NodeJS app which uses Babel and Webpack to create a simple
React app demonstrating isomorphic components. Inspired by
[react-server-example](https://raw.githubusercontent.com/mhart/react-server-example).

Usage
-----

```sh
$ npm install
$ npm run build
$ npm start
```

Then navigate to [http://localhost:8000](http://localhost:8000) and
click on the button to see some reactive events in action.

Try viewing the page source to ensure the HTML being sent from the
server is already rendered (with checksums to determine whether
client-side rendering is necessary)

Requirements
------------

Node.js v5.10.1
