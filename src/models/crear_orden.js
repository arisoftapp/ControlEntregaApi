let dbCOBOL = require('../dbMacro');
let crearModel = {};

crearModel.insert_comren = (folio, posicion, fecha, factor, cantidad, articulo, clasificacion, proveedor, costo, tipocambio, imp1, imp2, fechasf, imp1_tab, imp2_tab, callback) => {
    if (dbCOBOL) {
        var sql = `INSERT INTO PUBLIC.COMREN (
CREN_OPE,CREN_FOL,CREN_POS,CREN_TIPO,CREN_FCH,CREN_MOV,CREN_FCH_MOD,CREN_FACTOR,CREN_CANT,CREN_OPEN,CREN_ART,CREN_CLF,
CREN_PRO,CREN_COS,CREN_TCAM,CREN_DSC1,CREN_DSC2,CREN_DSC3,CREN_DSC4,CREN_DSC5,CREN_CAR1US,CREN_CAR2US,CREN_CAR3US,
CREN_DSC_GLO,CREN_ARAN,CREN_EXE,CREN_IMP1,CREN_IMP2,CREN_ESTATAL,CREN_CAR1,CREN_CAR2,CREN_CAR3,CREN_CAR4,CREN_CAR5,
CREN_CAR6,CREN_CLI,CREN_OBRA,CREN_OBR_CON,CREN_ADIC,CREN_DSC_NOCR,CREN_FOL_NOCR,CREN_CANT_NOCR,CREN_SURT,CREN_DEV,
CREN_BACK,CREN_CANT2,CREN_FCH_ENV,CREN_FCH_REC,CREN_FCH_URE,CREN_FCH2,CREN_AUX,CREN_POS_AUX,CREN_MAS,CREN_IMP1_TAB,
CREN_IMP2_TAB,CREN_CLIENTE,CREN_CONCEPTO,CREN_STAT,CREN_MAS_COMENT,CREN_COMENT,CREN_CANT_AUX,CREN_FCH_CADUCIDAD,
CREN_FOL_PED_ESP,CREN_PRC_MAX,CREN_POS_REM,CREN_RP_CANT_SURT,CREN_RP_POS_REM,CREN_FCH_MODIF,CREN_GRAV_EXE,CREN_TOT_COS_CAR,
CREN_CONTRATO,CREN_TAR,CREN_TAR_IMP,CREN_AGRUP
            ) VALUES (
                '2',
                '` + folio + `',
                '` + posicion + `',
                '1',
                '` + fecha + `',
                'A',
                '',
                '` + factor + `',
                '` + cantidad + `',
                '0',
                '` + articulo + `',
                '` + clasificacion + `',
                '` + proveedor + `',
                '` + costo + `',
                '` + tipocambio + `',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                'N',
                '` + imp1 + `',
                '` + imp2 + `',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '',
                '',
                '',
                '',
                '0',
                '',
                '0',
                '0',
                '0',
                '0',
                '0',
                '` + fecha + `',
                '` + fecha + `',
                '',
                '` + fechasf + `',
                '',
                '` + posicion + `',
                '',
                '` + imp1_tab + `',
                '` + imp2_tab + `',
                '',
                '',
                'A',
                '',
                '',
                '` + cantidad + `',
                '0',
                '',
                '0',
                '0',
                '0',
                '0',
                '` + fechasf + `',
                '0',
                '0',
                '',
                '0',
                '0',
                '0'
            )`;
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
crearModel.insert_coment = (folio, posicion, fecha, fechasf, comentario, callback) => {
    if (dbCOBOL) {
        var sql = `INSERT INTO PUBLIC.COMREN (
CREN_OPE,CREN_FOL,CREN_POS,CREN_TIPO,CREN_FCH,CREN_MOV,CREN_FCH_MOD,CREN_FACTOR,CREN_CANT,CREN_OPEN,CREN_ART,CREN_CLF,
CREN_PRO,CREN_COS,CREN_TCAM,CREN_DSC1,CREN_DSC2,CREN_DSC3,CREN_DSC4,CREN_DSC5,CREN_CAR1US,CREN_CAR2US,CREN_CAR3US,
CREN_DSC_GLO,CREN_ARAN,CREN_EXE,CREN_IMP1,CREN_IMP2,CREN_ESTATAL,CREN_CAR1,CREN_CAR2,CREN_CAR3,CREN_CAR4,CREN_CAR5,
CREN_CAR6,CREN_CLI,CREN_OBRA,CREN_OBR_CON,CREN_ADIC,CREN_DSC_NOCR,CREN_FOL_NOCR,CREN_CANT_NOCR,CREN_SURT,CREN_DEV,
CREN_BACK,CREN_CANT2,CREN_FCH_ENV,CREN_FCH_REC,CREN_FCH_URE,CREN_FCH2,CREN_AUX,CREN_POS_AUX,CREN_MAS,CREN_IMP1_TAB,
CREN_IMP2_TAB,CREN_CLIENTE,CREN_CONCEPTO,CREN_STAT,CREN_MAS_COMENT,CREN_COMENT,CREN_CANT_AUX,CREN_FCH_CADUCIDAD,
CREN_FOL_PED_ESP,CREN_PRC_MAX,CREN_POS_REM,CREN_RP_CANT_SURT,CREN_RP_POS_REM,CREN_FCH_MODIF,CREN_GRAV_EXE,CREN_TOT_COS_CAR,
CREN_CONTRATO,CREN_TAR,CREN_TAR_IMP,CREN_AGRUP
            ) VALUES (
                '2',
                '` + folio + `',
                '` + posicion + `',
                '1',
                '` + fecha + `',
                'C',
                '',
                '0',
                '-1',
                '2',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '` + comentario + `',
                '0',
                '0',
                '',
                '0',
                '0',
                '0',
                '0',
                '` + fechasf + `',
                '0',
                '0',
                '',
                '0',
                '0',
                '0'
            )`;
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

crearModel.getDatos_comren = (folio, articulo, callback) => {
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
        CREN_FACTOR AS 'factor',
        CREN_CLF AS 'clasificacion',
        CREN_PRO AS 'proveedor',
        CREN_COS AS 'costo',
        CREN_TCAM AS 'tipocambio',
        CREN_IMP1 AS 'imp1',
        CREN_IMP2 AS 'imp2',
        CREN_IMP1_TAB AS 'imp1_tab',
        CREN_IMP2_TAB AS 'imp2_tab'
        FROM
        PUBLIC.COMREN
        WHERE
        PUBLIC.COMREN.CREN_OPE=1 
        AND PUBLIC.COMREN.CREN_FOL='` + folio + `' 
        AND PUBLIC.COMREN.CREN_ART='` + articulo + `'
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

crearModel.getDatos_comren = (folio, articulo, callback) => {
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
        CREN_FACTOR AS 'factor',
        CREN_CLF AS 'clasificacion',
        CREN_PRO AS 'proveedor',
        CREN_COS AS 'costo',
        CREN_TCAM AS 'tipocambio',
        CREN_IMP1 AS 'imp1',
        CREN_IMP2 AS 'imp2',
        CREN_IMP1_TAB AS 'imp1_tab',
        CREN_IMP2_TAB AS 'imp2_tab'
        FROM
        PUBLIC.COMREN
        WHERE
        PUBLIC.COMREN.CREN_OPE=1 
        AND PUBLIC.COMREN.CREN_FOL='` + folio + `' 
        AND PUBLIC.COMREN.CREN_ART='` + articulo + `'
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
crearModel.insert_comdoc = (folio_orden, folio_previo, fecha, almacen, proveedor, totalreg, totaluds, tipocambio, sumatotal, iva, total, horasf, fechasf, plazo, diadescuento, dias, callback) => {
    if (dbCOBOL) {
        var sql = `INSERT INTO PUBLIC.COMDOC (
            CDOC_OPE,
            CDOC_FOL,
            CDOC_REF_PRO,
            CDOC_REF_TDS,
            CDOC_OPE_AUX,
            CDOC_AUX,
            CDOC_TIPO,
            CDOC_FCH,
            CDOC_FCH_CXP,
             CDOC_ALM,
             CDOC_AUTORIZADO,
             CDOC_PRO,
             CDOC_PLAZO,
             CDOC_PP_DSC_1,
             CDOC_PP_DSC_2,
             CDOC_PP_DSC_3,
             CDOC_PP_DIAS_1,
             CDOC_PP_DIAS_2,
             CDOC_PP_DIAS_3,
             CDOC_REGS,
             CDOC_UDS,
             CDOC_UDS_SURT,
             CDOC_UDS_DEV,
             CDOC_UDS_BACK,
             CDOC_PESO,
             CDOC_MON,
             CDOC_TCAM,
             CDOC_CARUS_1,
             CDOC_CARUS_2,
             CDOC_CARUS_3,
             CDOC_CARUS_4,
             CDOC_CARUS_5,
             CDOC_CARUS_6,
             CDOC_CARUS_7,
             CDOC_CARUS_8,
             CDOC_CARUS_9,
             CDOC_CARUS_10,
             CDOC_CARUS_11,
             CDOC_CARUS_12,
             CDOC_CARUS_13,
             CDOC_CARUS_14,
             CDOC_CARUS_15,
             CDOC_BASEUS_1,
             CDOC_BASEUS_2,
             CDOC_BASEUS_3,
             CDOC_BASEUS_4,
             CDOC_BASEUS_5,
             CDOC_BASEUS_6,
             CDOC_BASEUS_7,
             CDOC_BASEUS_8,
             CDOC_BASEUS_9,
             CDOC_BASEUS_10,
             CDOC_BASEUS_11,
             CDOC_BASEUS_12,
             CDOC_BASEUS_13,
             CDOC_BASEUS_14,
             CDOC_BASEUS_15,
             CDOC_SUMA,
             CDOC_DESCTO,
             CDOC_DSC_GLO,
             CDOC_IMP_DSC,
             CDOC_ARANCEL,
             CDOC_DTA,
             CDOC_EXE,
             CDOC_RET_FLETE,
             CDOC_IEPS,
             CDOC_IVA,
             CDOC_ESTATAL,
             CDOC_GRAV_ESTATAL,
             CDOC_IMPUESTO,
             CDOC_TOTAL,
             CDOC_REF_ANT,
             CDOC_ANT,
             CDOC_PAG,
             CDOC_DEV,
             CDOC_IEPS_DEV,
             CDOC_IVA_DEV,
             CDOC_ESTATAL_DEV,
             CDOC_DSC,
             CDOC_F_PAG,
             CDOC_F_CAN,
             CDOC_H_CAN,
             CDOC_U_CAN,
             CDOC_GEN_MOV,
             CDOC_FOL_MOV,
             CDOC_IMP_MOV,
             CDOC_GEN_ANT,
             CDOC_FOL_ANT,
             CDOC_IMP_ANT,
             CDOC_NUM_PI,
             CDOC_FCH_PI,
             CDOC_LUGAR,
             CDOC_NOTA,
             CDOC_EVAL1,
             CDOC_EVAL2,
             CDOC_EVAL3,
             CDOC_LK_CONT,
             CDOC_CIA,
             CDOC_USU,
             CDOC_STAT,
             CDOC_NOT_1,
             CDOC_NOT_2,
             CDOC_NOT_3,
             CDOC_NOT_4,
             CDOC_NOT_5,
             CDOC_RET_HON,
             CDOC_HON_IVA,
             CDOC_HON_ISR,
             CDOC_FOL_PV,
             CDOC_FCH_ENT,
             CDOC_CONF_FCH,
             CDOC_RESURTIR,
             CDOC_CONCEN,
             CDOC_FINAN,
             CDOC_USU_STAT,
             CDOC_USU_ASIG,
             CDOC_TER,
             CDOC_LK_CONT_CANCEL,
             CDOC_IMP_CED,
             CDOC_DSC_GLO_PORC,
             CDOC_HORA,
             CDOC_FOL_PV_ESP,
             CDOC_FCH_PREV,
             CDOC_USU_PREV,
             CDOC_FOL_PED,
             CDOC_BUYER,
             CDOC_STAT2,
             CDOC_AFEC_APR,
             CDOC_REF_OC_TDS,
             CDOC_REM_PARCIAL,
             CDOC_STAT3,
             CDOC_USU_A,
             CDOC_USU_B,
             CDOC_FCH_MODIF,
             CDOC_UUID,
             CDOC_CBB_SERIE,
             CDOC_CBB_FOL,
             CDOC_CBB,
             CDOC_TOT_COS_CAR,
             CDOC_AGENTE,
             CDOC_TAR_TOT_IMP,
             CDOC_STAT_IMPORT,
             CDOC_REF_IMPORT,
             CDOC_FCH2
            ) VALUES (
                '2',
                '` + folio_orden + `',
                '` + folio_orden + `',
                '',
                '1',
                '` + folio_previo + `',
                '1',
                '` + fecha + `',
                '` + fecha + `',
                '` + almacen + `',
                'N',
                '` + proveedor + `',
                '` + plazo + `',
                '` + diadescuento + `',
                '0',
                '0',
                '` + dias + `',
                '0',
                '0',
                '` + totalreg + `',
                '` + totaluds + `',
                '0',
                '0',
                '0',
                '0',
                '0',
                '` + tipocambio + `',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '` + sumatotal + `',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '` + iva + `',
                '0',
                '0',
                '` + iva + `',
                '` + total + `',
                '',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '',
                '',
                '0',
                '0',
                '',
                '',
                '0',
                '',
                '',
                '0',
                '',
                '',
                '',
                '',
                '0',
                '0',
                '',
                '',
                '1',
                '1',
                'A',
                '0001',
                '',
                '',
                '',
                '',
                '',
                '0',
                '0',
                '',
                '0',
                '',
                '',
                'N',
                'N',
                '',
                '1',
                '',
                '',
                '0',
                '0',
                '` + horasf + `',
                '',
                '0',
                '0',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '` + fechasf + `',
                '',
                '',
                '0',
                '',
                '0',
                '',
                '0',
                '',
                '',
                '0'
            )`;
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

crearModel.getDatos_comdoc = (folio, almacen, callback) => {
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
        CDOC_PLAZO AS 'plazo',
        CDOC_PP_DSC_1 AS 'descuentodias',
        CDOC_PP_DIAS_1 AS 'dias',
        CDOC_PRO AS 'proveedor',
        CDOC_TCAM AS 'tipocambio'
        FROM
        PUBLIC.COMDOC
        WHERE
        PUBLIC.COMDOC.CDOC_OPE=1 
        AND PUBLIC.COMDOC.CDOC_FOL='` + folio + `' 
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

module.exports = crearModel;