const exp = require("express")
const app = exp();
const mc = require('mongodb').MongoClient;
const asyncHandler = require('express-async-handler')
var bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')
const path = require("path")


//import APIS
const userApi = require("./APIS/user-api")
// const productApi = require("./APIS/product-api")
// const adminApi = require("./APIS/admin-api")

//connect frontend and backend using path module
//path is a core module
app.use(exp.static(path.join(__dirname,"./dist/MEAN-APP")))


//execute specific api based on path
app.use("/user", userApi)
// app.use("/product", productApi)
// app.use("/admin",adminApi);

//invalid path
app.use((req,res,next)=>{
    res.send({message:`${req.url} is an invalid path...`})
})

//error handling middleware
app.use((err,req,res,next)=>{
    res.send({message:`error from an error handling middleware : ${err.message}`})
})


//assign port
const port = 3000;
app.listen(port, () => console.log(`server is up and running on port : ${port}...`))