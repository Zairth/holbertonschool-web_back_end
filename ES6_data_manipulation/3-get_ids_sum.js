export default function getStudentIdsSum(listOfStudents) {
  if (!Array.isArray(listOfStudents)) {
    return 0;
  }
  return listOfStudents.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
