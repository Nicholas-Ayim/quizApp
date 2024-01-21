const router =  require('express').Router()
const UserRegistration = require("../quizRegistration/quizRegister")

router.post("/register",async(res,req)=>{
    try{
       const {name,picture,educationLevel} = UserRegistration
       const newRegistration = await UserRegistration.create({
        name,
        picture,
        educationLevel,
       })
       res.json('successfully registered',newRegistration)
    }catch(error){
        console.log(error)
    }
})

// router.post("/login",(req,res)=>{
//     UserRegistration.find(){

//     }
// })

module.exports = router