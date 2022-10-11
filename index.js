const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/home',(req,res)=>{
    res.send("Hello world");
});

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
});