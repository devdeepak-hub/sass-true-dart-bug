const path = require('path');
const sassTrue = require('sass-true');

const sassFile = path.join(__dirname, 'jumbo.scss');
sassTrue.runSass({ file: sassFile }, { describe, it });

const sassFile2 = path.join(__dirname, 'jumbo2.scss');
sassTrue.runSass({ file:sassFile2 }, { describe, it  });







