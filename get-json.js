async function getJSON(route, query) {
  let queryString = "";
  for (const [k, v] of Object.entries(query)) {
    queryString += `${k}=${v}&`.replaceAll(" ", "+");
  }
  let fullUrl = `${route}?${queryString.slice(0, -1)}`;

  return await fetch(fullUrl)
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .then((data) => {
      if (data["data"]) return data["data"];
      if (data["error"]) throw new Error(data["error"]);
    });
}
