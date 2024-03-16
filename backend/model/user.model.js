const mongoose=require('mongoose');
const validator=require('validator');


// User Schema
const userSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: [3, "Username must contains atleast 3 characters"],
        maxLength: [30, "Username cannot exceed 20 characters"],
    },
    email: {
        type: String,
        required: true,
        validate:  [validator.isEmail, "Provide a valid email"],
    },
    password: {
        type: String,
        required: true,
        minLength: [4, "password must contains atleast 4 characters"],
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


// User Model
const UserModel=mongoose.model('User',userSchema);

module.exports={
    UserModel
}