 const fs = require('fs')



module.exports = {

    async getEmployeesList(req, res){
        fs.readFile('./api.json', 'utf-8',(err, data) => {

            const jsonData = JSON.parse(data);
            res.json(jsonData)
            
        })


    },


    
     async getVisiblity(req, res){
        fs.readFile('./api.json', 'utf-8', (err, data) => {
            const jsonData = JSON.parse(data);
            const visbility = jsonData.visibilitylist
            res.json(visbility)
        })



     },

     async putVisiblity(req, res){

        
        let VisibilityValue = req.body.visibilitylist
        
        if(typeof VisibilityValue !== 'boolean' ) {
            res.status(400).send('Wartosc musi byc typu boolean.')
            return
        }

        fs.readFile('./api.json', 'utf-8', (err, data) => {

            let jsonData = JSON.parse(data);
            jsonData.visibilitylist = VisibilityValue

            fs.writeFile('./api.json', JSON.stringify(jsonData), 'utf-8', () => {
                res.send("Wszystko OK")
            }) 
        
        })
    

     },
     async addEmployee(req,res){
        
        const newEmployee = { 
            "imie": req.body.imie,
            "telefon": req.body.telefon
        }

        fs.readFile('./api.json', 'utf-8', (err, data) => {

            let jsonData = JSON.parse(data); 
            jsonData.EmployeeList.push(newEmployee);


            fs.writeFile('./api.json',JSON.stringify(jsonData), 'utf-8', (err, data) => {
                res.send("Dodano Pracownika")
            })
    

        })

        
    },





    
 }