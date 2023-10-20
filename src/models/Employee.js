const { Schema, model } = require('mongoose');
const employeeSchema = new Schema({
    name: { type: String, required: true },
    cedula: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: String, required: false },
},{
    timestamps:true,
});

module.exports = model('Employee', employeeSchema);