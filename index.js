const express= require('express');
const ejs= require('ejs');
const path= require('path');
const app= express();

app.set('view engine', 'ejs');
//app.use(express.static(path.join(__dirname,'/public/')));
app.get('/',(req,res)=>{
    res.render('index',{title:'Mathilalitha', data:['Mathi','lalitha']});
});
app.get('/login',(req,res)=>{
    res.render('login');
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
