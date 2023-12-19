const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const EmployeeRoute = require('./routes/employee')

mongoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser: true,useUnifiedTopology:true})

const db = mongoose.connection

db.on('error',(err)=>{
    console.log(err);
})

db.once('open',()=>{
    console.log('DB Connection established');
})

const app = express()

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

app.use('/uploads',express.static('uploads'))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is runnng on port ${PORT}`)
})


app.use('/api/employee', EmployeeRoute)













