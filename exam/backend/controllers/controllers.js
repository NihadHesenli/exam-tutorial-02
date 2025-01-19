const products = require('../modules/modudle')

const getAllWatches = async(req,res)=>{
    try {
        const watchs = await products.find({})
        res.status(200).send(watchs)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const getTheWatchById = async(req,res)=>{
    const id = req.params.id
    try {
        const watch = await products.findById(id)
        res.status(200).send(watch)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const deleteWatchDataById = async(req,res)=>{
    const id = req.params.id
    try {
        const deletedWatch = await products.findByIdAndDelete(id)

        if (!deletedWatch) {
            res.status(404).json({message : "product doesnt exist"})
        }

        res.status(200).send({deletedWatch})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const addNewData = async(req,res)=>{
    const {image,title,descriptoin,price} = req.body

    if (!image || !title || !descriptoin || !price) {
        res.status(500).json({message : 'fill all inputs'})
    }
    try {
     const newData = products({...req.body})
     await newData.save()   
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

module.exports = {getAllWatches,getTheWatchById,deleteWatchDataById,addNewData}