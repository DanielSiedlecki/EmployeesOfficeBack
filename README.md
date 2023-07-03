# EmployeesOfficeBack

## Setup 
```
npm install
```

## Run 
```
node server.js
```
Add Cors in server.js and socket.js 
```
origin: ['yourhost']
```

## Method
GET Employees and Visbility: GET http://yourhost/api/employeeslist

Change visibility list: PUT http://yourhost/api/employeeslist/visibility

{"visibility": boolean} 

Add Emplyoees: POST http://yourhost/api/employeeslist/employeeadd

{
  "imie": string,
  "telefon": number
}
