import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface IZona extends mongoose.Document {  
    zona: string;
}
    

const ZonaSchema = new Schema({
    zona: {
        type: String,
        required: [true, 'zona es requerido'],
        unique: true
    }
});

const Zona = mongoose.model<IZona>("Zona", ZonaSchema);
export default Zona;