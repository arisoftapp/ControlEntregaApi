const folio = require('../models/portal');

module.exports = function (app) {

app.get('/folios', (req, res) => {
    folio.getFolios((err, data) => {
        if (err) {
            res.json({
                success: false,
                message: "Ocurrió un error al obtener los datos"
            });
        } else{
            res.json({
                success: true,
                data: data
            });
        }
    });
});
//Se consiguen las consultas del paciente
app.get('/detalles/:id', (req, res) => {
    var id = req.params.id;
    folio.getDetalles(id, (err, data) => {
        if (err) {
            res.json({
                success: false,
                message: "Ocurrió un error al obtener los datos"
            });
        } else{
            res.json({
                success: true,
                data: data
            });
        }
    });
});

app.put('/comentario', (req, res) => {
    console.log(req.body);
    const Data = {
        comentario : req.body.comentario,
        folio_previo : req.body.folio_previo,
    };
    folio.updateComentario(Data, (err, data) => {
        if (err){
            res.json({
                success: false,
                message: err
            });
        }else{
            res.json({
                success: true,
                message: "¡Se Guardaron los cambios exitosamente!"
            });
        }
    });
});

app.post('/insert', (req, res) => {
    //console.log(req.body);
    const folioData = {
        folio_previo: req.body.folio_previo,
        fecha_previo: req.body.fecha_previo,
        folio_oc: req.body.folio_oc,
        fecha_oc: req.body.fecha_oc,
        id_provedor: req.body.id_provedor,
        id_almacen: req.body.id_almacen,
        id_empresa: req.body.id_empresa,
        usuario: req.body.usuario,
        comentario_in: req.body.comentario_in,
        estatus: req.body.estatus
    };
    
    const almacenData = {
        id_almacen: req.body.id_almacen,
        nombre: req.body.almacen,
        id_empresa: req.body.id_empresa,
    };

    const empresaData = {
        id_empresa: req.body.id_empresa,
        nombre: req.body.empresa
    };

    const provData = {
        id_pro: req.body.id_provedor,
        nombre: req.body.proveedor,
        id_empresa: req.body.id_empresa,
    };

    folio.insertFolio(folioData, (err, data) => {
        if (err){
            res.json({
                success: false,
                message: err
            });
        }else{
           /* folio.insertEmpresa(empresaData, (err, data) => {
            });*/
            folio.insertAlmacen(almacenData, (err, data) => {
            });
            folio.insertProveedor(provData, (err, data) => {
            });
            res.json({
                success: true,
                message: "¡Registro exitoso!"
            });
        }
    });
});

app.post('/insertDtl', (req, res) => {
    const reqdata = req.body;
    folio.insertDetalles(reqdata, (err, data) => {
        if (err){
            res.json({
                success: false,
                message: err
            });
        }else{
            res.json({
                success: true,
                message: "¡Registro exitoso!"
            });
        }
    });
});




}