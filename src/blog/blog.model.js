import mongoose from 'mongoose';

const BlogSchema = mongoose.Schema({
      title: {
        type: String,
        required: [true, "The title is required"],
      },
      autor: {
        type: String,
        required: [true, "autor is mandatory"],
        unique: true,
      },
      content: {
        type: String,
        required: [true, "content is required"],
      },
      state: {
        type: Boolean,
        default: true,
      },
      detalle: {
        type: [{
            comentary: { type: String, required: true },
        }],
        _id: false,
        }
});


BlogSchema.methods.toJSON = function(){
    const { __v, password, _id, ...blog} = this.toObject();
    blog.uid = _id;
    return blog;
  }
  
  export default mongoose.model('Blog', BlogSchema);

