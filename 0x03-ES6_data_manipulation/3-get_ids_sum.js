export default function getStudentIdsSum(students) {
  return students.reduce((sum, x) => sum + x.id, 0);
}
