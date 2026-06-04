const lodash = require('lodash');
const names = ['malachy', 'jark','john'];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize)