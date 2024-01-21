const mongoose = require("mongoose")

const QuizRegistration = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter a name"]
    },
    
    picture:{
        type:String,
        required:[true,"please provide a picture"]
    },
    educationLevel:{
        type:Number,
        required:[true,"from level 100 to 400"]
    }
})


const UserRegistration = mongoose.model("UserRegistration",QuizRegistration)

module.exports = UserRegistration
