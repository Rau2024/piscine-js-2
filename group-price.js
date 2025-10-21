function groupPrice(dataSet) {
  const priceRegex = /([$€£¥]|[A-Z]{3})(\d+)\.(\d{2})/g;

  const matches = [];
  let match;


  while ((match = priceRegex.exec(dataSet)) !== null) {

    const fullPrice = match[0];
    const dollars = match[2];
    const cents = match[3];

    matches.push([fullPrice, dollars, cents]);
  }

  return matches;
}