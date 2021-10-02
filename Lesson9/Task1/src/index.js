// file path: src/index.js

import printProfile from './renderProfile.js';
const userData = {
  name: 'Tom',
  age: 17,
};
const profile = {
  ...userData,
  company: 'Gromcode',
};

printProfile(profile);

console.log(profile);