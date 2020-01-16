const express = require('express');
const router = express.Router();
const SsAccount = require('../model/accountBill');
const mongoose = require('mongoose');
const isAuth = require('../middleware/isAuth')

router.post('/',isAuth,(req,res,next)=>{
   account = new SsAccount({
    _id:new mongoose.Types.ObjectId,
    partyName:req.body.partyName,
    phone:req.body.phone,
    total:req.body.total,
    paid:req.body.paid,
    lastPay:req.body.lastPay,
    lastPayDate:req.body.lastPayDate
   });
   account.save()
   .then(result=>{
       res.status(200).json({
           new_student:result
       });
   })
   .catch(err=>{
       res.status(500).json({
           error:err
       })
   });
});

// get all student account detail
router.get('/',isAuth,(req,res,next)=>{
    SsAccount.find()
    .then(result=>{
        res.status(200).json({
            account:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    });
});

// get by id 
router.get('/:id',isAuth,(req,res,next)=>{
    SsAccount.findOne({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            account:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    });
})

// edit detail
router.put('/:id',isAuth,(req,res,next)=>{
    SsAccount.findOneAndUpdate({_id:req.params.id},{
        $set:{
            partyName:req.body.partyName,
            phone:req.body.phone,
            total:req.body.total,
            paid:req.body.paid,
            lastPay:req.body.lastPay,
            lastPayDate:req.body.lastPayDate
        }
    })
    .then(result=>{
        console.log(result);
        res.status(200).json({
            updated_data:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})


// pay by id 
router.put('/pay/:id',isAuth,(req,res,next)=>{
    SsAccount.findOneAndUpdate({_id:req.params.id},{
        $set:{
            paid:req.body.paid,
            lastPay:req.body.lastPay,
            lastPayDate:req.body.lastPayDate
        }
    })
    .then(result=>{
        console.log(result);
        res.status(200).json({
            updated_data:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})

// delete request
router.delete('/:id',isAuth,(req,res,next)=>{
    SsAccount.remove({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            msg:'deleted sucessfully'
        })
 
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
 })



module.exports = router;