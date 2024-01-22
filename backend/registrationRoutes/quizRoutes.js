// const router =  require('express').Router()
// const UserRegistration = require("../quizRegistration/quizRegister")

// router.post("/", async (req, res) => {
//     try {
//         const { name, educationLevel } = req.body;
//         const newRegistration = await UserRegistration.create({
//             name,
//             educationLevel,
//         });
//         res.json('successfully registered', newRegistration);
//         console.log('registered successfully');
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Internal Server Error' }); // Add an error response
//     }
// });


// module.exports = router