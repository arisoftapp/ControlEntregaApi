var odbc = require("odbc");
var connectionString = "DSN=Macro;UID=system;PWD=manager;DATABASE=DEMOINT";
var db = new odbc.Database();
/*
db.open(connectionString, function(err) {
    if (err) {

        console.log('SERVIDOR MACROPRO NO RESPONDE - VERIFIQUE QUE ESTE ENCENDIDO');
        throw err;
    }
    else
    {
        console.log('conexion abierta');
    }
    
    ;
});
*/
process.on('SIGINT', function() {
    db.close(function() {
        console.log('Database Connection Closed');
        process.exit();
    });
});
module.exports = db;