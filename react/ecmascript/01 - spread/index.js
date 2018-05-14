import { isArray } from './utils';

export function min() {
  let [array] = arguments;
  if (array.length === 1) {
    return arguments[0];
  }
  if (isArray(array) === true) {
    return Math.min(...array);
  } else {
    let a = arguments;
    return Math.min(...a);
  }
}

export function copy() {

}
