const controlEntrega = require('../models/control_entrega');

module.exports = function(app) {

    app.get('/consulta_previo/:codigo/:almacen', (req, res) => {
        let codigo = req.params.codigo;
        let almacen = req.params.almacen;
        let estatus = "";
        let fecha = "";
        controlEntrega.getEstatus(codigo, almacen, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al consultar previo:' + err
                });
            } else {
                if (data.length == 0) {
                    res.json({
                        success: false,
                        message: 'no existe folio'
                    });

                } else {
                    estatus = data[0].ESTATUS;
                    fecha = data[0].fecha;
                    if (estatus == "S") {
                        res.json({
                            success: false,
                            message: 'factura surtida'
                        });
                    } else {
                        if (estatus == "A") {

                            controlEntrega.getPrevioCompra(codigo, fecha, almacen, (err, data) => {
                                if (err) {
                                    res.status(500).send({
                                        success: false,
                                        message: 'Error al consultar previo:' + err
                                    });
                                } else {
                                    controlEntrega.getComentarios(codigo, (err, data2) => {
                                        if (err) {
                                            res.status(500).send({
                                                success: false,
                                                message: 'Error al consultar comentarios:' + err
                                            });
                                        } else {
                                            if (data2.length == 0) {
                                                //console.log("sin comentarios");
                                                res.json({
                                                    success: true,
                                                    previo: data,
                                                    success_coment: false
                                                });
                                            } else {
                                                res.json({
                                                    success: true,
                                                    previo: data,
                                                    success_coment: true,
                                                    comentarios: data2
                                                });
                                            }


                                        }

                                    })


                                }
                            });

                        }
                    }

                }

            }




        });


    });



    app.get('/complementos/:folio/:almacen', (req, res) => {
        let folio = req.params.folio;
        let almacen = req.params.almacen;
        controlEntrega.getComplementos(folio, almacen, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al consultar complementos:' + err
                });

            } else {
                if (data.length < 1) {
                    res.json({
                        success: false,
                        mensaje: "No encontro complementos"
                    });
                } else {
                    res.json({
                        success: true,
                        complementos: data,
                    });
                }
            }

        });
    });


}