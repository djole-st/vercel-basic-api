const express = require("express");
const app = express();
const product = require("./api/product");

app.use(express.json({ extended: false }));

//app.use("/api/product", product);

app.get('/home',(req,res)=>{
    res.send("Hello world");
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));