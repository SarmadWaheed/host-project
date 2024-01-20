const express=require("express");
const router=express.Router();
const authadmin=require('../controller/admin-controller');
const authmiddleware=require('../middleware/authmiddleware');
const adminmiddleware=require('../middleware/admin-middleware');

router.get('/user',authmiddleware,authadmin.getusersdata);
router.get('/user/:id',authmiddleware,authadmin.getsingleuserdata);
router.get('/contact',authmiddleware,authadmin.getcontactdata);
router.patch('/user/update/:id',authmiddleware,authadmin.updatesingleuserdata)
router.delete('/user/delete/:id',authmiddleware,authadmin.deleteuserdata);
router.delete('/contact/delete/:id',authmiddleware,authadmin.deletecontactdata);
    



    module.exports= router;