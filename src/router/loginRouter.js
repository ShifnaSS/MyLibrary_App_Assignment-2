const express = require('express');
const loginRouter = express.Router();

function router(nav){
    loginRouter.get('/',function(req,res){
        res.render("login",{image1});
    })
    var image1 = [
        {
            img1 : 'heavybook.jpg'
        }
    ]
    return loginRouter;
}
module.exports = router;