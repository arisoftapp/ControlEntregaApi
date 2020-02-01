var odbc = require("odbc");
var connectionString = "DSN=Macro;UID=system;PWD=manager;DATABASE=DEMOINT";
var db = new odbc.Database();

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

    /*
    	Once the connection is open you can query it.
    	That means if you tried to query it outside or before this handler finished, it would say...
    	"Connection Not Open"
    */
});

process.on('SIGINT', function() {
    db.close(function() {
        console.log('Database Connection Closed');
        process.exit();
    });
});

module.exports = db;