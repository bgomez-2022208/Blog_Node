import mongoose from 'mongoose';

const ComentarioSchema = mongoose.Schema({
    comentary: {
      type: String,
      required: [true, "The comentary is required"],
    },
});

ComentarioSchema.methods.toJSON = function(){
    const{ __v, _id, ...comentario} = this.toObject();
    comentario.uid = _id;
    return comentario;
};

export default mongoose.model('Comentario', ComentarioSchema);
