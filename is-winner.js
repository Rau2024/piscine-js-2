async function isWinner(name) {
  try {
    const nation = await db.getWinner(name);
    if (nation.continent !== "Europe") {
      return `${name} is not what we are looking for because of the continent`;
    }
    const results = await db.getResults(nation.id);
    if (results.length < 3) {
      return `${name} is not what we are looking for because of the number of times it was champion`;
    }
    const yrs = results.map((r) => r.year).join(", ");
    const pts = results.map((r) => r.score).join(", ");
    return `${name} won the FIFA World Cup in ${yrs} winning by ${pts}`;
  } catch (err) {
    if (
      err.message === "Country Not Found" ||
      err.message === "Results Not Found"
    ) {
      return `${name} never was a winner`;
    }
    throw err;
  }
}
