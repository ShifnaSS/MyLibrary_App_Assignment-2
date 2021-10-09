const express = require('express');
const BooksRouter = express.Router();

function router(nav){
    BooksRouter.get('/',function(req,res){
        res.render("books",{
            nav,
            title:'Library',
            books
        });
    })
    var books = [
        {
            title : "Tom and Jerry",
            author : "Joseph Barbera",
            genre : "Cartoon",
            img : "tom.jpg"
        },
        {
            title : "Harry Potter",
            author : "J K Rowling",
            genre : "Fantasy",
            img : "harry.jpg"
        },
        {
            title : "Pathummayude Aadu",
            author : "Vaikom Muhammed Basheer",
            genre : "Drama",
            img : "pathumma.jpg"
        }
    ]
    BooksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('book',{
            nav,
            title:'Library',
            book : books[id]
        });
    });
    return BooksRouter;
}
module.exports = router;