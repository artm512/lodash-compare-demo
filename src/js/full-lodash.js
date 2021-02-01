import _ from 'lodash'; 

const arr = _.groupBy(['one', 'two', 'three'], 'length');
console.log(arr);
