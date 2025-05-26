import mongoose, {SchemaType} from "mongoose";

const categoriaShema = mongoose.Schema({
    Imagen : {
        type: String,
        required: true,
        trim: true,
    },
    categoriaNombre:{
        type: String,
        required: true,
        trim: true,
    },
    Descripcion:{
         type: String,
        required: true,
        trim: true,
    }
},
{
    timestamps:true,
});
const Categoria = mongoose.model("Categoria",categoriaShema)

export default Categoria;