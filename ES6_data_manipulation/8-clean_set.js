export default function cleanSet(set, startString) {
  const iterator = set.values();
  let newString = '';

  if (startString.length === 0) {
    return '';
  }

  for (let element of iterator) {
    element = String(element);
    if (element.startsWith(startString)) {
      newString += element.replace(startString, '');
      newString += '-';
    }
  }

  newString = newString.slice(0, -1);
  return newString;
}
