export default function getStudentIdsSum(listOfStudents) {
  if (!Array.isArray(listOfStudents)) {
    return 0;
  }
  const newList = listOfStudents.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id, 0,
  );
  return newList;
}
