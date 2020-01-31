let dbCOBOL = require('../dbMacro');
let almModel = {};

almModel.getAlmacenes = (callback) => {
    dbCOBOL.open;
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
        ALM_LLAVE AS 'idalmacen',
        ALM_NOMBRE AS 'almacen'
        FROM
        PUBLIC.INVALM
    `, function(err, rows) {
            if (err) {
                callback(err, null);
                throw err;
                
            } else {
                callback(null, rows);
            }
        });
        dbCOBOL.close;
    }
};



module.exports = almModel;