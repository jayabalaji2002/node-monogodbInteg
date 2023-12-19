const Employee = require('../models/Employee')

// Show the data of list of employees from models

const index = (req,res,next)=>{
    Employee.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message:'An error Occured!'
        })
    })
}

// Showing Single employee only
const show = (req,res,next)=>{
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({  
            message:'An error Occured!'
        })
    })
}

// adding new employee
const store = (req,res,next) =>{
    let employee = new Employee({
        name:req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age,
        avatar:req.body.avatar
    })
    if(req.file){
        employee.avatar = req.file.path
    }
    employee.save()
    .then(response =>{
        res.json({
            message:'Employee Added Successfully!'
        })
    })
    .catch(error  =>{
        res.json({
            message:'An error Occured!'
        })
    })
}
 
// update an employee

const update = (req,res,next)=>{
    let employeeID = req.body.employeeID

    let updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age,
        avatar:req.body.avatar
    }

    Employee.findByIdAndUpdate(employeeID,{$set: updateData})
    .then(()=>{
        res.json({
            message:'Employee update Successfully!'
        })
    })

    .catch(error  =>{
        res.json({
            message:'An error Occured!'
        })
    })
}

// delete an employee

const destroy = (req,res,next)=>{
    let employeeID = req.body.employeeID

    Employee.findByIdAndRemove(employeeID)
    .then(()=>{
        res.json({
            message:'Employee update Successfully!'
        })
    })

    .catch(error  =>{
        res.json({
            message:'An error Occured!'
        })
    })
}

module.exports = {
    index,show,store,update,destroy
}























