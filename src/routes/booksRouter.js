const express = require('express');

const booksRouter = express.Router();
var books = [
    {
        title: "Autobiography",
        genre: "Life story",
        author: "Mahathma Gandi",
        image: "/image/yash.JPG"
    },
    {
        title: "Wings of Fire",
        genre: "Missile man",
        author: "Dr APJ Kalaam",
        image: "/image/AR.JPG"
    },
    {
        title: "Naalukettu",
        genre: "Novel",
        author: "M T Vasudevan",
        image: "/image/veda.JPG"
    },
    {
        title: "Paathummayude aadu",
        genre: "Story",
        author: "Basheer",
        image: "/image/vijay.JPG"
    }
];
function router(nav) {
    booksRouter.route('/')
        .get((req, res) => {
            res.render("books.ejs",
                {
                    nav: nav,
                    title: 'Books',
                    books //books:books
                }
            );
        });
    booksRouter.route('/add')
        .get((req, res) => {
            res.render("addform.ejs",
                {
                    nav: nav,
                    title: 'Addbook',
                }
            );
        });
    booksRouter.route('/save')
        .post((req, res) => {
            console.log(req.body);
            // var book={
            //     title:req.body.title,
            //     author:req.body.author,
            //     genre:req.body.genre
            // }
            books.push(req.body);
            res.send("ADDED");
        });

    booksRouter.route('/:id')
        .get((req, res) => {
            var id = req.params.id; // or  req.param[id]
            res.render("book.ejs",
                {
                    nav: nav,
                    title: 'Book',
                    book: books[id]
                });
        });
    return booksRouter;
}

module.exports = router;