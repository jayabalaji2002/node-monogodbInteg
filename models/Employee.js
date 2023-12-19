const mongoose = require('mongoose');
const schema = mongoose.Schema


const employeeSchema = new schema({
    name: {
        type: String
    },
    designation: {
        type: String
    },
    email: { type: String},
    age: { type: Number},
    phone:{type:Number},
    avatar:{
        type:String
    }
},{timeStamps:true});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
