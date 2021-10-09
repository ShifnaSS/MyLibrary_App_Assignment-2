const express = require('express');
const addbookRouter = express.Router();

function router(nav){
    addbookRouter.get('/',function(req,res){
        res.render("addbook",{
            nav,
            title:'Library'
        });    
    })
    addbookRouter.get('/books',function(req,res){
        res.render("books",{
            nav,
            title:'Library'
        });    
    })
    return addbookRouter;
}
module.exports = router;