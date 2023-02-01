import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:true
    },
    phoneNumber:{
        type:String,
        // required:true
    }
    // dateOfBirth: {
    //     type: Date,
    //     max:'31-01-2004'
    // }
});

export default mongoose.model("Form", userSchema);