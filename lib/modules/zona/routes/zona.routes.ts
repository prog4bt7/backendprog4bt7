import { ZonaController } from "../controllers/zona.controller";

export class ZonaRoutes {
    private zonaController: ZonaController = new ZonaController();
    public routes(app): void {
        app('/zona')
        .get(this.zonaController.obtenerZonas)
        .post(this.zonaController.crearZona);

        app('/zona/:id')
        .put(this.zonaController.actualizarZona)
        .delete(this.zonaController.eliminarZona);
    }
}