import React from 'react';
import App from './shared/App';

export default function Html(props) {
  return (<html>
    <head></head>
    <body>
      <div id='content'><App {...props} /></div>
      <script type='text/javascript' dangerouslySetInnerHTML={{__html: 'var APP_PROPS = ' + JSON.stringify(props) + ';'}} />
      <script type='text/javascript' src='/js/bundle.js' />
    </body>
  </html>);
}
