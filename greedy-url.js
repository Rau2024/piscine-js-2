function getURL(dataSet) {
  const urlRegex = /https?:\/\/[^\s]+/g;
  const matches = dataSet.match(urlRegex);
  return matches || [];
}

function greedyQuery(dataSet) {
  const urls = getURL(dataSet);

  return urls.filter(url => {
    try {
      const urlObj = new URL(url);
      const params = urlObj.searchParams;
      return Array.from(params.keys()).length >= 3;
    } catch (e) {
      return false;
    }
  });
}

function notSoGreedy(dataSet) {
  const urls = getURL(dataSet);

  return urls.filter(url => {
    try {
      const urlObj = new URL(url);
      const params = urlObj.searchParams;
      const paramCount = Array.from(params.keys()).length;
      return paramCount >= 2 && paramCount <= 3;
    } catch (e) {
      return false;
    }
  });
}
