export default function getStudentIdsSum(listOfStudents) {
  const initialValue = 0;
  return listOfStudents.reduce(
    // eslint-disable-next-line
    (accumulator, currentValue) => accumulator += currentValue.id, initialValue,
  );
}
