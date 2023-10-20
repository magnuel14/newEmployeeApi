const { Router } = require('express');
const employeeRouter = Router();
const employeeController = require('../controllers/employeeController');

employeeRouter.get('/employees', employeeController.getEmployees);
employeeRouter.get('/employees/:cedula', employeeController.getEmployeeByCedula);
employeeRouter.get('/employees/:id', employeeController.getEmployeeById);

employeeRouter.post('/employees', employeeController.createEmployee);

employeeRouter.put('/employees/:id', employeeController.updateEmployee);

employeeRouter.delete('/employees/:id', employeeController.deleteEmployee);


module.exports = employeeRouter;