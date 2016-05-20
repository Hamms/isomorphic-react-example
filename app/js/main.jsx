import Express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Html from './components/Html';

const app = Express();
const port = 8000;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');

  let items = [
    'Item 0',
    'Item 1',
  ];

  res.end(ReactDOMServer.renderToStaticMarkup(<Html items={items}/>));
});

app.use(Express.static('static'));

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

export default app;
