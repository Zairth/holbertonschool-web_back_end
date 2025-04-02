export default function getStudentIdsSum(listOfStudents, city, newGrades) {
    if (!Array.isArray(listOfStudents) || !Array.isArray(newGrades)) {
      throw new TypeError('arg 1 and 3 must be an array');
    }
    if (typeof city !== 'string') {
      throw new TypeError('arg 2 must be a string');
    }
  
    return listOfStudents
      .filter(student => student.location === city)
      .map(student => {
        let studentGrade = 'N/A';
  
        for (let i = 0; i < newGrades.length; i++) {
          if (newGrades[i].studentId === student.id) {
            studentGrade = newGrades[i].grade;
            break;
          }
        }
  
        return {
          id: student.id,
          firstName: student.firstName,
          location: student.location,
          grade: studentGrade === null ? 'N/A' : studentGrade,
        };
      });
  }