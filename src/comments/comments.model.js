import mongoose from 'mongoose';

const ComentarioSchema = mongoose.Schema({
    comentary: {
      type: String,
      required: [true, "The comentary is required"],
    },
    autor: {
      type: String,
      required: [true, "autor is mandatory"],
      unique: true,
    },
    state: {
      type: Boolean,
      default: true
    },
});



export default mongoose.model('Comentario', ComentarioSchema);
