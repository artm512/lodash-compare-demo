import groupBy from 'lodash/groupBy';

const arr = groupBy(['one', 'two', 'three'], 'length');
console.log(arr);
