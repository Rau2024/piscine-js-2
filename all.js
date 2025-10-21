async function all(tasks) {
  if (!tasks) return {};
  let result = {};
  let failure;
  for (const [k, v] of Object.entries(tasks)) {
    if (typeof v !== "object") {
      result[k] = v;
      continue;
    }
    await v
      .then((out) => (result[k] = out))
      .catch((e) => (failure = e));
  }
  if (failure) throw failure;
  return result;
}
