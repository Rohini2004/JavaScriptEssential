const employees = [
  { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
  { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
  { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 }
];

// Show all employees
function displayAllEmployees() {
  const content = employees.map(emp => 
    `<p>${emp.id}: ${emp.name} - ${emp.department} - $${emp.salary}</p>`
  ).join('');
  document.getElementById('employeesDetails').innerHTML = content;
}


// Show only HR employees
function displayHREmployees() {
  const hr = employees.filter(emp => emp.department === 'HR');
  const content = hr.map(emp =>
    `<p>${emp.id}: ${emp.name} - ${emp.department} - $${emp.salary}</p>`
  ).join('');
  document.getElementById('employeesDetails').innerHTML = content;
}

// Find employee by ID
function findEmployeeById() {
  const id = parseInt(document.getElementById('searchId').value);
  const emp = employees.find(e => e.id === id);
  document.getElementById('employeesDetails').innerHTML = emp
    ? `<p>${emp.id}: ${emp.name} - ${emp.department} - $${emp.salary}</p>`
    : 'No employee has been found with this ID.';
}

// Total salary
function calculateTotalSalaries() {
  const total = employees.reduce((sum, e) => sum + e.salary, 0);
  alert(`Total Salaries: $${total}`);
}

