export default function getStudentIdsSum(listOfStudents) {
  if (!Array.isArray(listOfStudents)) {
    throw new TypeError('arg must be an array');
  }
  return listOfStudents.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id, 0,
  );
}
