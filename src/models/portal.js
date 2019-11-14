let dbAdmin = require('../dbPortal');
let foliosModel = {};

foliosModel.getFolios = (callback) => {
    //console.log(idEmpresa);
    if (dbAdmin) {
        dbAdmin.query(`select f.*, a.nombre as almacen , p.nombre as proveedor, e.nombre as empresa from folios as f 
        LEFT JOIN almacen as a on f.id_almacen = a.id_almacen
        LEFT JOIN proveedor as p on f.id_almacen = p.id_pro
        LEFT JOIN empresa as e on f.id_empresa = e.id_empresa`, function(err, rows) {
            if (err) {
                throw err;
                callback(err,null);
            }
            else {
                console.log(rows);
                callback(null, rows);
            }
        });
    }
};

foliosModel.getDetalles = (id, callback) => {
    //console.log(idEmpresa);
    if (dbAdmin) {
        dbAdmin.query(`select articulo from detalles_folio where folio_oc = `+id, function(err, rows) {
            if (err) {
                callback(err,null);
                throw err;
            }
            else {
                callback(null, rows);
            }
        });
    }
};

foliosModel.updateComentario = (data, callback) =>{
    console.log(data)
    if (dbAdmin){
        const sql = `UPDATE folios SET 
                comentario = '${data.comentario}',
                estatus = '2'
                WHERE folio_previo = ${data.folio_previo}`;
        dbAdmin.query(sql, function (error, rows){
            if (error) {
                callback(error,null);
                throw error;
                //console.log(error);
                //callback(null,err.message)
            } else {                  
                callback(null, rows);
            }
        });
    }
};

foliosModel.insertFolio = (foliosData, callback) => {
    if (dbAdmin){
        dbAdmin.query(`INSERT INTO folios SET ? `, foliosData, (error, rows) => {
            if (error) {
                //console.log(error);
                callback(error,null);
                throw error;
            } else {                  
                callback(null, rows);
            }
        });
    }
}

foliosModel.insertEmpresa = (reqData, callback) => {
    if (dbAdmin){
        dbAdmin.query(`INSERT INTO empresa SET ? `, reqData, (error, rows) => {
            if (error) {
                
                callback(error,null);
                throw error;
            } else {                  
                callback(null, rows);
            }
        });
    }
}

foliosModel.insertAlmacen = (reqData, callback) => {
    if (dbAdmin){
        dbAdmin.query(`SELECT id_almacen FROM  almacen as a WHERE EXISTS (select * from  empresa as e WHERE a.id_empresa = `+reqData.id_empresa +` and a.id_almacen =`+reqData.id_almacen +`)`, (error, rows) => {
            if (error) {
                callback(error,null);
                throw error;
            } else {                  
                row= rows;
                if(row.length> 0){
                    console.log(row) 
                }else{
                    
                    dbAdmin.query(`INSERT INTO almacen SET ? `, reqData, (error, rows) =>{
                        if (error) {
                            callback(error,null);
                            throw error;
                        } else { 
                            console.log('Tupla afectada')                 
                            callback(null, rows);
                        }
                    });
                }
            }
        });
       
    }
}
/*SELECT id_pro   
FROM  proveedor as p
WHERE EXISTS (select * from  empresa as e WHERE p.id_empresa = 3 and p.id_pro = 3) ;*/
foliosModel.insertProveedor = (reqData, callback) => {
    if (dbAdmin){

        dbAdmin.query(`SELECT id_pro FROM  proveedor as p 
        WHERE EXISTS (select * from  empresa as e WHERE p.id_empresa = `+reqData.id_empresa +` and p.id_pro =`+reqData.id_pro +`)`, (error, rows) => {
            if (error) {
                callback(error,null);
                throw error;
            } else {                  
                row= rows;
                if(row.length> 0){
                    console.log(row) 
                }else{
                    
                    dbAdmin.query(`INSERT INTO proveedor SET ? `, reqData, (error, rows) => {
                        if (error) {
                            callback(error,null);
                            throw error;
                        } else { 
                            console.log('Tupla afectada')                 
                            callback(null, rows);
                        }
                    });
                }
            }
        });
}
}

foliosModel.insertDetalles = (reqData, callback) => {
    if (dbAdmin){
        let row;
        console.log(reqData);
        for(let item of reqData) {
            item.pendiente = parseFloat(item.cantidad) - parseFloat(item.recibido);
            item.pendiente =  item.pendiente.toFixed(2);
            dbAdmin.query(`INSERT INTO detalles_folio SET ? `, item, (error, rows) => {
                if (error) {
                    callback(error,null);
                    throw error;
                    //console.log(error);
                } else {                  
                    row= rows;
                }
            });
        }
        callback(null, row);  
    }
}

foliosModel.insertarticulo = (reqData, callback) => {
    if (dbAdmin){
        let row;
        for(let item of reqData) {
            dbAdmin.query(`SELECT id_articulo FROM  articulos as a
                WHERE 
                EXISTS 
                (select * 
                    from  articulos as e 
                    WHERE a.id_empresa =`+item.id_empresa+` and a.id_articulo ='`+item.id_articulo+`')`, (error, rows) => {
                if (error) {
                    //console.log(error);
                    dbAdmin.query(`INSERT INTO articulos SET ? `, item, (error, rows) => {
                        if (error) {
                            //console.log(error);
                            callback(error,null);
                            throw error;
                        } else {                  
                            row= rows;
                        }
                    });
                } else {                  
                    row= rows;
                    if(row.length> 0){
                        console.log(row); 
                    }else{
                        dbAdmin.query(`INSERT INTO articulos SET ? `, item, (error, rows) => {
                            if (error) {
                                //console.log(error);
                                callback(error,null);
                                throw error;
                            } else {                  
                                row= rows;
                            }
                        });
                    }
                }
            });
        }
        callback(null, row);  
    }
}

foliosModel.insertDetalleComp=(reqData,callback)=>{
    //console.log(error);
    if(dbAdmin)
    {
    let row;
        for (var item of reqData){
        dbAdmin.query(`INSERT INTO detalle_folios SET ? `, item, (error, rows) => {
            if (error) {
                //console.log(error);
                callback(error,null);
                throw error;
            } else {                  
                row= rows;
            }
        });
        }
        callback(null, row);
    }
}

foliosModel.insertart=(reqData,callback)=>{
    //console.log(error);
    if(dbAdmin)
    {
      let row;
      //console.log(reqData.length);
        for (var item of reqData){
          dbAdmin.query(`Select * from articulos where id_articulo='` + item.id_articulo + `' and id_empresa='` + item.id_empresa + `'   `, (error, rows) => {
              if (error) {
                  console.log(entonc);
                  callback(error,null);
                  throw error;
              } else {                  
                  row= rows;
                  console.log(rows);
              }
          });
        }
    
    }

}



module.exports = foliosModel;