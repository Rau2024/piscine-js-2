"use strict";

function interpolation(cfg) {
  const { step, start, end, callback, duration } = cfg;
  let idx = 0;
  const gap = duration / step;
  let id = setInterval(() => {
    callback([((end - start) / step) * idx + start, gap * (idx + 1)]);
    idx++;
    if (idx === step) clearInterval(id);
  }, gap);
}
