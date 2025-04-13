const billsModel = require('../Model/billsModel');


//Generate the New bills via postMan
const energyBill = async(req,res)=>{
    const {billNo,billDate,energyUsage,userEmail,billStatus} = req.body;

    try{
        const myBill = await billsModel.create({
            billNo,
            billDate,
            billStatus,
            energyUsage,
            userEmail
        })
        res.json({
            success:true,
            myBill
        })
    }
    catch(err)
    {
        res.json({
            success:false,
            message:err.message
        })
    }
}


//Showcase the previous bill list to the Client browser
const showBillsByEmail = async(req,res)=>{
    const {userEmail} = req.params;
    try{
        const previousBills = await billsModel.find({userEmail});
        if(userEmail){
            res.json({
                success:true,
                previousBills
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

const showBills = async(req,res)=>{
    const {billNo} = req.params;
    try{
        const previousBills = await billsModel.find({billNo});
        if(billNo){
            res.json({
                success:true,
                previousBills
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


const dueApproval = async(req,res)=>{
    const {billNo} = req.params;
    const {billStatus} = req.body;
    try{
        const dueApproved = await billsModel.findOneAndUpdate(
            {billNo},
            {billStatus},
            { new: true }
        );
        if(dueApproved){
            res.json({
                success:true,
                dueApproved
            })
        }
        else{
            res.json({
                success:false,
                message:"Bill not found"
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


// const showBillsByEmail = async(req,res)=>{
//     const {userEmail} = req.params;
//     try{
//         const previousBills = await billsModel.find({userEmail});
//         if(userEmail){
//             res.json({
//                 success:true,
//                 previousBills
//             })
//         }
       
//     }
//     catch(e){
//         res.json({
//             success:false,
//             message:e.message
//         })
//     }
// }

module.exports = { 
    energyBill, 
    showBillsByEmail ,
    showBills,
    dueApproval
};
