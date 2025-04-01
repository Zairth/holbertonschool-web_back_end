export default function getStudentsByLocation(listOfStudents, city) {
  return listOfStudents.filter((located) => located.location === city);
}
