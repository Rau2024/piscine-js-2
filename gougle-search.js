async function queryServers(srv, term) {
  const link1 = `/${srv}?q=${term}`;
  const link2 = `/${srv}_backup?q=${term}`;
  return Promise.race([
    Promise.resolve(getJSON(link1)),
    Promise.resolve(getJSON(link2)),
  ]);
}

async function gougleSearch(term) {
  const limit = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("timeout")), 80);
  });

  const webReq = queryServers("web", term);
  const imgReq = queryServers("image", term);
  const vidReq = queryServers("video", term);

  try {
    const [web, image, video] = await Promise.race([
      Promise.all([webReq, imgReq, vidReq]),
      limit,
    ]);

    return { web, image, video };
  } catch {
    throw new Error("timeout");
  }
}
