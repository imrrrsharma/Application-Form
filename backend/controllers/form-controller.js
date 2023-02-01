import Form from "../model/Form.js";

export const getAllUser = async(req,res,next)=>{
    let users;
    try{
        users = await Form.find();
    }catch(err){
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message:"No users found"});
    }
    return res.status(200).json({users});
};

export const formSubmit = async(req, res, next) =>{
    const {name, email, phoneNumber} = req.body;
    let existingUser;
    try{
        existingUser = await Form.findOne({email});
    }catch(err){
        return console.log(err);
    }

    if(existingUser){
        return res.status(400).json({message:"User Already Here in the Form"});
    }

    const user = new Form({
        name:name,
        email:email,
        phoneNumber:phoneNumber
        // dateOfBirth:dob
    })

    try{
        await user.save();
    }catch(err){
         return console.log(err);
    }

    return res.status(201).json({user});
};