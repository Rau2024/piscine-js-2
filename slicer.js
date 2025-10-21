function slice(data, start = 0, end = data.length) {
  let result = Array.isArray(data) ? [] : '';

  if (start < 0) start = data.length + start;
  if (end < 0) end = data.length + end;

  if (start < 0) start = 0;
  if (end > data.length) end = data.length;
  if (end < start) end = start;

  for (let i = start; i < end; i++) {
    result = Array.isArray(result) ? [...result, data[i]] : result + data[i];
  }

  return result;
}
