const express = require("express");
const app = express();
const mongooseConnect = require("./configs/mongoDB.connect");

app.use(express.json())

const authMiddleware = require("./middlewares/auth.middleware");

const authRouter = require("./routes/auth.routes")
app.use("/auth", authRouter)

const usersRouter = require("./routes/users.routes");
app.use("/users", authMiddleware, usersRouter)

const booksRouter = require("./routes/books.routes");
app.use("/stays", booksRouter)

app.listen(8000, (err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log("server running on port: ", 8000)
    mongooseConnect()
})