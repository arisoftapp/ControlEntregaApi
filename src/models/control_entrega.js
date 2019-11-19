let dbCOBOL = require('../dbMacro');
let consurModel = {};
consurModel.getPrevioCompra = (codigo, fecha, almacen, callback) => {
    dbCOBOL.open;
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
        CREN_ART as 'articulo',
        CREN_CANT as 'cantidad',
        CREN_SURT as 'surtido',
        CREN_POS as 'posicion',
        ART_DESC1 as 'descripcion',
        ART_COD2 as 'codigo2',
        CDOC_ALM as 'almacen',
        CREN_COS as 'costo',
        CREN_IMP1 as 'iva'
        FROM PUBLIC.COMREN, PUBLIC.INVART,PUBLIC.COMDOC
        WHERE PUBLIC.COMREN.CREN_OPE=1
        AND PUBLIC.COMREN.CREN_FOL='` + codigo + `'
        AND PUBLIC.COMREN.CREN_FCH='` + fecha + `'
        AND PUBLIC.COMDOC.CDOC_ALM='` + almacen + `'
        AND PUBLIC.INVART.ART_COD1=PUBLIC.COMREN.CREN_ART
        AND PUBLIC.COMDOC.CDOC_FOL=PUBLIC.COMREN.CREN_FOL
    
    `, function(err, rows) {
            if (err) {
                throw err;
                callback(err, null);
            } else {
                callback(null, rows);
            }
        });
    }
};
consurModel.getEstatus = (codigo, almacen, callback) => {
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
        CDOC_STAT as ESTATUS,
        CDOC_FCH as 'fecha'
        FROM PUBLIC.COMDOC
        WHERE PUBLIC.COMDOC.CDOC_OPE=1
        AND PUBLIC.COMDOC.CDOC_FOL='` + codigo + `'
        AND PUBLIC.COMDOC.CDOC_ALM='` + almacen + `'
    
    `, function(err, rows) {
            if (err) {
                throw err;
                callback(err, null);
            } else {
                callback(null, rows);
            }
        });
    }
};
consurModel.getComplementos = (folio, almacen, callback) => {
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
        CDOC_FOL as 'folio',
        CDOC_FCH as 'fecha',
        CDOC_ALM as 'almacen',
        CDOC_UDS as 'unidades_a_surtir',
        CDOC_PRO as'codigo_prov',
        PRO_NOMBRE as 'nom_prov'
        FROM PUBLIC.COMDOC,PUBLIC.COMPRO
        WHERE PUBLIC.COMDOC.CDOC_OPE=1
        AND PUBLIC.COMDOC.CDOC_FOL='` + folio + `'
        AND PUBLIC.COMDOC.CDOC_ALM='` + almacen + `'
        AND PUBLIC.COMPRO.PRO_LLAVE=PUBLIC.COMDOC.CDOC_PRO
    
    `, function(err, rows) {
            if (err) {
                throw err;
                callback(err, null);
            } else {
                callback(null, rows);
            }
        });
    }
};

consurModel.getComentarios = (folio, callback) => {
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
        CREN_COMENT as 'comentario'
        FROM PUBLIC.COMREN
        WHERE PUBLIC.COMREN.CREN_OPE=1
        AND PUBLIC.COMREN.CREN_FOL='` + folio + `'
        AND PUBLIC.COMREN.CREN_MOV='C'
        AND PUBLIC.COMREN.CREN_CANT=-1
    
    
    `, function(err, rows) {
            if (err) {
                throw err;
                callback(err, null);
            } else {
                callback(null, rows);
            }
        });
    }
};

module.exports = consurModel;