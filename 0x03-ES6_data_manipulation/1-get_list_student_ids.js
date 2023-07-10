export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const output = arr.map((obj) => obj.id);

  return output;
}
