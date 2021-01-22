// npm i mysql

var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"srms"
});
con.connect(function(error){
if(error){
    throw error;
}
else {
    con.query(" select * from admin", function(err,result){
        if(err){ 
            throw err;
        }
        else {
            console.warn("All results are :" , result);
        }
    })
}
})