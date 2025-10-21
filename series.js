async function series(afuncs) {
  let sers = [];
  if (!afuncs.length) return [];
  sers[0] = await afuncs[0]();
  for (let i = 1; i < afuncs.length; i++) {
    Promise.resolve((sers[i] = await afuncs[i]()));
  }
  return sers;
}