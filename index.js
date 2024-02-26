// Write your solution in this file!
// create 'employee' object
const employee = {
    name: "Hollis",
    streetAddress: "274A 5th Ave, San Francisco, CA 94118"
};

// non-destructively update employee object with key and value
function updateEmployeeWithKeyAndValue(object, key, value) {
    return {
            ...object,
            [key]: value,
        };
};

// destructively update employee object with key and value
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
};

// non-destructively deletes key from employee
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
};

// destructively deletes key from employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};