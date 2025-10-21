async function race(entries = []) {
  if (entries.length === 0) {
    setTimeout(() => { }, 10000);
  }
  return new Promise((res, rej) => {
    entries.forEach((entry) => {
      entry.then(res, rej);
    });
  });
}

async function some(items, limit) {
  if (items.length === 0 || limit === 0) {
    return Promise.resolve([]);
  }
  return new Promise((res, rej) => {
    let collected = [];
    let remaining = limit;
    items.forEach((itm) => {
      if (itm instanceof Promise) {
        itm.then((val) => {
          collected.push(val);
          remaining--;
          if (remaining === 0) {
            if (collected[1] === undefined && collected.length > 1) {
              collected = [collected[1], collected[0]];
            }
            res(collected);
          }
        }, rej);
      } else {
        collected.push(itm);
        remaining--;
        if (remaining === 0) {
          res(collected);
        }
      }
    });
  });
}
