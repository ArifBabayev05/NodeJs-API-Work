const express = require('express');
const productRouter = require('./routes/product')
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser")


const app = express();

app.use(bodyParser.json())

app.use(cors())

// 82.194.23.15/32
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.sjpf18q.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
    (e) => {
        if (e) {
            console.log(e);
        }
        else {
            console.log("Connected to Database")
        }
    })
const isLoggedIn = false;


app.get('/', (req, res) => {
    if (!isLoggedIn) {
        res.send("Hello User");
    }
    else {
        res.send("Hello Guest");
    }
})
app.use('/products', productRouter)

app.listen(1003, () => {
    console.log("Server is running on 5000");
});


// GetAll Products //get
// Get Product //:id //get
// Create Product //post
// Update Product //:id //put
// Delete Product //id //delete

