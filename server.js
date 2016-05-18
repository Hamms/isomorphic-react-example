require('babel-register')({
  presets: ['es2015', 'react'],
  extensions: ['.jsx', '.js']
});

require('./app/js/main.jsx');
