const express = require('express');
const authorRouter = express.Router();

function router(nav){
    authorRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:'Library',
            authors
        });
    })
    var authors = [
        {
            name : "Joseph Barbera",
            Nationality : "America",
            genre : "American Animator; director; producer; artist",
            famouswork : "Tom and Jerry ",
            img : "barbera.jpg"
        },
        {
            name : "J K Rowling",
            Nationality : "British",
            genre : "British author",
            famouswork : "Harry Potter series ",
            img : "jk.jpg"
        },
        {
            name : "Vaikom Muhammed Basheer",
            Nationality : "Indian",
            genre : "Novel, short story, essays, memoirs",
            famouswork : "Balyakalasakhi; Pathummayude Aadu",
            img : "basheer.jpg"
        }
    ]
    authorRouter.get('/:id1',function(req,res){
        const id1 = req.params.id1
        res.render('author',{
            nav,
            title:'Library',
            author : authors[id1]
        });
    });
    return authorRouter;
}
module.exports = router;