const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("Hello from base!");
});

app.get('/home',(req,res)=>{
    res.send("Hello world");
});

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
});

module.exports = app;