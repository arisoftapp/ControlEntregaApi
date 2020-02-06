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
function pause(milisegundos){
    var dt=new Date();
    while((new Date())-dt<=milisegundos){}
}
backModel.modificar_backorder_json = (almacen,articulos, callback) => {

    let respuesta;
    let total=articulos.length;
    let count=1;
    //console.log(articulos.length);
        for (var item of articulos){
           pause(1000);
           const sql = `UPDATE PUBLIC.INVEXI 
           SET 
           EXI_ORD = '` + item.cantidad + `'
           WHERE 
           EXI_ALM = '` + almacen + `'
           AND EXI_ART='` + item.articulo + `'
       
           `;
                    if(dbCOBOL)
                    {
                        dbCOBOL.queryResult(sql, function(err, rows) {
   
                            if (err) {
                                //console.log("error en el articulo "+item.articulo+" "+item.posicion);
                                //callback(err, null);
                                respuesta=err;
                                //throw err;
                                if(count==1)
                                {
                                    console.log("error en:"+ err);
                                    //callback(err, null);
                                    throw err;
                                }
                            } else {
                               respuesta=rows;
                               //console.log(rows);
                               //console.log("se inserto articulo:"+item.articulo+" "+item.posicion);
                               if(count==1)
                               {
                                console.log(rows);
                                //callback(null, respuesta);
                               
                               }
                            }
                            count++;
                        });
                    }

            
        };
    callback(null, respuesta);
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