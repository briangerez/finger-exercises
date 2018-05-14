import { isArray } from './utils';

export function min() {
  if (arguments === 1) {
    return arguments[0];
  }
  let [args] = arguments;
  if (isArray(args) === true) {
    return Math.min(...args);
  } else {
    return Math.min(...arguments);
  }
}

export function copy() {

}
