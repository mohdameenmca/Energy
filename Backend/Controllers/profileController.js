const profileModel = require("../Model/profileModel")

const registerProfile = async(req,res)=>{
    try{
        const {fname,lname,email,gasno,Ebno,address,pincode,energyType,energyLevel}= req.body;
        const myProfile = await profileModel.create({
            fname,
            lname,
            email,
            gasno,
            Ebno,
            address,
            pincode
            // energyType,
            // energyLevel
        })
        res.json({
            success:true,
            myProfile
        })
    }
    catch(err){
        res.json({
            success:false,
            message:err.message
        })
    }

}


const getProfile = async(req,res)=>{
    const {email} = req.params;

    try{
        const showProfile = await profileModel.find({email})

        if(email){
            res.json({
                success:true,
                showProfile
            })
        }
    }
    catch(e){
        res.json({
            success:false,
            message:e.message
        })
    }
}

module.exports= {
    registerProfile,
    getProfile
};