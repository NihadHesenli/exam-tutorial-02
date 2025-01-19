const express = require('express')
 
const  {getAllWatches,getTheWatchById,deleteWatchDataById,addNewData} = require('../controllers/controllers')


const router = express.Router()

router.get('/',getAllWatches)
router.get('/:id',getTheWatchById)
router.delete('/:id',deleteWatchDataById)
router.post('/',addNewData)

module.exports = router