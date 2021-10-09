const express = require('express');
var app = new express();
const port = process.env.PORT || 8888;
const nav = [
    {
        link:'/books',
        name:'Books'
    },
    {
        link:'/authors',
        name:'Authors'
    },
    {
        link:'/addbook',
        name:'Add a Book'
    },
    {
        link:'/addauthor',
        name:'Add an Author'
    },
    {
        link:'login',
        name:'Login/Signup'
    }
]
const BooksRouter = require('./src/router/bookRouter.js')(nav)
const authorRouter = require('./src/router/authorRouter.js')(nav)
const addbookRouter = require('./src/router/addbookRouter.js')(nav)
const addauthorRouter = require('./src/router/addauthorRouter.js')(nav)
const loginRouter = require('./src/router/loginRouter.js')(nav)
app.use(express.static("./public"));
app.use('/books',BooksRouter);
app.use('/authors',authorRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);
app.use('/login',loginRouter);
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views')
app.get("/",function(req,res){
    res.render("index",{
        nav,
        title:'Library'
    });
    res.end;
});  
app.get("/index",function(req,res){
    res.render("index",{
        nav,
        title:'Library'
    });
    res.end;
});  
app.listen(port,()=>{console.log("Server Ready at" +port)});
