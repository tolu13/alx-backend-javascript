export default function createIteratorObject(report) {
  const { allEmployees } = report;

  function* employeeIterator() {
    for (const department in allEmployees) {
      if (Object.prototype.hasOwnProperty.call(allEmployees, department)) {
        const employees = allEmployees[department];
        for (const employee of employees) {
          yield employee;
        }
      }
    }
  }

  return employeeIterator();
}
