export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((obj) => obj.location === city)
    .map((obj) => {
      const studentsGrade = newGrades.find((grade) => grade.studentId === obj.id);
      const grade = studentsGrade === undefined ? 'N/A' : studentsGrade.grade;

      return { ...obj, grade };
    });
}
