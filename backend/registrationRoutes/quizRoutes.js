const router =  require('express').Router()
const UserRegistration = require("../quizRegistration/quizRegister")

router.post("/register",async(res,req)=>{
    try{
       const {name,educationLevel} = req.body
       const newRegistration = await UserRegistration.create({
        name,
        educationLevel,
       })
       res.json('successfully registered',newRegistration)
       console.log('registered successfully')
    }catch(error){
        console.log(error)
    }
})

// router.post("/login",(req,res)=>{
//     UserRegistration.find(){

//     }
// })

module.exports = router