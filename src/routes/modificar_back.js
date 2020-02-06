const back = require('../models/modificar_back');
module.exports = function(app) {
    app.post('/modificar_backorder', (req, res) => {
        let almacen = req.body.almacen;
        
        let articulos = req.body.articulos;
        //console.log(articulos);

        
        back.modificar_backorder_json(almacen, articulos,  (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al modificar backorder:' + err
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

    app.post('/modificarback', (req, res) => {
        var reqData = req.body;
        var cantidad=req.body.cantidad;
        //console.log(reqData);
        //console.log(cantidad);
        back.getBack(reqData, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al consultar back:' + err
                });

            } else {
                if (data.length < 1) {
                    res.json({
                        success: false,
                        message: "No encontro back"
                    });
                } else {
                    var backorder=data[0].backorder-cantidad;
                    //console.log(backorder);
                    back.modificarBack(reqData,backorder,(err,data)=>{
                        if(err)
                        {
                            res.json({
                                success: false,
                                message: "error al modificar back "+err
                            });
                        }
                        else{
                            res.json({
                                success: true,
                                message: "Se Modifico backorder con exito"
                            });
                        }
                    })

                }
            }
        });
    });

}