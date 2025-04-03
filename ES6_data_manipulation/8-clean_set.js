export default function cleanSet(set, startString) {
  const iterator = set.values();

  const len = startString.trim().length;

  if (len !== 0) {
    let newString = '';
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
  return startString;
}
