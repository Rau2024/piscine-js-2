function chunk(array, size) {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    const subArray = [];

    for (let j = i; j < i + size && j < array.length; j++) {
      subArray[subArray.length] = array[j];
    }

    result[result.length] = subArray;
  }

  return result;
}