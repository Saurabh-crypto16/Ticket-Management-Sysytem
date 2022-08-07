const mongoose = require('mongoose')

//User Schema
const user = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    role:{
    type: [{
        type: String,
        enum: ['admin', 'employee']
    }],
    default: ['employee']
}
})

mongoose.model("User", user)
