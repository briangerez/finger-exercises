import { isArray } from './utils';

export function min() {
  var [array] = arguments;
  if (array.length === 1) {
    return arguments[0];
  }
  if (isArray(array) === true) {
    return Math.min(...array);
  } else {
    return 2;
  }
}

export function copy() {

}
