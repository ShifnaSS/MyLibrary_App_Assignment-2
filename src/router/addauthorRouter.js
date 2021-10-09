const express = require('express');
const addauthorRouter = express.Router();

function router(nav){
    addauthorRouter.get('/',function(req,res){
        res.render("addauthor",{
            nav,
            title:'Library'
        });
    })
    addauthorRouter.get('/authors',function(req,res){
        res.render("authors",{
            nav,
            title:'Library'
        });
    })
    return addauthorRouter;
    
}
module.exports = router;