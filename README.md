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
Change visibility list: PUT http://localhost:4000/api/employesslist/visibility

{"visibility": boolean} 

Add Emplyoees: POST [http://localhost:4000/api/employesslist/visibility](http://localhost:4000/api/employeeslist/employeeadd)http://localhost:4000/api/employeeslist/employeeadd

{
  "imie": string,
  "telefon": number
}
