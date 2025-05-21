import { Request, Response } from 'express';
import * as _ from 'lodash';
import Zona from '../models/zona.model';
import { exec } from 'child_process';

export class ZonaController {
    crearZona = (req: Request, res: Response) => {
        const nuevaZona = new Zona({
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
    }

    obtenerZonas = (req: Request, res: Response) => {
        Zona.find()
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
    }

    actualizarZona = (req: Request, res: Response) => {
        Zona.findByIdAndUpdate(req.params.id,{
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
    }

    eliminarZona = (req: Request, res: Response) => {
        Zona.findByIdAndDelete(req.params.id)
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
    }
}