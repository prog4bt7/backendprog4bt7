"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonaController = void 0;
const zona_model_1 = require("../models/zona.model");
class ZonaController {
    constructor() {
        this.crearZona = (req, res) => {
            const nuevaZona = new zona_model_1.default({
                zona: req.body.zona
            });
            nuevaZona.save()
                .then(zonaCreada => {
                res.status(201).json({
                    ok: true,
                    zona: zonaCreada,
                    message: 'Zona creada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error,
                    message: 'Zona no creada'
                });
            });
        };
        this.obtenerZonas = (req, res) => {
            zona_model_1.default.find()
                .then(zonas => {
                res.status(200).json({
                    ok: true,
                    zonas: zonas
                });
                /*
                    [
                        {
                            _id: "kfhsdkfhskfhsd",
                            zona: "ESPAÑOL"
                        },
                        {
                            _id: "kfhsdkfhskfhsd",
                            zona: "QUÍMICA"
                        }
                    ]
                */
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error
                });
            });
        };
        this.actualizarZona = (req, res) => {
            zona_model_1.default.findByIdAndUpdate(req.params.id, {
                zona: req.body.zona
            })
                .exec()
                .then(zonaActualizada => {
                res.status(200).json({
                    ok: true,
                    zona: zonaActualizada
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error,
                    message: 'Zona no actualizada'
                });
            });
        };
        this.eliminarZona = (req, res) => {
            zona_model_1.default.findByIdAndDelete(req.params.id)
                .then(zonaEliminada => {
                res.status(200).json({
                    ok: true,
                    message: 'Zona eliminada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error,
                    message: 'Zona no eliminada'
                });
            });
        };
    }
}
exports.ZonaController = ZonaController;
//# sourceMappingURL=zona.controller.js.map