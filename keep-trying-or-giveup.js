function retry(limit, fn) {
  let attempts = 0;
  return async function attempt(...params) {
    return await fn(...params).catch((error) => {
      if (attempts >= limit) throw error;
      attempts++;
      return attempt(...params);
    });
  };
}

function timeout(ms, fn) {
  return async (...params) => {
    const raceTimer = new Promise((resolve) => {
      setTimeout(() => {
        resolve(new Error("timeout"));
      }, ms);
    });
    return Promise.race([fn(...params), raceTimer]).then((result) => {
      if (Object.entries(result).length) return result;
      throw result;
    });
  };
}
