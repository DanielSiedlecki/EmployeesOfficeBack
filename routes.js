
const error = require('./errors')
const express = require('express')
const controller = require('./controller')
const catchAsync = error.catchAsync;



    const api = express.Router();


    //GET /employeeslist 

    api.get('/api/employeeslist', catchAsync(controller.getEmployeesList))


    //GET /employeeslist/widoczna

    api.get('/api/employesslist/visibility', catchAsync(controller.getVisiblity))


    //PUT /employeeslist/widoczna

    api.put('/api/employesslist/visibility', catchAsync(controller.putVisiblity))

    //POST /employeeslist

    api.post('/api/employeeslist/employeeadd', catchAsync(controller.addEmployee))


module.exports = api;

