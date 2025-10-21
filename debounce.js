function debounce(func, wait) {
  let timeout;

  return function (...args) {
    const context = this;
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

function opDebounce(func, wait, options = {}) {
  let timeout;
  let leadingCalled = false;

  return function (...args) {
    const context = this;

    if (options.leading && !leadingCalled) {
      func.apply(context, args);
      leadingCalled = true;
    }

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!options.leading) {
        func.apply(context, args);
      }
      leadingCalled = false;
    }, wait);
  };
}
