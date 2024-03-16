const mongoose=require('mongoose');
const validator = require('validator');

//Schema
const productSchema=mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, "Name must contains atleast 3 characters"],
        maxLength: [100, "Name cannot exceed 100 characters"],
    },
      image: {
        type: String,
        required: true,
        validate: {
          validator: function (v) {
            return validator.isURL(v, { protocols: ['http', 'https'], require_protocol: true });
          },
          message: (props) => `${props.value} is not a valid URL for picture!`,
        },
      },
      description: {
        type: String,
        required: true,
        maxLength: [100, "Description cannot exceed 20 characters"],
      },
      price: {
        type: Number,
        required: true,
      },
      
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  versionKey: false,
}
)



//model

const ProductModel=mongoose.model('Product',productSchema)

module.exports={
    ProductModel
}