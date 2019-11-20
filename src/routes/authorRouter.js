const express = require('express');
const authorRouter = express.Router();
var author = [
    {
        name: "aaa",
        age: "22",
        sex: "male",
        image: "/image/yash.JPG"
    },
    {
        name: "bbb",
        age: "40",
        sex: "male",
        image: "/image/AR.JPG"
    },
    {
        name: "ccc",
        age: "30",
        sex: "male",
        image: "/image/veda.JPG"
    },
    {
        name: "ddd",
        age: "37",
        sex: "male",
        image: "/image/vijay.JPG"
    },
];
function router(nav) {
    authorRouter.route('/')
        .get((req, res) => {
            res.render("author.ejs",
                {
                    nav, author, title: "author"
                }
            );
        });
    return authorRouter;
}
module.exports = router;