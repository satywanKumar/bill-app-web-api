const express = require('express');
const router = express.Router();
const Bill = require('../model/bill');
const mongoose = require('mongoose');


// const MIME_TYPE_MAP = {
//     'image/png' : 'png',
//     'image/jpeg': 'jpg',
//     'image/jpg' : 'jpg'
// }
// const storage = multer.diskStorage({
//     destination:(req, file, cb)=>{
//         const isValid = MIME_TYPE_MAP[file.mimetype];
//         let error = new Error("invalid mime type");
//         if(isValid)
//         {
//             error = null;
//         }
//         cb(error,'./upload/alumini');
//     },
//     filename:(req, file, cb)=>{
//         const name = file.originalname.toUpperCase().split(' ').join('-');
//         const ext = MIME_TYPE_MAP[file.mimetype];
//         cb(null,name + '-' + Date.now() + '.'+ ext )
//     }
// })

// const upload = multer({storage:storage});



// get request 
router.get('/',(req,res,next)=>{
   Bill.find()
   .then(result=>{
       res.status(200).json({
           bill:result
       })
   })
   .catch(err=>{
       res.status(500).json({
           error:err
       })
   })
})

// get by id
router.get('/:billId',(req,res,next)=>{
    Bill.findById(req.params.billId)
    .then(result=>{
        res.status(200).json({
            bill:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})

// post request
router.post('/',(req,res,next)=>{
   bill = new Bill({

       _id:new mongoose.Types.ObjectId,
       partyName:req.body.partyName,
       partyAdd1:req.body.partyAdd1,
       partyAdd2:req.body.partyAdd2,
       city:req.body.city,
       state:req.body.state,
       country:req.body.country,
       pin:req.body.pin,
       email:req.body.email,
       phone:req.body.phone,
       partyPanNo:req.body.partyPanNo,
       taxInvoiceNo:req.body.taxInvoiceNo,
       dateOfBill:req.body.dateOfBill,
       quantity:req.body.quantity,
       totalQuantity:req.body.totalQuantity,
       rate:req.body.rate,
       gst:req.body.gst,
       gstPercent:req.body.gstPercent,
       sgst:req.body.gst,
       sgstPercent:req.body.sgstPercent,
       basicValue:req.body.basicValue,
       grossTotal:req.body.grossTotal,
       shippingDetailPlace:req.body.shippingDetailPlace,
       vehicleNo:req.body.vehicleNo,
       vehicleType:req.body.vehicleType  
   })

   bill.save()
   .then(result=>{
       console.log(res);
       res.status(200).json({
           new_bill:result
       });
   })
   .catch(err=>{
       console.log(err);
       res.status(500).json({
           error:err
       })
   });

})

// update request
// router.put('/:aluminiId',upload.single("image"),(req,res,next)=>{
//     const url = req.protocol + "://" + req.get("host");
//     if(req.file)
//     {
//         console.log("image is here");
//         Alumini.findOneAndUpdate({_id:req.params.aluminiId},{
//             $set:{
//              name:req.body.name,
//              branch:req.body.branch,
//              batch:req.body.batch,
//              phone:req.body.phone,
//              email:req.body.email,
//              cwcName:req.body.cwcName,
//              location:req.body.location,
//              pwc:req.body.pwc,
//              totalExp:req.body.totalExp,
//              image:url + "/upload/alumini/" + req.file.filename
//             }
//         })
//         .then(result=>{
//          console.log(res);
//          res.status(200).json({
//              updated_Alumini:result
//          });
//      })
//      .catch(err=>{
//          console.log(err);
//          res.status(500).json({
//              error:err
//          })
//      });
//     }
//     else{
//         console.log("image is not here");
//         Alumini.findOneAndUpdate({_id:req.params.aluminiId},{
//             $set:{
//              name:req.body.name,
//              branch:req.body.branch,
//              batch:req.body.batch,
//              phone:req.body.phone,
//              email:req.body.email,
//              cwcName:req.body.cwcName,
//              location:req.body.location,
//              pwc:req.body.pwc,
//              totalExp:req.body.totalExp,
//             }
//         })
//         .then(result=>{
//          console.log(res);
//          res.status(200).json({
//              updated_Alumini:result
//          });
//      })
//      .catch(err=>{
//          console.log(err);
//          res.status(500).json({
//              error:err
//          })
//      });

//     }

// })

// delete request
router.delete('/:billId',(req,res,next)=>{
   Bill.remove({_id:req.params.billId})
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

router.get('/get/count',(req,res,next)=>{
    Bill.find().countDocuments()
    .then(result=>{
        res.status(200).json({
            total:result
        })
    })
})



module.exports = router;