const Employee = require('../models/Employee');

const employeesController = {};

employeesController.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json({ employees });
};

employeesController.getEmployeeByCedula = async (req, res) => {
    const { cedula } = req.params;

    const employees = await Employee.find({ cedula: cedula });
    res.json({ employees });
};

employeesController.getEmployeeById = async (req, res) => {
    const { id } = req.params;

    const employees = await Employee.findById({ _id: id });
    res.json({ employees });
};

employeesController.createEmployee = async (req, res) => {
    const { name, cedula, office, salary } = req.body;

    const newEmployee = {
        name: name,
        cedula: cedula,
        office: office,
        salary: salary,
    };

    const employee = new Employee(newEmployee);
    await employee.save();

    res.json({ message: `Saved Employee: ${name}}` });

};

employeesController.updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, office, salary } = req.body;

    const updateEmployee = {
        name: name,
        office: office,
        salary: salary,
    };

    await Employee.findByIdAndUpdate(id, updateEmployee);
    res.json({ message: `Update Employee: ${name}`});
};

employeesController.deleteEmployee = async (req, res) => {
    const { id } = req.params;

    await Employee.findByIdAndDelete(id);
    res.json({ message: `delete Employee`});
};

module.exports = employeesController;
