const modificar_previo = require('../models/modificar_previo');

module.exports = function(app) {

    app.put('/modificar_previo_comdoc/:folio/:almacen/:cantidad/:estatus', (req, res) => {
        let folio = req.params.folio;
        let cantidad = req.params.cantidad;
        let almacen = req.params.almacen;
        let estatus= req.params.estatus;
        modificar_previo.updatePrevioComdoc(folio,almacen,cantidad,estatus,(err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al modificar comdoc:' + err
                });

            } else {
                    res.json({
                        success: true,
                        message:"Se modifico",
                        respuesta: data,
                    });
                
            }

        });
    });

    app.put('/modificar_previo_comren/:folio/:cantidad/:articulo', (req, res) => {
        let folio = req.params.folio;
        let cantidad = req.params.cantidad;
        let articulo = req.params.articulo;
        modificar_previo.updatePrevioComren(folio,cantidad,articulo,(err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al modificar comren:' + err
                });

            } else {
                    res.json({
                        
                        success: true,
                        message:"Se modifico:",
                        respuesta: data,
                    });
                
            }

        });
    });
    app.post('/modificar_previo_json', (req, res) => {
        let folio_previo = req.body.folio_previo;
        let articulos = req.body.articulos;

        //console.log(folio_previo);
        //console.log(articulos);
        
        modificar_previo.modificar_previo_json(folio_previo,articulos, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al insertar comentarios:' + err
                });

            } else {
                res.json({
                    success: true,
                    message: "Se creo",
                    respuesta: data,
                });

            }

        });
        
        
    });


}