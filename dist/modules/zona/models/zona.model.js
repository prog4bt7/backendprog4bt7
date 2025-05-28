"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ZonaSchema = new Schema({
    zona: {
        type: String,
        required: [true, 'zona es requerido'],
        unique: true
    }
});
const Zona = mongoose.model("Zona", ZonaSchema);
exports.default = Zona;
//# sourceMappingURL=zona.model.js.map