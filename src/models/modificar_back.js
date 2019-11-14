let dbCOBOL = require('../dbMacro');
let backModel = {};

backModel.getBack = (reqData,callback) => {
    dbCOBOL.open;
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
        EXI_ORD AS 'backorder'
        FROM
        PUBLIC.INVEXI
        WHERE
        EXI_ALM='` + reqData.almacen + `'
        AND
        EXI_ART='` + reqData.articulo + `'
    `, function(err, rows) {
            if (err) {
                throw err;
                callback(err, null);
            } else {
                callback(null, rows);
            }
        });
        dbCOBOL.close;
    }
};
backModel.modificarBack = (reqData,cantidad,callback) => {
    if (dbCOBOL) {
        const sql = `UPDATE PUBLIC.INVEXI 
        SET 
        EXI_ORD = '` + cantidad + `'
        WHERE 
        EXI_ALM = '` + reqData.almacen + `'
        AND EXI_ART='` + reqData.articulo + `'
    
        `;
        dbCOBOL.queryResult(sql, function(err, rows) {
            if (err) {
                throw err;
                callback(err, null);
            } else {
                callback(null, rows);
            }
        });
    }
};


module.exports = backModel;