export default function appendToEachArrayValue(array, appendString) {
  const modifiedArray = [];

  for (let value of array) {
    modifiedArray.push(appendString + value);
  }

  return modifiedArray;
}

