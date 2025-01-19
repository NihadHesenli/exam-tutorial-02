const mongoose = require('mongoose')

const {Schema} = mongoose


const newSchema = new Schema(
    {
        image : {type : String , require : true},
        title : {type : String , require : true},
        description : {type : String , require : true},
        price : {type : Number , require : true},
    },
    {
        versionKey : false , timestamps : true
    }
)

const Products = mongoose.model('watchs',newSchema)


module.exports = Products