const express = require("express")
const app = express()
app.use(logger)
    //console.log(app)
app.get("/books", (req, res) => {
    return res.send({ route: "/books" });
});
app.get("/libraries", library("permission"), (req, res) => {
    res.send({ route: "/libraries" });
});
app.get("/author", author("permission"), (req, res) => {
    res.send({ route: "/author" });
});

function logger(req, res, next) {
    console.log(" yes i am in")
    next()
    console.log("yes work done")
}

function library(shawon) {
    return function loger(req, res, next) {
        if (shawon == true) {
            return next();
        }
        return res.send("Not allow")
    }
}

function author(shawon) {
    return function loger(req, res, next) {
        if (shawon == true) {
            return next();
        }
        return res.send("Not allow")
    }
}
app.listen(3000, () => {
    console.log("now i am in 3000 port")
})