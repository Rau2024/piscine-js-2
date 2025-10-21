"use strict";

function throttle(fn, delay = 0) {
  let locked = false;
  return (...params) => {
    if (!locked) {
      fn(...params);
      locked = true;
      setTimeout(() => (locked = false), delay);
    }
  };
}

function opThrottle(
  fn,
  delay = 0,
  opts = { leading: false, trailing: true }
) {
  if (opts["leading"] && opts["trailing"]) return throttle(fn, delay);
  let locked = false;
  let timeoutId;
  return (...params) => {
    if (!locked) {
      if (opts["leading"]) fn(...params);
      locked = true;
      if (opts["trailing"]) clearTimeout(timeoutId);
      setTimeout(() => {
        locked = false;
        if (opts["trailing"]) fn(...params);
      }, delay);
    }
  };
}
