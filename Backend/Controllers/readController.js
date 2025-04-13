
const readModel = require("../Model/readModel");

// const updateRead = async(req,res)=>{
//     try{
//         const {email}
//         const {energyType,energyLevel,email} = req.body;
//         const updateData = await readModel.create({
//             energyType,
//             energyLevel,
//             email
//         })
//         res.json({
//             success:true,
//             updateData
//         })
//     }
//     catch(e){
//         res.json({
//             success:false,
//             message:e.message
//         })
//     }
// }

const updateRead = async (req, res) => {
    const { userEmail } = req.params;
    const { energyType, energyLevel } = req.body;

    try {
        // Find the user reading by email and update it
        const updatedRead = await readModel.findOneAndUpdate(
            { userEmail },  // Find by email
            { energyType, energyLevel },  // New reading details
            { new: true, upsert: true } // `new` returns the updated document, `upsert` creates a new document if one doesn't exist
        );

        if (updatedRead) {
            res.json({
                success: true,
                updatedRead
            });
        } else {
            res.json({
                success: false,
                message: "Failed to update the reading"
            });
        }
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        });
    }
};


const showreadings = async (req, res) => {
    const { userEmail } = req.params;
  
    try {
      // Fetch the readings based on the user's email
      const showRead = await readModel.find({ userEmail });
  
      if (userEmail) {
        // If readings are found, send a success response
        res.json({
          success: true,
          showRead, // returning the data as showRead
        });
      } 
      
    } catch (e) {
      // Handle any errors that occur during the database query
      res.json({
        success: false,
        message: e.message || "An error occurred while fetching the readings",
      });
    }
  };
  
  module.exports = {
    updateRead,
    showreadings,
  };
  