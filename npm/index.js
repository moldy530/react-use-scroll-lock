'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/react-use-scroll-lock.production.min.js');
} else {
    module.exports = require('./cjs/react-use-scroll-lock.js');
}
