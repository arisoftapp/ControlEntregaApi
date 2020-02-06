let dbCOBOL = require('../dbMacro');
let modificarModel = {};

modificarModel.updatePrevioComdoc = (folio,almacen,cantidad,estatus,callback) => {
    if (dbCOBOL) {
       
        if(estatus=='A')
        {
            const sql = `UPDATE PUBLIC.COMDOC 
            SET 
            CDOC_UDS_SURT = '` + cantidad + `'
            WHERE CDOC_FOL = '` + folio + `'
            AND CDOC_OPE=1
            AND CDOC_ALM='` + almacen + `'
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
        else
        {
            const sql = `UPDATE PUBLIC.COMDOC 
            SET 
            CDOC_UDS_SURT = '` + cantidad + `',
            CDOC_STAT='` + estatus + `'
            WHERE CDOC_FOL = '` + folio + `'
            AND CDOC_OPE=1
            AND CDOC_ALM='` + almacen + `'
            `;
            dbCOBOL.queryResult(sql, function(err, rows) {
                if (err) {
                    callback(err, null);
                    throw err;
                    
                } else {
                    callback(null, rows);
                }
            });
        }


    }
};
modificarModel.updatePrevioComren = (folio,cantidad,articulo,callback) => {
    if (dbCOBOL) {
        const sql = `UPDATE PUBLIC.COMREN 
        SET 
        CREN_SURT = '` + cantidad + `'
        WHERE CREN_FOL = '` + folio + `'
        AND CREN_ART='` + articulo + `'
        AND CREN_OPE=1
        `;
        dbCOBOL.queryResult(sql, function(err, rows) {
            if (err) {
                callback(err, null);
                throw err;
               
            } else {
                callback(null, rows);
            }
        });
    }
};



module.exports = modificarModel;