import { isArray } from './utils';

export function min() {
  if (arguments.length === 1) {
    return arguments[0];
  } else {
    isArray();
    return Math.min();
  }
}

export function copy() {

}
