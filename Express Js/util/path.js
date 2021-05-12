const path = require('path');

module.exports = path.dirname(require.main.filename); // main.filename is the filename that runs the application. Here is is app.js
// path.dirname() will return the folder name containing the file. This will be exposed/exported as a global variable