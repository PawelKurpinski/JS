const students = ["John", "Elise", "Margaret"];

// or inline export

const studentsTotal = 100000;

let summ = (a, b) => {
  return a + b;
};

let multiply = (a, b) => {
  return a * b;
};

export { studentsTotal };
export { students };
export default multiply;

// default is important here! We do not have to use {} in import!!
