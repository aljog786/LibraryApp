const express = require("express");
const chalk = require("chalk");
const path = require("path");
const bodyParser = require('body-parser');

var app = new express();
app.use(bodyParser.urlencoded({ extended: true }));
var nav = [{ link: '/books', title: 'Books' }, { link: '/authors', title: 'Authors' }, { link: '/books/add', title: 'AddBook' }];
var booksRouter = require("./src/routes/booksRouter.js")(nav);
var authorRouter = require("./src/routes/authorRouter.js")(nav);

app.use(express.static(path.join(__dirname, "public")));
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/books", booksRouter);
app.use("/author", authorRouter);

app.get("/", function (req, res) {


    res.render(
        'index.ejs',
        {
            nav: nav,
            title: 'Library'
        }
    );
});


/* app.get("/books", (req, res) =>{
     res.render("books.ejs",
     {
         nav:nav,
         title:'Books',
         books //books:books
     }
     );
 });*/
/*app.get("/books/:id",(req, res) => {
    var id = req.params.id; // or  req.param[id]
    res.render("book.ejs",
    {
        nav:nav,
        title:'Book',
        book: books[id]
    });
});*/

app.get("/authors", (req, res) => {
    res.render("authors.ejs",
        {
            nav: nav,
            title: 'Authors'
        });
});




app.listen(3000, () => {
    console.log("listerning to port " + chalk.green('3000'));
});