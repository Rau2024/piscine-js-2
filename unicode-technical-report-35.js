function format(date, formatString) {
  let result = String(formatString);
  let d = new Date(date);


  if (result.includes("yyyy")) {
    result = result.replace(
      /yyyy/g,
      Math.abs(d.getFullYear()).toString().padStart(4, "0")
    );
  } else {
    result = result.replace(/y/g, Math.abs(d.getFullYear()));
  }


  if (result.includes("dd")) {
    result = result.replace(/dd/g, d.getDate().toString().padStart(2, "0"));
  } else {
    result = result.replace(/d/g, d.getDate().toString());
  }


  if (result.includes("hh")) {
    result = result.replace(/hh/g, String(to12Hour(d)).padStart(2, "0"));
  } else {
    result = result.replace(/h/g, to12Hour(d));
  }


  if (result.includes("mm")) {
    result = result.replace(/mm/g, d.getMinutes().toString().padStart(2, "0"));
  } else {
    result = result.replace(/m/g, d.getMinutes());
  }


  if (result.includes("MMMM")) {
    result = result.replace(/MMMM/g, monthsLong[d.getMonth()]);
  } else if (result.includes("MMM")) {
    result = result.replace(/MMM/g, monthsShort[d.getMonth()]);
  } else if (result.includes("MM")) {
    result = result.replace(/MM/g, (d.getMonth() + 1).toString().padStart(2, "0"));
  } else {
    result = result.replace(/M/g, (d.getMonth() + 1).toString());
  }


  if (result.includes("EEEE")) {
    result = result.replace(/EEEE/g, daysLong[d.getDay()]);
  } else {
    result = result.replace(/E/g, daysShort[d.getDay()]);
  }


  if (formatString.includes("a")) {
    result = result.replace(/a/g, ampm(d));
  }


  result = result.replace(/ss/g, d.getSeconds().toString().padStart(2, "0"));
  result = result.replace(/s/g, d.getSeconds());


  result = result.replace(/HH/g, d.getHours().toString().padStart(2, "0"));
  result = result.replace(/H/g, d.getHours());


  result = result.replace(/GGGG/g, eraLong(d));
  result = result.replace(/G/g, eraShort(d));

  return result;
}


const monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const daysLong = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function to12Hour(date) {
  let hours = date.getHours() % 12;
  return hours === 0 ? 12 : hours;
}

function ampm(date) {
  return date.getHours() >= 12 ? "PM" : "AM";
}

function eraLong(date) {
  return date.getFullYear() > 0 ? "Anno Domini" : "Before Christ";
}

function eraShort(date) {
  return date.getFullYear() > 0 ? "AD" : "BC";
}
