export default function getStudentIdsSum(listOfStudents) {
  if (!Array.isArray(listOfStudents)) {
    throw new TypeError('arg must be an array');
  }
  const newList = listOfStudents.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id, 0,
  );
  return newList;
}
