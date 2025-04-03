export default function cleanSet(set, startString) {
  const iterator = set.values();
  let newString = '';

  if (!startString || startString === '') {
    return newString;
  }

  for (let element of iterator) {
    if (element.startsWith(startString)) {
      newString += element.replace(startString, '');
      newString += '-';
    }
  }

  newString = newString.slice(0, -1);
  return newString;
}
